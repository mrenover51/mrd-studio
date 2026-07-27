import type { Metadata } from "next";
import { Building2, Check, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact — Parlons de votre projet",
  description: "Contactez MRD Studio pour votre site internet premium, votre stratégie digitale, votre identité visuelle ou votre référencement.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Parlons de votre projet | MRD Studio", description: "Chaque grand projet commence par une conversation. Présentez-nous votre ambition.", url: "/contact", images: [{ url: "/images/logo.png", width: 1536, height: 1024, alt: "MRD Studio" }] },
  twitter: { card: "summary_large_image", title: "Parlons de votre projet | MRD Studio", description: "Présentez-nous votre projet digital. MRD Studio vous répond sous 24 heures.", images: ["/images/logo.png"] },
};

const benefits = ["Création de sites internet premium", "SEO optimisé", "Responsive sur tous les appareils", "Accompagnement personnalisé", "Développement sur mesure", "Hébergement & maintenance", "Réponse sous 24 h", "Premier échange gratuit"];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pb-20 pt-44 sm:pb-28 sm:pt-52">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_75%_40%,rgba(0,217,255,.12),transparent_72%),radial-gradient(ellipse_38%_48%_at_15%_45%,rgba(122,92,255,.05),transparent_100%),linear-gradient(135deg,#06070a,#10131a_58%,#06070a)]" />
          <div className="particles pointer-events-none absolute inset-0" />
          <div className="container-wide relative"><Reveal><div className="mb-8 flex items-center gap-3"><span className="h-px w-10 bg-accent" /><span className="eyebrow">Entrons en contact</span></div><h1 className="display max-w-5xl text-[clamp(64px,10vw,148px)] font-medium leading-[.82] tracking-[-.06em]">Parlons de votre <em className="font-normal text-accent">projet.</em></h1><p className="mt-10 max-w-2xl text-base leading-8 text-muted sm:text-lg">Chaque grand projet commence par une conversation.<br className="hidden sm:block" /> Décrivez-nous votre besoin, nous revenons vers vous rapidement avec une proposition adaptée.</p></Reveal></div>
        </section>

        <section className="relative pb-28 sm:pb-40">
          <div className="container-wide grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <Reveal className="space-y-7">
              <div className="premium-card min-h-[390px] rounded-[24px] p-7 sm:p-10">
                <p className="eyebrow mb-7">MRD Studio</p>
                <div className="space-y-6">
                  <div className="flex gap-4"><Building2 size={18} className="mt-1 shrink-0 text-accent" /><div><p className="text-[10px] uppercase tracking-[.16em] text-white/35">Entreprise</p><p className="mt-2 text-sm">MRD Studio</p></div></div>
                  <div className="flex gap-4"><MapPin size={18} className="mt-1 shrink-0 text-accent" /><div><p className="text-[10px] uppercase tracking-[.16em] text-white/35">Adresse</p><p className="mt-2 text-sm leading-6 text-muted">425 Rempart du Nord<br />51190 Avize</p></div></div>
                  <a href="tel:+33607846425" className="group flex gap-4"><Phone size={18} className="mt-1 shrink-0 text-accent" /><div><p className="text-[10px] uppercase tracking-[.16em] text-white/35">Téléphone</p><p className="mt-2 text-sm text-muted transition-colors group-hover:text-paper">06 07 84 64 25</p></div></a>
                  <a href="mailto:mrenover51@gmail.com" className="group flex gap-4"><Mail size={18} className="mt-1 shrink-0 text-accent" /><div><p className="text-[10px] uppercase tracking-[.16em] text-white/35">Email</p><p className="mt-2 text-sm text-muted transition-colors group-hover:text-paper">mrenover51@gmail.com</p></div></a>
                </div>
              </div>
              <div className="rounded-[22px] border border-white/[.08] bg-ink p-7 sm:p-9"><p className="eyebrow mb-5">Notre engagement</p><h2 className="display text-4xl leading-[.96] tracking-[-.04em]">Pourquoi choisir<br /><span className="text-accent">MRD Studio ?</span></h2><div className="mt-8 grid gap-3">{benefits.map(item => <div key={item} className="flex items-start gap-3 text-xs leading-5 text-muted"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-accent/35 text-accent"><Check size={11} /></span>{item}</div>)}</div></div>
              <div className="group relative min-h-[380px] overflow-hidden rounded-[20px] border border-accent/20 bg-ink shadow-[0_24px_60px_rgba(0,0,0,.25)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_32px_75px_rgba(0,0,0,.4),0_0_35px_rgba(169,118,89,.06)]"><iframe title="Localisation de MRD Studio à Avize" src="https://www.google.com/maps?q=425%20Rempart%20du%20Nord%2C%2051190%20Avize&output=embed" className="absolute inset-0 h-full w-full grayscale-[.9] invert-[.9] contrast-[.9] opacity-75 transition-opacity duration-500 group-hover:opacity-85" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-accent/10" /></div>
            </Reveal>
            <Reveal delay={.12}><ContactForm /></Reveal>
          </div>
        </section>

        <section className="relative flex min-h-[82vh] items-center overflow-hidden py-28 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,169,138,.13),transparent_42%),linear-gradient(to_bottom,#050505,#0c0907,#050505)]" /><div className="absolute left-1/2 top-1/2 size-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[.08]" />
          <Reveal className="container-wide relative"><p className="eyebrow mb-7">La suite vous appartient</p><h2 className="display mx-auto max-w-6xl text-[clamp(58px,8.7vw,126px)] leading-[.86] tracking-[-.055em]">Votre projet mérite bien plus qu’un <em className="font-normal text-accent">simple site internet.</em></h2><Button href="tel:+33607846425" className="mt-12">Planifier un échange</Button></Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
