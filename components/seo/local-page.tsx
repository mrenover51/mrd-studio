import Link from "next/link";
import { ArrowRight, MapPin, Search, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import type { Department } from "@/lib/seo-local-data";
import { citySlug } from "@/lib/seo-local-data";

const services = [
  ["Direction artistique", "Une identité numérique reconnaissable, cohérente avec votre positionnement et conçue sans thème préfabriqué.", Sparkles, "/creation-identite-visuelle"],
  ["Développement Next.js", "Une base technique moderne, rapide, sécurisée et maintenable sur mobile comme sur ordinateur.", Smartphone, "/creation-site-internet"],
  ["Référencement local", "Une architecture, des contenus et des données structurées qui répondent aux recherches de votre territoire.", Search, "/seo-local"],
  ["Accompagnement", "Un interlocuteur impliqué, des objectifs mesurables et une amélioration continue après la mise en ligne.", ShieldCheck, "/maintenance-site-internet"],
];

const faqs = [
  ["Quel budget prévoir pour la création d’un site internet ?", "Un site professionnel sur mesure démarre généralement autour de quelques milliers d’euros. Le périmètre, le contenu, les fonctionnalités, le niveau de direction artistique et les besoins SEO déterminent l’investissement final. MRD Studio fournit une proposition détaillée après un premier échange gratuit."],
  ["Combien de temps faut-il pour mettre un site en ligne ?", "Un site vitrine structuré demande souvent six à dix semaines. Une plateforme éditoriale ou e-commerce peut nécessiter davantage de temps. Le calendrier inclut la stratégie, la conception, les validations, le développement, la rédaction, les tests et la préparation du lancement."],
  ["Le référencement local est-il inclus ?", "Les fondations SEO sont intégrées dès la conception : structure sémantique, métadonnées, performances, données structurées, maillage et indexabilité. Un accompagnement éditorial continu peut compléter ce socle pour développer durablement la visibilité."],
  ["Pourrons-nous modifier les contenus ?", "Oui. L’administration est pensée selon votre niveau d’autonomie. Nous documentons les actions courantes et pouvons également assurer la maintenance, les évolutions et la publication de nouveaux contenus."],
];

function Schemas({ title, description, path, department, city }: { title: string; description: string; path: string; department: Department; city?: string }) {
  const url = `https://mrdstudio.fr/${path}`;
  const area = city || department.name;
  return (
    <JsonLd data={[
      { "@context": "https://schema.org", "@type": "Service", name: title, description, url, provider: { "@id": "https://mrdstudio.fr/#business" }, areaServed: { "@type": city ? "City" : "AdministrativeArea", name: area }, serviceType: "Création de sites internet et référencement local" },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://mrdstudio.fr" }, { "@type": "ListItem", position: 2, name: `Création de site ${department.name}`, item: `https://mrdstudio.fr/creation-site-${department.slug}` }, ...(city ? [{ "@type": "ListItem", position: 3, name: `Création de site ${city}`, item: url }] : [])] },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ]} />
  );
}

export function LocalPage({ department, city, cityProfile }: { department: Department; city?: string; cityProfile?: { nearby: string[]; focus: string; market: string } }) {
  const area = city || `la ${department.name}`;
  const path = city ? `creation-site-${citySlug(city)}` : `creation-site-${department.slug}`;
  const title = city ? `Création de site internet à ${city}` : `Création de site internet dans la ${department.name}`;
  const description = city ? `Agence web premium à ${city} : sites internet sur mesure, refonte, SEO local et accompagnement pour entreprises, artisans et commerces.` : `MRD Studio crée des sites internet premium dans la ${department.name} (${department.code}) pour les PME, artisans, commerces, domaines et professions libérales.`;

  return (
    <>
      <Schemas title={title} description={description} path={path} department={department} city={city} />
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-24 pt-44 sm:pt-52">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_42%_58%_at_78%_40%,rgba(0,217,255,.13),transparent_72%),linear-gradient(135deg,#06070a,#10131a_58%,#06070a)]" />
          <div className="particles absolute inset-0 opacity-30" />
          <div className="container-wide relative">
            <nav aria-label="Fil d’Ariane" className="mb-10 flex flex-wrap gap-2 text-[10px] uppercase tracking-[.14em] text-white/35"><Link href="/">Accueil</Link><span>/</span>{city && <><Link href={`/creation-site-${department.slug}`}>{department.name}</Link><span>/</span></>}<span className="text-accent">{city || department.name}</span></nav>
            <Reveal><div className="mb-7 flex items-center gap-3"><MapPin size={14} className="text-accent" /><span className="eyebrow">Grand Est · {department.code}</span></div><h1 className="display max-w-6xl text-[clamp(58px,9vw,132px)] leading-[.84] tracking-[-.055em]">{title.split(" à ")[0].split(" dans ")[0]}<br /><em className="font-normal text-accent">{city ? `à ${city}.` : `dans la ${department.name}.`}</em></h1><p className="mt-10 max-w-2xl text-base leading-8 text-muted">{city && cityProfile ? `À ${city}, MRD Studio accompagne les ${cityProfile.focus}. Nous créons des expériences rapides et distinctives pour répondre à ${cityProfile.market}.` : department.lead}</p><div className="mt-10 flex flex-wrap gap-3"><Button href="/contact">Parler de votre projet</Button><Button href="/#concepts" variant="secondary">Découvrir notre approche</Button></div></Reveal>
          </div>
        </section>

        <section className="section-pad bg-panel">
          <div className="container-wide">
            <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow mb-5">Comprendre le territoire</p><h2 className="display text-5xl leading-[.95] tracking-[-.04em] sm:text-7xl">Une stratégie locale,<br /><span className="text-accent">jamais localiste.</span></h2></div><div className="space-y-7 text-[15px] leading-8 text-muted">{city && cityProfile ? <><p>Le marché de {city} s’inscrit dans le département de {department.name}, dont l’économie associe {department.economy.charAt(0).toLowerCase() + department.economy.slice(1)}</p><p>Une entreprise locale ne doit pas se limiter à apparaître lorsqu’un internaute saisit son nom. Elle doit répondre aux questions qui précèdent le choix : prestations, méthode, prix, délais, zone couverte, réalisations et garanties. À {city}, cette profondeur éditoriale permet de se distinguer des annuaires et des sites trop génériques.</p><p>{department.localSeo}</p><p>Notre proximité avec le Grand Est facilite les échanges, mais notre approche reste celle d’un studio : recherche, direction artistique, développement exigeant et mesure. Le site devient un outil commercial cohérent avec la réalité de votre entreprise.</p></> : <><p>{department.economy}</p><p>{department.territory}</p><p>{department.opportunities}</p><p>{department.localSeo}</p><p>{department.approach}</p></>}</div></Reveal>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-wide"><Reveal><p className="eyebrow mb-5">Expertises réunies</p><h2 className="display max-w-4xl text-5xl leading-[.95] tracking-[-.04em] sm:text-7xl">Un site pensé pour être <span className="text-accent">vu, compris et choisi.</span></h2></Reveal><div className="mt-16 grid gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 md:grid-cols-2">{services.map(([name, text, Icon, href], index) => <Reveal key={name as string} delay={index * .06} className="h-full"><Link href={href as string} className="group block h-full bg-ink p-8 transition-colors duration-700 hover:bg-[#0d0b0a] sm:p-12"><Icon className="mb-14 text-accent" size={24} strokeWidth={1.25} /><h3 className="display text-3xl">{name as string}</h3><p className="mt-4 text-sm leading-7 text-muted">{text as string}</p><span className="mt-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-accent">Découvrir <ArrowRight size={12} /></span></Link></Reveal>)}</div></div>
        </section>

        <section className="section-pad bg-panel">
          <div className="container-wide grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
            <Reveal><p className="eyebrow mb-5">Pour les entreprises de {area}</p><h2 className="display text-5xl leading-[.96] tracking-[-.04em] sm:text-6xl">Plus qu’une présence.<br /><span className="text-accent">Un avantage commercial.</span></h2><div className="mt-10 space-y-6 text-sm leading-8 text-muted"><p>Artisans et entreprises du bâtiment ont besoin de montrer des réalisations et une zone d’intervention précise. Les commerces et restaurants doivent faciliter la visite, l’appel ou la réservation. Les professions libérales construisent la confiance par la clarté, la pédagogie et les preuves. Les PME et industriels valorisent leurs compétences, leurs moyens et leurs engagements.</p><p>Les domaines viticoles ajoutent une dimension particulière : raconter un terroir, présenter une gamme, accueillir des visiteurs et parfois vendre en ligne, tout en respectant la réglementation. Les collectivités recherchent pour leur part accessibilité, fiabilité et simplicité de mise à jour.</p><p>Nous ne plaquons pas la même interface sur ces besoins. Chaque architecture repose sur le parcours réel du client, les informations dont il a besoin et l’action que l’entreprise souhaite obtenir.</p></div></Reveal>
            <Reveal delay={.1}><aside className="premium-card flex h-full min-h-[390px] flex-col justify-between p-9 sm:p-12"><ShieldCheck className="text-accent" size={30} strokeWidth={1.25} /><div><p className="eyebrow mb-5">Notre principe</p><p className="display text-3xl leading-[1.25]">Aucune promesse de position garantie. Une méthode documentée, des choix mesurables et un travail SEO inscrit dans la durée.</p></div><p className="text-xs leading-6 text-muted">Les résultats dépendent du marché, de la concurrence, de l’autorité existante et de la régularité éditoriale. Nous présentons ces facteurs avant chaque accompagnement.</p></aside></Reveal>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-wide"><Reveal className="mb-14"><p className="eyebrow mb-5">Questions fréquentes</p><h2 className="display text-5xl tracking-[-.04em] sm:text-7xl">Décider avec <span className="text-accent">clarté.</span></h2></Reveal><div className="border-t border-white/10">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-white/10 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium"><span>{question}</span><span className="text-2xl font-light text-accent transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pb-2 pt-5 text-sm leading-7 text-muted">{answer}</p></details>)}</div></div>
        </section>

        <section className="section-pad bg-panel">
          <div className="container-wide">
            <Reveal><p className="eyebrow mb-5">Maillage territorial</p><h2 className="display text-5xl tracking-[-.04em]">Nos interventions dans <span className="text-accent">la {department.name}.</span></h2></Reveal>
            <div className="mt-10 flex flex-wrap gap-3">{department.cities.map(name => <Link key={name} href={`/creation-site-${citySlug(name)}`} className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-xs text-muted transition-all hover:border-accent/35 hover:text-paper">{name}<ArrowRight size={13} className="text-accent transition-transform group-hover:translate-x-1" /></Link>)}</div>
            {city && cityProfile && <div className="mt-12 border-t border-white/10 pt-10"><p className="text-[10px] uppercase tracking-[.16em] text-white/35">Villes voisines</p><div className="mt-5 flex flex-wrap gap-3">{cityProfile.nearby.filter(name => Object.keys(department ? Object.fromEntries(department.cities.map(c => [citySlug(c), true])) : {}).includes(citySlug(name))).map(name => <Link key={name} href={`/creation-site-${citySlug(name)}`} className="text-xs text-muted underline decoration-white/15 underline-offset-4 hover:text-accent">{name}</Link>)}</div></div>}
          </div>
        </section>

        <section className="relative flex min-h-[75vh] items-center overflow-hidden py-28 text-center"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,169,138,.13),transparent_42%),#050505]" /><Reveal className="container-wide relative"><p className="eyebrow mb-7">Premier échange gratuit</p><h2 className="display mx-auto max-w-5xl text-[clamp(58px,8.5vw,124px)] leading-[.86] tracking-[-.055em]">Faisons de votre site<br /><em className="font-normal text-accent">une référence locale.</em></h2><Button href="/contact" className="mt-12">Démarrer votre projet</Button></Reveal></section>
      </main>
      <Footer />
    </>
  );
}
