import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ProjectShowcase } from "@/components/realisations/project-showcase";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/realisations-data";

export const metadata: Metadata = {
  title: "Réalisations — Sites internet et plateformes sur mesure",
  description: "Découvrez les réalisations de MRD Studio : sites vitrines premium, expériences de réservation et plateformes web métier.",
  alternates: { canonical: "/realisations", languages: { "fr-FR": "/realisations", "x-default": "/realisations" } },
  openGraph: { title: "Réalisations | MRD Studio", description: "Sites premium et plateformes web conçus par MRD Studio.", url: "/realisations", locale: "fr_FR", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Réalisations MRD Studio" }] },
  twitter: { card: "summary_large_image", title: "Réalisations | MRD Studio", description: "Sites premium et plateformes web conçus par MRD Studio.", images: ["/og-image.jpg"] },
};

export default function RealisationsPage() {
  const url = "https://mrdstudio.fr/realisations";
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "Réalisations MRD Studio", description: metadata.description, inLanguage: "fr-FR", isPartOf: { "@id": "https://mrdstudio.fr/#website" }, mainEntity: { "@type": "ItemList", itemListElement: projects.map((project, index) => ({ "@type": "ListItem", position: index + 1, name: project.name, url: `${url}/${project.slug}` })) } }} />
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-20 pt-44 sm:pb-28 sm:pt-52">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(0,229,255,.1),transparent_34%),radial-gradient(circle_at_18%_75%,rgba(139,92,246,.08),transparent_32%),#06070a]" />
          <Reveal className="container-wide relative">
            <p className="eyebrow mb-7">Réalisations</p>
            <h1 className="display max-w-6xl text-[clamp(58px,9vw,132px)] leading-[.85] tracking-[-.055em]">Des expériences pensées<br /><span className="text-accent">pour le réel.</span></h1>
            <p className="mt-9 max-w-2xl text-base leading-8 text-muted">Quatre projets, quatre contextes métier et une même exigence : rendre l’offre claire, créer une présence singulière et faciliter l’action.</p>
          </Reveal>
        </section>
        <section className="section-pad pt-10 sm:pt-14">
          <div className="container-wide"><ProjectShowcase projects={projects} /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
