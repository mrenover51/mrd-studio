import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
  notice?: string;
};

export function LegalPage({ title, eyebrow, introduction, sections }: { title: string; eyebrow: string; introduction: string; sections: LegalSection[] }) {
  return (
    <>
      <Header />
      <main id="contenu-principal">
        <section className="relative overflow-hidden pb-20 pt-44 sm:pt-52">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(0,217,255,.09),transparent_38%),#06070a]" />
          <div className="container-wide relative">
            <nav aria-label="Fil d’Ariane" className="mb-9 flex gap-2 text-[10px] uppercase tracking-[.14em] text-white/35"><Link href="/">Accueil</Link><span>/</span><span className="text-accent">{eyebrow}</span></nav>
            <Reveal><p className="eyebrow mb-6">{eyebrow}</p><h1 className="display max-w-5xl text-[clamp(54px,8vw,116px)] leading-[.86] tracking-[-.055em]">{title}</h1><p className="mt-9 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">{introduction}</p><p className="mt-5 text-[10px] uppercase tracking-[.14em] text-white/35">Dernière mise à jour : 28 juillet 2026</p></Reveal>
          </div>
        </section>
        <section className="section-pad bg-panel/40">
          <div className="container-wide grid gap-12 lg:grid-cols-[.25fr_.75fr]">
            <aside><div className="sticky top-32 border-l border-accent/25 pl-5"><p className="eyebrow">Document</p><p className="mt-4 text-xs leading-6 text-muted">Informations relatives au site mrdstudio.fr.</p></div></aside>
            <div className="max-w-4xl border-t border-white/10">
              {sections.map((section, index) => (
                <Reveal key={section.title}>
                  <section className="border-b border-white/10 py-10 sm:py-12">
                    <span className="text-[9px] tracking-[.16em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="display mt-4 text-3xl tracking-[-.03em] sm:text-4xl">{section.title}</h2>
                    <div className="mt-6 space-y-4 text-sm leading-7 text-muted">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
                    {section.list && <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted">{section.list.map(item => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-3 size-1 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>}
                    {section.notice && <p className="mt-7 rounded-[18px] border border-electric/25 bg-electric/[.06] p-5 text-xs leading-6 text-white/70"><strong className="text-electric">À compléter avant publication :</strong> {section.notice}</p>}
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
