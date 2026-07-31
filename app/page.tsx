import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import dynamic from "next/dynamic";
import { JsonLd } from "@/components/seo/json-ld";

const Method = dynamic(() => import("@/components/home/method").then((module) => module.Method));
const TrustStrip = dynamic(() => import("@/components/home/homepage-sections").then((module) => module.TrustStrip));
const Comparison = dynamic(() => import("@/components/home/homepage-sections").then((module) => module.Comparison));
const Commitment = dynamic(() => import("@/components/home/homepage-sections").then((module) => module.Commitment));
const Portfolio = dynamic(() => import("@/components/home/homepage-sections").then((module) => module.Portfolio));
const Metrics = dynamic(() => import("@/components/home/homepage-sections").then((module) => module.Metrics));
const FinalCta = dynamic(() => import("@/components/home/homepage-sections").then((module) => module.FinalCta));

export default function Home() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": "https://mrdstudio.fr/#webpage", url: "https://mrdstudio.fr", name: "MRD Studio — Création de sites internet sur mesure", description: "MRD Studio conçoit des sites internet sur mesure, performants et optimisés pour le référencement, à Avize et partout en France.", inLanguage: "fr-FR", isPartOf: { "@id": "https://mrdstudio.fr/#website" }, about: { "@id": "https://mrdstudio.fr/#business" }, primaryImageOfPage: { "@type": "ImageObject", url: "https://mrdstudio.fr/og-image.jpg", width: 1200, height: 630 } }} />
      <Header />
      <main id="contenu-principal">
        <Hero />
        <TrustStrip />
        <Comparison />
        <Method />
        <Commitment />
        <Portfolio />
        <Metrics />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
