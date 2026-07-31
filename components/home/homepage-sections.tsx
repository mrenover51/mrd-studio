"use client";

import {
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Headphones,
  MonitorSmartphone,
  Palette,
  Search,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const trustSignals = [
  [Zap, "Sites ultra performants"],
  [Search, "SEO intégré dès la conception"],
  [MonitorSmartphone, "Responsive sur tous les appareils"],
  [Code2, "Développé avec Next.js"],
] as const;

export function TrustStrip() {
  return (
    <section aria-label="Garanties MRD Studio" className="relative border-y border-white/[.07] bg-[#0c0f17]/70 py-5 sm:py-7">
      <div className="container-wide">
        <Reveal className="grid gap-px overflow-hidden rounded-[24px] border border-white/[.08] bg-gradient-to-r from-accent/15 via-white/[.07] to-electric/15 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map(([Icon, label], index) => (
            <div key={label} className="flex min-h-20 items-center gap-3 bg-[#090c13]/95 px-5 py-4 sm:px-6">
              <span className={`grid size-9 shrink-0 place-items-center rounded-xl border ${index % 2 ? "border-electric/25 bg-electric/[.07] text-electric" : "border-accent/20 bg-accent/[.055] text-accent"}`}>
                <Icon size={16} strokeWidth={1.5} />
              </span>
              <span className="text-[11px] leading-5 text-white/75">{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const classic = ["Templates vus partout", "Temps de chargement moyen", "Peu d’accompagnement", "SEO ajouté après", "Design standard"];
const mrd = ["Design entièrement sur mesure", "Performance optimisée", "Accompagnement personnalisé", "SEO pensé dès le départ", "Expérience utilisateur premium"];

export function Comparison() {
  return (
    <section id="philosophie" className="section-pad">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-6">Pourquoi choisir MRD Studio ?</p>
          <h2 className="display max-w-5xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Le sur-mesure change<br /><span className="text-accent">toute l’expérience.</span></h2>
        </Reveal>
        <Reveal className="mt-12 sm:mt-16">
          <div className="overflow-hidden rounded-[24px] border border-white/[.09] bg-gradient-to-br from-white/[.045] via-[#10131a]/90 to-electric/[.055] shadow-[0_24px_64px_rgba(0,0,0,.28)] md:grid md:grid-cols-2">
            <ComparisonColumn title="Solution classique" items={classic} positive={false} />
            <ComparisonColumn title="MRD Studio" items={mrd} positive />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ComparisonColumn({ title, items, positive }: { title: string; items: readonly string[]; positive: boolean }) {
  return (
    <div className={`relative p-7 sm:p-11 ${positive ? "border-t border-accent/15 bg-[radial-gradient(circle_at_90%_0%,rgba(139,92,246,.13),transparent_45%)] md:border-l md:border-t-0" : "text-white/65"}`}>
      <p className={`text-xs uppercase tracking-[.2em] ${positive ? "text-accent" : "text-white/50"}`}>{positive ? "✓" : "✕"} {title}</p>
      <div className="mt-9 space-y-5">
        {items.map((item) => (
          <div key={item} className={`flex items-center gap-4 text-sm sm:text-base ${positive ? "text-paper" : "text-muted"}`}>
            <span className={`grid size-7 shrink-0 place-items-center rounded-full border ${positive ? "border-accent/25 bg-accent/[.06] text-accent" : "border-white/10 text-white/30"}`}>
              {positive ? <Check size={12} /> : <X size={12} />}
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

const commitments = [
  [Gauge, "Performance", "Sites ultra rapides."],
  [Search, "SEO", "Optimisation dès le premier jour."],
  [Palette, "Design", "Création sur mesure."],
  [Headphones, "Support", "Accompagnement après livraison."],
] as const;

export function Commitment() {
  return (
    <section className="section-pad bg-panel/35">
      <div className="container-wide">
        <Reveal><p className="eyebrow mb-6">Nos engagements</p><h2 className="display max-w-5xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Des standards élevés.<br /><span className="text-accent">À chaque étape.</span></h2></Reveal>
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {commitments.map(([Icon, title, text], index) => (
            <Reveal key={title} delay={index * .05}>
              <article className="premium-card group flex min-h-[300px] flex-col p-7 sm:p-9">
                <Icon className={index % 3 === 0 ? "text-accent" : index % 3 === 1 ? "text-electric" : "text-white/75"} size={24} strokeWidth={1.35} />
                <span className="mt-auto pt-16 text-[9px] tracking-[.22em] text-white/25">0{index + 1}</span>
                <h3 className="display mt-4 text-3xl tracking-[-.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { sector: "Domaine viticole", title: "Terroir / Transmission", technologies: "Next.js • SEO local", objective: "Valoriser le domaine et faciliter la prise de contact.", result: "Une présence digitale distinctive, rapide et crédible.", gradient: "from-[#161018] via-[#481d3b] to-[#090b12]" },
  { sector: "Restaurant", title: "Cuisine / Expérience", technologies: "Next.js • Responsive", objective: "Transmettre l’expérience avant même la réservation.", result: "Un parcours immersif pensé pour convertir sur mobile.", gradient: "from-[#07151a] via-[#0d4050] to-[#070912]" },
  { sector: "Artisan", title: "Savoir-faire / Matière", technologies: "Next.js • Performance", objective: "Rendre la qualité du travail immédiatement visible.", result: "Une vitrine claire qui transforme l’expertise en confiance.", gradient: "from-[#141218] via-[#303449] to-[#090a0e]" },
  { sector: "Commerce", title: "Produit / Conversion", technologies: "Next.js • UX", objective: "Présenter l’offre et simplifier le passage à l’action.", result: "Une interface contemporaine centrée sur la conversion.", gradient: "from-[#101025] via-[#2f2475] to-[#070912]" },
] as const;

export function Portfolio() {
  return (
    <section id="concepts" className="section-pad">
      <div className="container-wide">
        <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div><p className="eyebrow mb-6">Portfolio</p><h2 className="display text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Des projets pensés<br /><span className="text-accent">pour produire un résultat.</span></h2></div>
          <p className="max-w-sm text-sm leading-7 text-muted">Chaque direction relie un objectif, une technologie et une expérience utilisateur cohérente.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.sector} delay={index * .05}>
              <article className="premium-card group p-3">
                <div className={`relative min-h-[470px] overflow-hidden rounded-[18px] bg-gradient-to-br ${project.gradient} p-7 sm:p-10`}>
                  <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:48px_48px]" />
                  <div className="relative flex h-full min-h-[390px] flex-col">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[8px] uppercase tracking-[.2em] text-white/55"><span>{project.sector}</span><span>0{index + 1}</span></div>
                    <h3 className="display mt-9 text-4xl leading-none tracking-[-.045em] sm:text-5xl">{project.title}</h3>
                    <dl className="mt-auto grid gap-5 pt-16 text-xs leading-6 sm:grid-cols-2">
                      <div><dt className="text-[8px] uppercase tracking-[.18em] text-accent">Technologies</dt><dd className="mt-2 text-white/70">{project.technologies}</dd></div>
                      <div><dt className="text-[8px] uppercase tracking-[.18em] text-electric">Objectif</dt><dd className="mt-2 text-white/70">{project.objective}</dd></div>
                      <div className="sm:col-span-2"><dt className="text-[8px] uppercase tracking-[.18em] text-white/45">Résultat</dt><dd className="mt-2 text-white/80">{project.result}</dd></div>
                    </dl>
                    <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-paper transition-colors duration-500 hover:text-accent">Voir le projet <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const metrics = [
  ["95+", "Lighthouse"],
  ["100 %", "Responsive"],
  ["SEO", "Optimisé"],
  ["Support", "Personnalisé"],
] as const;

export function Metrics() {
  return (
    <section aria-label="Indicateurs de qualité" className="border-y border-white/[.07] bg-[#0b0e16]/80 py-14 sm:py-20">
      <div className="container-wide grid gap-px overflow-hidden rounded-[24px] border border-white/[.08] bg-gradient-to-r from-accent/20 via-white/10 to-electric/20 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map(([value, label]) => <div key={label} className="bg-[#090c13]/95 px-7 py-9 text-center"><strong className="display block text-4xl tracking-[-.05em] text-paper sm:text-5xl">{value}</strong><span className="mt-3 block text-[9px] uppercase tracking-[.2em] text-muted">{label}</span></div>)}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="relative flex min-h-[78vh] items-center overflow-hidden py-28 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(0,229,255,.13),rgba(139,92,246,.07)_34%,transparent_62%),linear-gradient(to_bottom,#06070a,#0d1018,#06070a)]" />
      <Reveal className="container-wide relative">
        <p className="eyebrow mb-7">Votre projet peut commencer ici</p>
        <h2 className="display mx-auto max-w-6xl text-[clamp(54px,8vw,116px)] leading-[.9] tracking-[-.06em]">Votre futur site<br /><span className="text-accent">commence ici.</span></h2>
        <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-muted">Parlons de votre projet et concevons une expérience digitale qui vous démarquera durablement.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contact">Demander un devis</Button><Button href="tel:+33607846425" variant="secondary">Planifier un échange</Button></div>
      </Reveal>
    </section>
  );
}
