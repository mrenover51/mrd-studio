"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useConsent } from "@/hooks/useConsent";

export function CookieBanner() {
  const { acceptAll, rejectAll, openPreferences } = useConsent();
  return (
    <motion.aside
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: 16, filter: "blur(5px)" }}
      transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto w-auto max-w-[680px] overflow-hidden rounded-[24px] border border-white/[.08] bg-[rgba(10,12,18,.82)] p-5 shadow-[0_24px_90px_rgba(0,0,0,.62),inset_0_1px_0_rgba(255,255,255,.055),0_0_45px_rgba(0,217,255,.035)] backdrop-blur-[20px] sm:bottom-5 sm:p-7"
    >
      <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
      <div className="relative">
        <p className="eyebrow mb-3">Contrôle des données</p>
        <h2 id="cookie-banner-title" className="display text-2xl tracking-[-.03em]">Votre confidentialité</h2>
        <p id="cookie-banner-description" className="mt-3 text-xs leading-6 text-muted sm:text-[13px]">
          Nous utilisons des cookies pour améliorer votre expérience, mesurer l&apos;audience du site et analyser son utilisation. Vous pouvez accepter, refuser ou personnaliser vos préférences à tout moment.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-white/45">
          <Link href="/politique-de-confidentialite" className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent">Politique de confidentialité</Link>
          <Link href="/mentions-legales" className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent">Mentions légales</Link>
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          <button onClick={acceptAll} className="rounded-full border border-accent/50 bg-accent px-5 py-3 text-[10px] font-semibold uppercase tracking-[.12em] text-ink shadow-[0_8px_28px_rgba(0,217,255,.2),inset_0_1px_0_rgba(255,255,255,.55)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#42f5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Accepter</button>
          <button onClick={rejectAll} className="rounded-full border border-white/12 bg-white/[.035] px-5 py-3 text-[10px] uppercase tracking-[.12em] text-paper transition-all duration-500 hover:border-white/25 hover:bg-white/[.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Refuser</button>
          <button onClick={openPreferences} className="rounded-full border border-accent/20 bg-transparent px-5 py-3 text-[10px] uppercase tracking-[.12em] text-muted transition-all duration-500 hover:border-accent/45 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Personnaliser</button>
        </div>
      </div>
    </motion.aside>
  );
}
