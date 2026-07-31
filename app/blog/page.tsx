import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { blogArticles } from "@/lib/seo-local-data";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Conseils création de site et SEO local",
  description: "Guides MRD Studio sur la création de sites internet, le référencement Google, le SEO local et la stratégie digitale dans le Grand Est.",
  alternates: { canonical: "/blog", languages: { "fr-FR": "/blog", "x-default": "/blog" } },
  openGraph: { title: "Le journal MRD Studio", description: "Conseils concrets pour construire une présence digitale visible et performante.", url: "/blog", locale: "fr_FR", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MRD Studio" }] },
  twitter: { card: "summary_large_image", title: "Le journal MRD Studio", description: "Conseils concrets sur la création de site, le SEO et la visibilité locale.", images: ["/og-image.jpg"] },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Blog", name: "Le journal MRD Studio", url: "https://mrdstudio.fr/blog", publisher: { "@id": "https://mrdstudio.fr/#business" }, blogPost: blogArticles.map(([slug, title]) => ({ "@type": "BlogPosting", headline: title, url: `https://mrdstudio.fr/blog/${slug}` })) }} />
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-24 pt-44 sm:pt-52"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(214,169,138,.11),transparent_42%),#050505]" /><div className="particles absolute inset-0" /><div className="container-wide relative"><Reveal><p className="eyebrow mb-7">Le journal MRD</p><h1 className="display max-w-5xl text-[clamp(64px,10vw,142px)] leading-[.83] tracking-[-.06em]">Comprendre.<br /><em className="font-normal text-accent">Décider. Grandir.</em></h1><p className="mt-10 max-w-xl text-base leading-8 text-muted">Des analyses utiles sur le web, le référencement et la visibilité locale. Sans recettes miracles, avec une méthode.</p></Reveal></div></section>
        <section className="section-pad"><div className="container-wide grid gap-4 md:grid-cols-2">{blogArticles.map(([slug, title, description], index) => <Reveal key={slug} delay={(index % 2) * .06}><Link href={`/blog/${slug}`} className="group flex min-h-[300px] flex-col justify-between rounded-[22px] border border-white/10 bg-panel p-8 transition-all duration-700 hover:-translate-y-1 hover:border-accent/30 sm:p-10"><div><span className="text-[10px] tracking-[.15em] text-accent">{String(index + 1).padStart(2, "0")}</span><h2 className="display mt-6 text-4xl leading-[1.02]">{title}</h2><p className="mt-5 max-w-lg text-xs leading-6 text-muted">{description}</p></div><ArrowUpRight className="mt-9 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" /></Link></Reveal>)}</div></section>
      </main>
      <Footer />
    </>
  );
}
