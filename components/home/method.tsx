import { Code2, Compass, Gauge, Palette, Target } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  ["01", "Découverte", "Comprendre votre activité.", Compass],
  ["02", "Stratégie", "Définir les objectifs.", Target],
  ["03", "Design", "Créer une identité forte.", Palette],
  ["04", "Développement", "Créer un site rapide et moderne.", Code2],
  ["05", "Mise en ligne", "Optimiser et accompagner.", Gauge],
] as const;

export function Method() {
  return (
    <section id="methode" className="section-pad bg-panel/35">
      <div className="container-wide">
        <Reveal><p className="eyebrow mb-6">Notre méthode</p><h2 className="display max-w-5xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Une trajectoire claire.<br /><span className="text-accent">Cinq étapes maîtrisées.</span></h2></Reveal>
        <div className="relative mt-12 before:absolute before:bottom-0 before:left-[23px] before:top-0 before:w-px before:bg-gradient-to-b before:from-accent before:via-electric/50 before:to-transparent sm:mt-16 md:before:left-1/2">
          {steps.map(([number, title, text, Icon], index) => (
            <Reveal key={title} delay={index * .05}>
              <article className={`relative mb-7 grid md:grid-cols-2 ${index % 2 ? "" : "md:text-right"}`}>
                <span className="absolute left-[23px] top-9 z-20 size-2.5 -translate-x-1/2 rounded-full border border-accent bg-ink shadow-[0_0_12px_rgba(0,229,255,.45)] md:left-1/2" />
                <div className={`premium-card ml-11 min-h-[205px] p-7 sm:p-8 md:ml-0 md:w-[calc(100%-54px)] ${index % 2 ? "md:col-start-2 md:ml-[54px]" : "md:mr-[54px]"}`}>
                  <div className={`flex items-center gap-4 ${index % 2 ? "" : "md:justify-end"}`}><span className={`grid size-10 place-items-center rounded-xl border ${index % 2 ? "border-electric/25 bg-electric/[.07] text-electric" : "border-accent/20 bg-accent/[.055] text-accent"}`}><Icon size={18} strokeWidth={1.4} /></span><span className="text-[9px] tracking-[.22em] text-white/40">{number}</span></div>
                  <h3 className="display mt-7 text-3xl tracking-[-.04em] sm:text-4xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
