import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { CookieButton } from "@/components/cookies/CookieButton";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/10 bg-ink">
      <div className="pointer-events-none absolute right-[-12%] top-[-70%] size-[520px] rounded-full bg-electric/[.055] blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,217,255,.25)_40%,rgba(122,92,255,.25)_62%,transparent)]" />

      <div className="container-wide relative grid gap-16 py-16 md:grid-cols-[.9fr_1.1fr] md:gap-24 lg:gap-36 lg:py-20">
        <div>
          <div className="display text-4xl tracking-[-.04em] text-accent">MRD Studio.</div>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Studio digital indépendant. Nous imaginons des présences digitales singulières, utiles et durables.
          </p>
          <div className="mt-10 flex items-center gap-3 text-[8px] uppercase tracking-[.24em] text-white/30">
            <span className="size-1 rounded-full bg-accent shadow-[0_0_9px_#00d9ff]" />
            Design · Performance · Visibilité
          </div>
        </div>

        <div>
          <p className="eyebrow mb-8">Informations</p>
          <div className="grid gap-7 sm:grid-cols-2">
            <a href="tel:+33607846425" className="group flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-accent/15 bg-accent/[.035] text-accent transition-all duration-500 group-hover:border-accent/35 group-hover:shadow-[0_0_18px_rgba(0,217,255,.08)]"><Phone size={15} strokeWidth={1.4} /></span>
              <span><span className="block text-[9px] uppercase tracking-[.18em] text-white/35">Téléphone</span><span className="mt-2 block text-sm text-muted transition-colors duration-500 group-hover:text-paper">06 07 84 64 25</span></span>
            </a>
            <a href="mailto:contact@mrdstudio.fr" className="group flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-accent/15 bg-accent/[.035] text-accent transition-all duration-500 group-hover:border-accent/35 group-hover:shadow-[0_0_18px_rgba(0,217,255,.08)]"><Mail size={15} strokeWidth={1.4} /></span>
              <span><span className="block text-[9px] uppercase tracking-[.18em] text-white/35">Email</span><span className="mt-2 block text-sm text-muted transition-colors duration-500 group-hover:text-paper">contact@mrdstudio.fr</span></span>
            </a>
            <div className="flex gap-4 sm:col-span-2">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-accent/15 bg-accent/[.035] text-accent"><MapPin size={15} strokeWidth={1.4} /></span>
              <span><span className="block text-[9px] uppercase tracking-[.18em] text-white/35">Localisation</span><span className="mt-2 block text-sm leading-6 text-muted">Avize (Marne)<br />Intervention partout en France</span></span>
            </div>
          </div>
          <p className="mt-9 max-w-xl border-t border-white/[.07] pt-7 text-xs leading-6 text-white/45">
            Chaque projet est conçu sur mesure, avec une attention particulière portée au design, aux performances et au référencement.
          </p>
          <nav aria-label="Informations légales" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[9px] uppercase tracking-[.1em] text-white/35">
            <Link href="/politique-de-confidentialite" className="transition-colors duration-500 hover:text-accent">Confidentialité</Link>
            <Link href="/politique-cookies" className="transition-colors duration-500 hover:text-accent">Politique cookies</Link>
            <Link href="/mentions-legales" className="transition-colors duration-500 hover:text-accent">Mentions légales</Link>
            <CookieButton />
          </nav>
        </div>
      </div>

      <div className="container-wide relative flex flex-col gap-3 border-t border-white/[.07] py-6 text-[9px] uppercase tracking-[.14em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 MRD Studio — Tous droits réservés.</span>
        <span>Créé avec passion <span className="mx-1.5 text-accent/55">•</span> Développé avec précision</span>
      </div>
    </footer>
  );
}
