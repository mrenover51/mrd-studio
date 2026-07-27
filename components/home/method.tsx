import { Code2, Compass, Gauge, LifeBuoy, Palette, Target } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  ["01", "Découverte", "Comprendre votre activité.", Compass],
  ["02", "Stratégie", "Définir les objectifs.", Target],
  ["03", "Design", "Créer une identité unique.", Palette],
  ["04", "Développement", "Coder une solution performante.", Code2],
  ["05", "Optimisation", "SEO, vitesse, accessibilité.", Gauge],
  ["06", "Accompagnement", "Nous restons présents après la mise en ligne.", LifeBuoy],
] as const;

export function Method() {
  return (
    <section id="methode" className="section-pad bg-panel/35">
      <div className="container-wide">
        <Reveal><p className="eyebrow mb-6">Notre méthode</p><h2 className="display max-w-4xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Une trajectoire claire.<br /><span className="text-accent">Six étapes maîtrisées.</span></h2></Reveal>
        <div className="relative mt-20 before:absolute before:bottom-0 before:left-[24px] before:top-0 before:w-px before:bg-gradient-to-b before:from-accent before:via-electric/45 before:to-transparent md:before:left-1/2">
          {steps.map(([number, title, text, Icon], index) => (
            <Reveal key={title} delay={index * .06}>
              <article className={`relative mb-8 grid md:grid-cols-2 ${index % 2 ? "" : "md:text-right"}`}>
                <span className="absolute left-[24px] top-9 z-20 size-3 -translate-x-1/2 rounded-full border border-accent bg-ink shadow-[0_0_16px_rgba(0,217,255,.65)] md:left-1/2" />
                <div className={`premium-card ml-12 min-h-[230px] p-8 md:ml-0 md:w-[calc(100%-56px)] ${index % 2 ? "md:col-start-2 md:ml-14" : "md:mr-14"}`}>
                  <div className={`flex items-center gap-4 ${index % 2 ? "" : "md:justify-end"}`}><span className="grid size-11 place-items-center rounded-2xl border border-accent/20 bg-accent/[.05] text-accent"><Icon size={19} strokeWidth={1.4} /></span><span className="text-[9px] tracking-[.24em] text-accent">{number}</span></div>
                  <h3 className="display mt-9 text-4xl tracking-[-.04em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
