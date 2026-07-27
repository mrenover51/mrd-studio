"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { CookieCategory } from "./CookieCategory";
import { useConsent } from "@/hooks/useConsent";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function CookieModal() {
  const { consent, closePreferences, acceptAll, rejectAll, savePreferences } = useConsent();
  const [analytics, setAnalytics] = useState(consent?.preferences.analytics ?? false);
  const [clarity, setClarity] = useState(consent?.preferences.clarity ?? false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(focusableSelector);
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreferences();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previousFocus.current?.focus();
    };
  }, [closePreferences]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/55 p-3 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .35, ease: "easeInOut" }}
      onMouseDown={event => {
        if (event.target === event.currentTarget) closePreferences();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-modal-title"
        aria-describedby="cookie-modal-description"
        initial={{ opacity: 0, y: 24, scale: .98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: .985 }}
        transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[calc(100dvh-24px)] w-full max-w-[720px] overflow-y-auto rounded-[24px] border border-white/[.09] bg-[rgba(10,12,18,.96)] p-5 shadow-[0_35px_120px_rgba(0,0,0,.75),inset_0_1px_0_rgba(255,255,255,.06),0_0_70px_rgba(0,217,255,.04)] sm:max-h-[calc(100dvh-48px)] sm:p-8"
      >
        <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
        <button type="button" onClick={closePreferences} aria-label="Fermer les préférences" className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-white/10 text-muted transition-all duration-500 hover:border-accent/35 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-7 sm:top-7"><X size={15} /></button>
        <div className="pr-12">
          <p className="eyebrow mb-3">Confidentialité</p>
          <h2 id="cookie-modal-title" className="display text-3xl tracking-[-.04em] sm:text-4xl">Préférences des cookies</h2>
          <p id="cookie-modal-description" className="mt-4 max-w-xl text-xs leading-6 text-muted">Vous pouvez choisir les services que vous souhaitez autoriser. Les cookies essentiels sont nécessaires au fonctionnement et ne peuvent pas être désactivés.</p>
        </div>

        <div className="mt-7 grid gap-3">
          <CookieCategory id="cookies-essential" title="Cookies essentiels" description="Mémorisent votre choix de confidentialité et permettent le fonctionnement sécurisé du site." checked disabled />
          <CookieCategory id="cookies-analytics" title="Cookies statistiques" service="Google Analytics 4" description="Mesure du trafic du site. Les données nous aident à comprendre les pages consultées et la performance des parcours." checked={analytics} onChange={setAnalytics} />
          <CookieCategory id="cookies-clarity" title="Cookies analyse comportementale" service="Microsoft Clarity" description="Analyse des interactions utilisateurs afin d’identifier les difficultés d’utilisation et d’améliorer l’expérience." checked={clarity} onChange={setClarity} />
        </div>

        <div className="mt-7 grid gap-2 sm:grid-cols-3">
          <button type="button" onClick={() => savePreferences({ analytics, clarity })} className="rounded-full border border-accent/50 bg-accent px-4 py-3 text-[9px] font-semibold uppercase tracking-[.1em] text-ink shadow-[0_8px_25px_rgba(0,217,255,.18)] transition-all duration-500 hover:bg-[#42f5ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Enregistrer</button>
          <button type="button" onClick={acceptAll} className="rounded-full border border-white/15 bg-white/[.05] px-4 py-3 text-[9px] uppercase tracking-[.1em] text-paper transition-all duration-500 hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Accepter tout</button>
          <button type="button" onClick={rejectAll} className="rounded-full border border-white/10 px-4 py-3 text-[9px] uppercase tracking-[.1em] text-muted transition-all duration-500 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Refuser tout</button>
        </div>
        <div className="mt-6 flex flex-wrap gap-5 border-t border-white/[.07] pt-5 text-[9px] uppercase tracking-[.1em] text-white/35">
          <Link href="/politique-cookies" onClick={closePreferences} className="hover:text-accent">Politique cookies</Link>
          <Link href="/politique-de-confidentialite" onClick={closePreferences} className="hover:text-accent">Confidentialité</Link>
          <Link href="/mentions-legales" onClick={closePreferences} className="hover:text-accent">Mentions légales</Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
