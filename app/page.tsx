import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { Method } from "@/components/home/method";
import {
  Commitment,
  Comparison,
  Concepts,
  CreationProcess,
  Faq,
  FinalCta,
  Philosophy,
  Standards,
} from "@/components/home/homepage-sections";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://mrdstudio.fr/#webpage", url: "https://mrdstudio.fr", name: "MRD Studio — Création de sites internet sur mesure", description: "MRD Studio conçoit des sites internet sur mesure, performants et optimisés pour le référencement, à Avize et partout en France.", inLanguage: "fr-FR", isPartOf: { "@id": "https://mrdstudio.fr/#website" }, about: { "@id": "https://mrdstudio.fr/#business" }, primaryImageOfPage: { "@type": "ImageObject", url: "https://mrdstudio.fr/logo.png", width: 1536, height: 1024 } }} />
      <Header />
      <main id="contenu-principal">
        <Hero />
        <Philosophy />
        <Method />
        <Standards />
        <Concepts />
        <Comparison />
        <Commitment />
        <CreationProcess />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
