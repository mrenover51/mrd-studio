import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const destination = "mrenover51@gmail.com";
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const MAX_BODY_BYTES = 12_000;

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);
  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > RATE_MAX;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const requestOrigin = new URL(request.url).origin;
    if (origin && origin !== requestOrigin) {
      return NextResponse.json({ message: "Origine de la requête invalide." }, { status: 403 });
    }
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json({ message: "Format de requête invalide." }, { status: 415 });
    }
    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return NextResponse.json({ message: "La requête est trop volumineuse." }, { status: 413 });
    }
    const clientKey = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { message: "Trop de tentatives. Réessayez dans quelques minutes." },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    }

    const result = contactSchema.safeParse(await request.json());
    if (!result.success) {
      return NextResponse.json({ message: "Certaines informations sont invalides." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    if (!apiKey || !from) {
      return NextResponse.json({ message: "Le service d’envoi est momentanément indisponible." }, { status: 503 });
    }

    const { name, company, phone, email, projectType, budget, message, submittedAt } = result.data;
    const elapsed = Date.now() - submittedAt;
    if (elapsed < 3_000 || elapsed > 2 * 60 * 60 * 1000) {
      return NextResponse.json({ message: "Veuillez actualiser le formulaire puis réessayer." }, { status: 400 });
    }
    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company || "Non renseignée"),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      projectType: escapeHtml(projectType),
      budget: escapeHtml(budget || "Non renseigné"),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    const resend = new Resend(apiKey);
    const sendEmail = resend.emails.send({
      from,
      to: destination,
      replyTo: email,
      subject: "Nouvelle demande depuis MRD Studio",
      html: `
        <!doctype html>
        <html lang="fr">
          <body style="margin:0;background:#06070a;color:#ffffff;font-family:Arial,sans-serif">
            <div style="padding:44px 18px">
              <div style="max-width:680px;margin:auto;border:1px solid #29211d;border-radius:20px;overflow:hidden;background:#0d0d0d">
                <div style="padding:34px 40px;border-bottom:1px solid #29211d;background:linear-gradient(135deg,#111,#090706)">
                  <img src="https://mrd-studio.fr/logo.png" width="112" alt="MRD Studio" style="display:block;max-width:112px;height:auto" />
                  <p style="margin:24px 0 0;color:#00d9ff;font-size:11px;letter-spacing:2px;text-transform:uppercase">Nouvelle demande</p>
                  <h1 style="margin:10px 0 0;font-size:36px;font-weight:500">Un nouveau projet commence.</h1>
                </div>
                <div style="padding:38px 40px">
                  <table role="presentation" width="100%" style="border-collapse:collapse;color:#b8b8b8;font-size:14px">
                    ${[
                      ["Nom", safe.name],
                      ["Entreprise", safe.company],
                      ["Téléphone", safe.phone],
                      ["Email", safe.email],
                      ["Projet", safe.projectType],
                      ["Budget", safe.budget],
                    ].map(([label, value]) => `<tr><td style="padding:13px 0;border-bottom:1px solid #242936;color:#00d9ff;width:145px">${label}</td><td style="padding:13px 0;border-bottom:1px solid #242936">${value}</td></tr>`).join("")}
                  </table>
                  <div style="margin-top:30px">
                    <p style="color:#00d9ff;font-size:11px;letter-spacing:2px;text-transform:uppercase">Message</p>
                    <p style="margin-top:14px;color:#f8f8f8;font-size:15px;line-height:1.8">${safe.message}</p>
                  </div>
                </div>
                <div style="padding:20px 40px;border-top:1px solid #29211d;color:#777;font-size:11px">MRD Studio · 425 Rempart du Nord, 51190 Avize</div>
              </div>
            </div>
          </body>
        </html>`,
    });
    const { error } = await Promise.race([
      sendEmail,
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Email provider timeout")), 12_000),
      ),
    ]);

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "L’envoi n’a pas pu aboutir. Réessayez dans quelques instants." }, { status: 502 });
    }
    return NextResponse.json({ message: "Votre demande a bien été envoyée." });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Une erreur inattendue est survenue." }, { status: 500 });
  }
}
