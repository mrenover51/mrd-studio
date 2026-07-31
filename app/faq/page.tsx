import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "FAQ création de site internet, SEO et accompagnement",
  description: "30 réponses transparentes sur la création de site internet, le SEO, les délais, les budgets, la performance, la maintenance et l’accompagnement MRD Studio.",
  alternates: {
    canonical: "/faq",
    languages: { "fr-FR": "/faq", "x-default": "/faq" },
  },
  openGraph: {
    title: "FAQ — Création de site internet et SEO",
    description: "Des réponses précises sur les sites sur mesure, le référencement, la performance et la méthode MRD Studio.",
    url: "/faq",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MRD Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Création de site internet et SEO",
    description: "30 réponses transparentes sur la création de site, le SEO et l’accompagnement.",
    images: ["/og-image.jpg"],
  },
};

export default function FaqPage() {
  const url = "https://mrdstudio.fr/faq";
  return (
    <>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faqItems.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://mrdstudio.fr" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: url },
          ],
        },
      ]} />
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-24 pt-44 sm:pt-52">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(0,217,255,.11),transparent_36%),#06070a]" />
          <div className="container-wide relative">
            <nav aria-label="Fil d’Ariane" className="mb-10 flex gap-2 text-[10px] uppercase tracking-[.14em] text-white/35">
              <Link href="/">Accueil</Link><span>/</span><span className="text-accent">FAQ</span>
            </nav>
            <Reveal>
              <p className="eyebrow mb-7">Décider en confiance</p>
              <h1 className="display max-w-5xl text-[clamp(58px,9vw,132px)] leading-[.86] tracking-[-.055em]">Des réponses<br /><span className="text-accent">sans détour.</span></h1>
              <p className="mt-9 max-w-2xl text-base leading-8 text-muted">Budget, délais, référencement, performance et accompagnement : voici les réponses aux questions les plus fréquentes avant de lancer un projet digital.</p>
            </Reveal>
          </div>
        </section>
        <section className="section-pad bg-panel/40">
          <div className="container-wide grid gap-12 lg:grid-cols-[.3fr_.7fr]">
            <aside><div className="sticky top-32"><p className="eyebrow">30 questions</p><p className="mt-5 max-w-xs text-sm leading-7 text-muted">Une réponse manque ? Écrivez-nous : nous vous répondrons avec précision, sans promesse artificielle.</p></div></aside>
            <div className="border-t border-white/10">
              {faqItems.map(([question, answer], index) => (
                <Reveal key={question}>
                  <details className="group border-b border-white/10 py-7">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <span className="flex gap-5"><span className="mt-1 text-[9px] tracking-[.16em] text-accent">{String(index + 1).padStart(2, "0")}</span><span className="display text-xl sm:text-2xl">{question}</span></span>
                      <span aria-hidden="true" className="text-accent transition-transform duration-500 group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-2xl pl-11 pt-5 text-sm leading-7 text-muted">{answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="py-28 text-center"><Reveal className="container-wide"><h2 className="display text-5xl tracking-[-.045em] sm:text-7xl">Parlons de votre<br /><span className="text-accent">contexte réel.</span></h2><Button href="/contact" className="mt-10">Échanger avec MRD Studio</Button></Reveal></section>
      </main>
      <Footer />
    </>
  );
}
