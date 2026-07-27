import Link from "next/link";
import { ArrowRight, Check, Layers3, Search, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceBySlug, type ServiceProfile } from "@/lib/service-data";

const localLinks = [
  ["Reims", "/creation-site-reims"],
  ["Épernay", "/creation-site-epernay"],
  ["Châlons-en-Champagne", "/creation-site-chalons-en-champagne"],
  ["Troyes", "/creation-site-troyes"],
  ["Charleville-Mézières", "/creation-site-charleville-mezieres"],
  ["Laon", "/creation-site-laon"],
];

export function ServicePage({ service }: { service: ServiceProfile }) {
  const url = `https://mrdstudio.fr/${service.slug}`;
  const related = service.related.map((slug) => serviceBySlug[slug]).filter(Boolean);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.title,
      description: service.metaDescription,
      url,
      provider: { "@id": "https://mrdstudio.fr/#business" },
      areaServed: { "@type": "Country", name: "France" },
      serviceType: service.shortTitle,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://mrdstudio.fr" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://mrdstudio.fr/#methode" },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-24 pt-44 sm:pt-52">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_58%_at_78%_42%,rgba(0,217,255,.13),transparent_68%),linear-gradient(135deg,#06070a,#10131a_58%,#06070a)]" />
          <div className="particles absolute inset-0 opacity-25" />
          <div className="container-wide relative">
            <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap gap-2 text-[10px] uppercase tracking-[.14em] text-white/35">
              <Link href="/">Accueil</Link><span>/</span><span>Services</span><span>/</span><span className="text-accent">{service.shortTitle}</span>
            </nav>
            <Reveal>
              <p className="eyebrow mb-7">Expertise MRD Studio</p>
              <h1 className="display max-w-6xl text-[clamp(56px,8vw,120px)] leading-[.86] tracking-[-.055em]">{service.title}</h1>
              <p className="mt-10 max-w-3xl text-base leading-8 text-muted sm:text-lg">{service.lead}</p>
              <div className="mt-10 flex flex-wrap gap-3"><Button href="/contact">Parler de votre projet</Button><Button href="#methode-service" variant="secondary">Comprendre la méthode</Button></div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad bg-panel/45">
          <div className="container-wide grid gap-16 lg:grid-cols-2">
            <Reveal><p className="eyebrow mb-5">Pour qui ?</p><h2 className="display text-5xl tracking-[-.045em] sm:text-6xl">Une réponse adaptée<br /><span className="text-accent">au contexte réel.</span></h2><p className="mt-8 text-[15px] leading-8 text-muted">{service.audience}</p><p className="mt-6 text-[15px] leading-8 text-muted">{service.problem}</p></Reveal>
            <Reveal delay={.1}><div className="premium-card h-full p-9 sm:p-12"><ShieldCheck className="text-accent" strokeWidth={1.3} /><p className="eyebrow mb-5 mt-16">Notre approche</p><p className="display text-3xl leading-[1.25]">{service.promise}</p><p className="mt-8 text-sm leading-7 text-muted">Chaque recommandation est reliée à un besoin, une contrainte ou une mesure. Nous ne promettons ni position garantie ni résultat commercial indépendant de votre marché.</p></div></Reveal>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-wide">
            <Reveal><p className="eyebrow mb-5">Livrables</p><h2 className="display text-5xl tracking-[-.045em] sm:text-7xl">Un périmètre lisible,<br /><span className="text-accent">avant de commencer.</span></h2></Reveal>
            <div className="mt-14 grid gap-4 md:grid-cols-2">{service.deliverables.map((item, index) => <Reveal key={item} delay={index * .05}><div className="premium-card flex min-h-28 items-center gap-5 p-6"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-accent/25 text-accent"><Check size={14} /></span><span className="text-sm">{item}</span></div></Reveal>)}</div>
          </div>
        </section>

        <section id="methode-service" className="section-pad bg-panel/45">
          <div className="container-wide">
            <Reveal><p className="eyebrow mb-5">Méthode</p><h2 className="display max-w-4xl text-5xl tracking-[-.045em] sm:text-7xl">Transformer un objectif<br /><span className="text-accent">en décisions concrètes.</span></h2></Reveal>
            <div className="mt-16 border-t border-white/10">{service.method.map((item, index) => <Reveal key={item} delay={index * .05}><div className="grid items-center gap-5 border-b border-white/10 py-7 sm:grid-cols-[80px_1fr_auto]"><span className="text-[10px] tracking-[.2em] text-accent">0{index + 1}</span><h3 className="display text-3xl">{item}</h3><ArrowRight size={16} className="hidden text-white/25 sm:block" /></div></Reveal>)}</div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-wide grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <Reveal><Search className="text-accent" /><p className="eyebrow mb-5 mt-8">Questions fréquentes</p><h2 className="display text-5xl tracking-[-.045em]">Décider avec<br /><span className="text-accent">les bonnes informations.</span></h2></Reveal>
            <Reveal delay={.1}><div className="border-t border-white/10">{service.faq.map(([question, answer]) => <details key={question} className="group border-b border-white/10 py-6"><summary className="flex cursor-pointer list-none justify-between gap-5 font-medium"><span>{question}</span><span className="text-accent transition-transform duration-500 group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-5 text-sm leading-7 text-muted">{answer}</p></details>)}</div></Reveal>
          </div>
        </section>

        <section className="section-pad bg-panel/45">
          <div className="container-wide">
            <Reveal><Layers3 className="text-accent" /><p className="eyebrow mb-5 mt-8">Continuer l’exploration</p><h2 className="display text-5xl tracking-[-.045em]">Expertises <span className="text-accent">liées.</span></h2></Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/${item.slug}`} className="premium-card group p-7"><h3 className="display text-2xl">{item.shortTitle}</h3><p className="mt-4 text-xs leading-6 text-muted">{item.metaDescription}</p><ArrowRight className="mt-8 text-accent transition-transform duration-500 group-hover:translate-x-1" size={16} /></Link>)}</div>
            <div className="mt-14 border-t border-white/10 pt-9"><p className="text-[10px] uppercase tracking-[.16em] text-white/35">Création de sites dans le Grand Est</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">{localLinks.map(([name, href]) => <Link key={href} href={href} className="text-xs text-muted underline decoration-white/15 underline-offset-4 hover:text-accent">{name}</Link>)}</div></div>
          </div>
        </section>

        <section className="relative py-28 text-center"><Reveal className="container-wide"><h2 className="display text-5xl tracking-[-.045em] sm:text-7xl">Un projet mérite une<br /><span className="text-accent">réponse précise.</span></h2><Button href="/contact" className="mt-10">Échanger avec MRD Studio</Button></Reveal></section>
      </main>
      <Footer />
    </>
  );
}
