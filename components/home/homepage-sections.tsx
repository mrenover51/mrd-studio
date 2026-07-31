"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Gauge,
  MessageCircle,
  MonitorSmartphone,
  Search,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Philosophy() {
  return (
    <section id="philosophie" className="section-pad">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <p className="eyebrow mb-6">Notre philosophie</p>
          <h2 className="display max-w-4xl text-[clamp(48px,6vw,88px)] leading-[.92] tracking-[-.055em]">
            Créer des sites internet qui donnent envie d’être <span className="text-accent">explorés.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted">
            Nous concevons des expériences digitales modernes, performantes et entièrement sur mesure.
            Chaque projet est pensé pour valoriser votre image, développer votre visibilité et générer des contacts.
          </p>
        </Reveal>
        <Reveal delay={.12}>
          <div className="premium-card relative aspect-square rounded-[24px] bg-[radial-gradient(circle_at_68%_28%,rgba(122,92,255,.12),transparent_32%),radial-gradient(circle_at_32%_72%,rgba(0,217,255,.1),transparent_36%)]">
            <div className="absolute inset-x-[12%] top-[24%] h-px bg-[linear-gradient(90deg,transparent,rgba(0,217,255,.42),rgba(122,92,255,.32),transparent)]" />
            <div className="absolute inset-x-[18%] top-[42%] h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)]" />
            <div className="absolute inset-x-[12%] top-[60%] h-px bg-[linear-gradient(90deg,transparent,rgba(122,92,255,.32),rgba(0,217,255,.28),transparent)]" />
            <div className="absolute bottom-[18%] left-[18%] top-[18%] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="absolute right-[21%] top-[21%] size-1.5 rounded-full bg-electric shadow-[0_0_18px_rgba(122,92,255,.65)]" />
            <div className="absolute bottom-[29%] left-[28%] size-1 rounded-full bg-accent shadow-[0_0_16px_rgba(0,217,255,.65)]" />
            <span className="absolute bottom-[8%] left-[9%] text-[8px] uppercase tracking-[.28em] text-white/35">Exploration system / MRD</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const standards = [
  [Gauge, "Performance", "Des interfaces rapides, légères et mesurées à chaque étape — pas seulement au moment de la mise en ligne."],
  [Code2, "Code propre", "Une base technique maintenable, structurée et conçue spécifiquement pour les besoins de votre projet."],
  [Search, "SEO", "Architecture, contenus et données techniques pensés ensemble pour construire une visibilité durable."],
  [MonitorSmartphone, "Responsive", "Une expérience précise sur mobile, tablette et desktop, sans version secondaire ni compromis."],
] as const;

export function Standards() {
  return (
    <section className="section-pad bg-panel/35">
      <div className="container-wide">
        <Reveal><p className="eyebrow mb-6">Notre niveau d’exigence</p><h2 className="display max-w-4xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">La qualité ne se déclare pas.<br /><span className="text-accent">Elle se construit.</span></h2></Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {standards.map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * .07}>
              <article className="premium-card group min-h-[320px] p-8 sm:p-10">
                <div className="flex items-start justify-between"><span className={`grid size-12 place-items-center rounded-2xl border ${index % 2 ? "border-electric/30 bg-electric/[.07] text-electric" : "border-accent/20 bg-accent/[.05] text-accent"}`}><Icon size={22} strokeWidth={1.4} /></span><span className="text-[9px] tracking-[.24em] text-white/25">0{index + 1}</span></div>
                <h3 className="display mt-16 text-4xl tracking-[-.04em]">{title}</h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const concepts = [
  ["Domaine viticole", "Terroir / Transmission", "from-[#161018] via-[#481d3b] to-[#090b12]"],
  ["Restaurant", "Cuisine / Expérience", "from-[#07151a] via-[#0d4050] to-[#070912]"],
  ["Artisan", "Savoir-faire / Matière", "from-[#141218] via-[#303449] to-[#090a0e]"],
  ["Commerce", "Produit / Conversion", "from-[#101025] via-[#2f2475] to-[#070912]"],
] as const;

const ConceptMockup = memo(function ConceptMockup({ item, index }: { item: typeof concepts[number]; index: number }) {
  return (
    <article className="premium-card group p-3">
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[18px] bg-gradient-to-br ${item[2]} [perspective:1200px]`}>
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-[7%] right-[7%] top-[7%] flex justify-between border-b border-white/10 pb-3 text-[6px] uppercase tracking-[.24em] text-white/45"><span>MRD concept / 0{index + 1}</span><span>2035</span></div>
        <div className="absolute bottom-[9%] left-[8%] z-10"><p className="text-[7px] uppercase tracking-[.25em] text-accent">{item[1]}</p><h3 className="display mt-2 text-3xl leading-none sm:text-4xl">{item[0]}</h3></div>
        <motion.div whileHover={{ rotateY: -7, rotateX: 4, scale: 1.03 }} transition={{ duration: .8 }} className="absolute right-[9%] top-[23%] h-[54%] w-[38%] rounded-[14px] border border-white/15 bg-black/30 shadow-[0_25px_50px_rgba(0,0,0,.45),0_0_35px_rgba(0,217,255,.12)] backdrop-blur-xl">
          <div className="absolute inset-[12%] rounded-[9px] border border-accent/15" />
          <div className="absolute left-[18%] top-[22%] size-[32%] rounded-full border border-accent/35 shadow-[0_0_22px_rgba(0,217,255,.18)]" />
          <div className="absolute bottom-[18%] left-[18%] h-px w-[64%] bg-gradient-to-r from-accent/60 to-transparent" />
        </motion.div>
      </div>
    </article>
  );
});

export function Concepts() {
  return (
    <section id="concepts" className="section-pad">
      <div className="container-wide">
        <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow mb-6">Ce que nous imaginons</p><h2 className="display text-5xl tracking-[-.05em] sm:text-7xl">Des univers, pas<br /><span className="text-accent">des modèles.</span></h2></div><p className="max-w-sm text-sm leading-7 text-muted">Explorations créatives destinées à montrer notre approche. Ces visuels ne sont pas des réalisations clients.</p></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">{concepts.map((item, index) => <Reveal key={item[0]} delay={index * .06}><ConceptMockup item={item} index={index} /></Reveal>)}</div>
        <p className="mt-6 text-right text-[9px] uppercase tracking-[.22em] text-white/35">Concepts créés par MRD Studio.</p>
      </div>
    </section>
  );
}

const classic = ["Template", "Site lent", "SEO après coup", "Support limité"];
const mrd = ["Design unique", "Développement sur mesure", "SEO dès le départ", "Optimisation Lighthouse", "Accompagnement personnalisé"];

export function Comparison() {
  return (
    <section className="section-pad bg-panel/35">
      <div className="container-wide">
        <Reveal><p className="eyebrow mb-6">Pourquoi MRD Studio</p><h2 className="display max-w-4xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Deux façons de construire<br /><span className="text-accent">votre présence digitale.</span></h2></Reveal>
        <Reveal className="mt-16">
          <div className="premium-card grid md:grid-cols-2">
            <div className="border-b border-white/8 p-8 md:border-b-0 md:border-r md:p-12"><p className="text-xs uppercase tracking-[.22em] text-white/35">Agence classique</p><div className="mt-10 space-y-6">{classic.map(item => <div key={item} className="flex items-center gap-4 text-muted"><span className="grid size-7 place-items-center rounded-full border border-white/10"><X size={12} /></span>{item}</div>)}</div></div>
            <div className="relative p-8 md:p-12"><div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(0,217,255,.08),transparent_45%)]" /><p className="relative text-xs uppercase tracking-[.22em] text-accent">MRD Studio</p><div className="relative mt-10 space-y-6">{mrd.map(item => <motion.div data-animate initial={false} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: .75 }} key={item} className="flex items-center gap-4 text-paper"><span className="grid size-7 place-items-center rounded-full border border-accent/30 bg-accent/[.06] text-accent"><Check size={12} /></span>{item}</motion.div>)}</div></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const commitments = [
  [Sparkles, "Design pensé pour durer", "Nous cherchons la justesse, pas l’effet de mode. Votre interface reste claire, distinctive et pertinente."],
  [Gauge, "Performance optimisée", "Chaque choix visuel et technique tient compte de la vitesse, de la stabilité et de l’expérience réelle."],
  [MessageCircle, "Communication transparente", "Vous savez où en est le projet, pourquoi nous faisons chaque choix et ce qui reste à accomplir."],
  [TrendingUp, "Solutions évolutives", "Votre site est conçu comme une base capable d’accompagner vos futurs contenus, offres et ambitions."],
] as const;

export function Commitment() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <Reveal><p className="eyebrow mb-6">Notre engagement</p><h2 className="display max-w-5xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Pas de promesse spectaculaire.<br /><span className="text-accent">Des choix solides.</span></h2></Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">{commitments.map(([Icon, title, text], index) => <Reveal key={title} delay={index * .07}><article className="premium-card min-h-[390px] p-8 sm:p-11"><Icon className={index % 2 ? "text-electric" : "text-accent"} size={25} strokeWidth={1.3} /><span className="mt-16 block text-[9px] tracking-[.25em] text-white/25">ENGAGEMENT / 0{index + 1}</span><h3 className="display mt-5 text-4xl leading-none tracking-[-.04em] sm:text-5xl">{title}</h3><p className="mt-7 max-w-xl text-sm leading-7 text-muted">{text}</p></article></Reveal>)}</div>
      </div>
    </section>
  );
}

const process = ["Premier échange", "Maquette", "Développement", "Optimisation", "Mise en ligne", "Suivi"];

export function CreationProcess() {
  return (
    <section className="section-pad bg-panel/35">
      <div className="container-wide">
        <Reveal className="text-center"><p className="eyebrow mb-6">Le processus de création</p><h2 className="display mx-auto max-w-4xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Visualisez votre projet,<br /><span className="text-accent">du premier mot au suivi.</span></h2></Reveal>
        <div className="mx-auto mt-20 max-w-3xl">
          {process.map((item, index) => (
            <Reveal key={item} delay={index * .06}>
              <div className="flex flex-col items-center">
                <div className="premium-card flex w-full items-center justify-between rounded-[24px] px-7 py-6 sm:px-10"><span className="text-[9px] tracking-[.24em] text-accent">0{index + 1}</span><span className="display text-2xl sm:text-3xl">{item}</span><ArrowUpRight size={16} className="text-white/25" /></div>
                {index < process.length - 1 && <div className="relative h-14 w-px bg-white/10"><motion.span initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: .9 }} className="absolute inset-0 origin-top bg-gradient-to-b from-accent to-electric/30" /><ArrowDown className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-accent" size={12} /></div>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Pourquoi choisir un site sur mesure ?", "Parce qu’un site sur mesure part de vos objectifs, de vos utilisateurs et de votre identité. Il évite les compromis imposés par un modèle générique et crée une expérience réellement cohérente avec votre activité."],
  ["Combien de temps faut-il ?", "Le délai dépend du périmètre, des contenus et des fonctionnalités. Après le premier échange, nous vous proposons un calendrier clair avec des étapes de validation précises."],
  ["Le référencement est-il inclus ?", "Oui. La structure SEO, la performance technique, les métadonnées et les fondations éditoriales sont intégrées dès la conception. Les besoins avancés font l’objet d’un accompagnement adapté."],
  ["Puis-je faire évoluer mon site ?", "Oui. Nous pensons l’architecture pour permettre l’ajout de contenus, de pages et de fonctionnalités sans reconstruire l’ensemble."],
  ["Comment se déroule le projet ?", "Nous avançons en six temps : découverte, stratégie, design, développement, optimisation puis accompagnement. Vous validez les décisions importantes à chaque étape."],
];

export function Faq() {
  return (
    <section className="section-pad">
      <div className="container-wide grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal><p className="eyebrow mb-6">FAQ</p><h2 className="display text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Des réponses<br /><span className="text-accent">sans détour.</span></h2><p className="mt-7 max-w-sm text-sm leading-7 text-muted">Une question spécifique ? Nous vous répondons directement, sans jargon ni engagement.</p></Reveal>
        <Reveal delay={.1}>
          <div className="border-t border-white/10">
            {faqs.map(([question, answer], index) => <details key={question} className="group border-b border-white/10"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-7 text-base font-medium sm:text-lg"><span><span className="mr-5 text-[9px] tracking-[.2em] text-accent">0{index + 1}</span>{question}</span><ChevronDown size={17} className="shrink-0 text-accent transition-transform duration-700 group-open:rotate-180" /></summary><p className="max-w-2xl pb-8 pl-10 text-sm leading-7 text-muted">{answer}</p></details>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative flex min-h-[92vh] items-center overflow-hidden py-32 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,217,255,.16),transparent_35%),radial-gradient(circle_at_50%_52%,rgba(122,92,255,.08),transparent_55%),linear-gradient(to_bottom,#06070a,#10131a,#06070a)]" />
      <div className="absolute inset-x-[12%] top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(0,217,255,.22),rgba(122,92,255,.2),transparent)]" />
      <Reveal className="container-wide relative"><p className="eyebrow mb-7">Votre projet peut commencer ici</p><h2 className="display mx-auto max-w-6xl text-[clamp(54px,8vw,118px)] leading-[.88] tracking-[-.06em]">Prêt à créer un site qui fera <span className="text-accent">la différence ?</span></h2><p className="mx-auto mt-9 max-w-xl text-base leading-8 text-muted">Discutons ensemble de votre projet.</p><Button href="/contact" className="mt-11">Parlons de votre projet</Button></Reveal>
    </section>
  );
}
