import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { getProject, projects } from "@/lib/realisations-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const path = `/realisations/${project.slug}`;
  return {
    title: `${project.name} — Réalisation`,
    description: project.positioning,
    alternates: { canonical: path, languages: { "fr-FR": path, "x-default": path } },
    openGraph: { title: `${project.name} | Réalisation MRD Studio`, description: project.positioning, url: path, locale: "fr_FR", type: "article", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: project.name }] },
    twitter: { card: "summary_large_image", title: `${project.name} | MRD Studio`, description: project.positioning, images: ["/og-image.jpg"] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const url = `https://mrdstudio.fr/realisations/${project.slug}`;
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", "@type": "CreativeWork", "@id": `${url}#project`, url, name: project.name, description: project.positioning, genre: project.category, about: project.activity, creator: { "@id": "https://mrdstudio.fr/#business" }, inLanguage: "fr-FR" }, { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://mrdstudio.fr" }, { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://mrdstudio.fr/realisations" }, { "@type": "ListItem", position: 3, name: project.name, item: url }] }]} />
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(139,92,246,.11),transparent_34%),radial-gradient(circle_at_12%_78%,rgba(0,229,255,.07),transparent_30%),#06070a]" />
          <div className="container-wide relative">
            <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap gap-2 text-[9px] uppercase tracking-[.14em] text-white/35"><Link href="/">Accueil</Link><span>/</span><Link href="/realisations">Réalisations</Link><span>/</span><span className="text-accent">{project.name}</span></nav>
            <Reveal>
              <p className="eyebrow mb-7">{project.category}</p>
              <h1 className="display max-w-6xl text-[clamp(56px,9vw,126px)] leading-[.84] tracking-[-.055em]">{project.name}</h1>
              <p className="mt-7 text-[10px] uppercase tracking-[.18em] text-electric">{project.activity}</p>
            </Reveal>
          </div>
        </section>
        <section className="pb-24 sm:pb-32">
          <div className="container-wide">
            <Reveal className="overflow-hidden rounded-[24px] border border-white/[.1] bg-[#0b0e15] p-2 shadow-[0_30px_90px_rgba(0,0,0,.42)] sm:p-3">
              <div className="relative overflow-hidden rounded-[17px] bg-[#080a0f]"><Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} quality={90} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1279px) calc(100vw - 64px), 1280px" className="h-auto w-full object-contain object-top" /></div>
            </Reveal>
          </div>
        </section>
        <section className="section-pad border-t border-white/[.07] bg-panel/25">
          <div className="container-wide grid gap-14 lg:grid-cols-[.34fr_.66fr] lg:gap-24">
            <Reveal><p className="eyebrow">Le projet</p><h2 className="display mt-6 text-4xl tracking-[-.045em] sm:text-6xl">Une réponse<br /><span className="text-accent">sur mesure.</span></h2></Reveal>
            <Reveal className="space-y-12">
              <div><p className="text-[9px] uppercase tracking-[.18em] text-accent">Présentation</p><p className="mt-5 max-w-3xl text-base leading-8 text-muted">{project.positioning}</p></div>
              <div><p className="text-[9px] uppercase tracking-[.18em] text-electric">Objectif documenté</p><p className="mt-5 max-w-3xl text-base leading-8 text-muted">Concevoir une expérience digitale cohérente avec l’activité « {project.activity} » et le positionnement {project.category.toLowerCase()} du projet.</p></div>
              <div className="border-t border-white/[.08] pt-9"><p className="max-w-3xl text-sm leading-7 text-white/45">Cette étude de cas sera enrichie progressivement à partir d’éléments vérifiés : problématique, conception, fonctionnalités, responsive, technologies, galerie et résultat.</p></div>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/35 bg-accent/[.07] px-5 text-[9px] uppercase tracking-[.14em] text-paper transition-colors hover:border-accent/65">Visiter le site <ArrowUpRight size={13} /></a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
