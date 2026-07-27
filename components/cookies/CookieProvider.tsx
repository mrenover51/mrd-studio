"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnimatePresence } from "framer-motion";
import { CookieBanner } from "./CookieBanner";
import { createConsent, clearConsent, readConsent, writeConsent } from "@/lib/consent";
import { GOOGLE_ANALYTICS_ID, removeGoogleAnalyticsCookies, setDefaultGoogleConsent, updateGoogleConsent } from "@/lib/analytics";
import { grantClarityConsent, MICROSOFT_CLARITY_ID, revokeClarityConsent } from "@/lib/clarity";
import type { ConsentContextValue, ConsentPreferences, StoredConsent } from "@/types/consent";

const CookieModal = dynamic(() => import("./CookieModal").then(module => module.CookieModal), { ssr: false });

export const ConsentContext = createContext<ConsentContextValue | null>(null);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<StoredConsent | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setDefaultGoogleConsent();
    const stored = readConsent();
    if (stored?.preferences.analytics) updateGoogleConsent("granted");
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      setConsent(stored);
      setIsReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const persist = useCallback((preferences: Pick<ConsentPreferences, "analytics" | "clarity">) => {
    const previous = consent;
    const next = createConsent(preferences);
    writeConsent(next);
    updateGoogleConsent(preferences.analytics ? "granted" : "denied");
    if (!preferences.analytics) removeGoogleAnalyticsCookies();
    if (!preferences.clarity) revokeClarityConsent();
    setConsent(next);
    setIsModalOpen(false);

    const disabledLoadedService =
      (previous?.preferences.analytics && !preferences.analytics)
      || (previous?.preferences.clarity && !preferences.clarity);
    if (disabledLoadedService) window.location.reload();
  }, [consent]);

  const acceptAll = useCallback(() => persist({ analytics: true, clarity: true }), [persist]);
  const rejectAll = useCallback(() => persist({ analytics: false, clarity: false }), [persist]);
  const savePreferences = useCallback((preferences: Pick<ConsentPreferences, "analytics" | "clarity">) => persist(preferences), [persist]);
  const resetConsent = useCallback(() => {
    const hadLoadedService = Boolean(consent?.preferences.analytics || consent?.preferences.clarity);
    clearConsent();
    updateGoogleConsent("denied");
    removeGoogleAnalyticsCookies();
    revokeClarityConsent();
    setConsent(null);
    setIsModalOpen(true);
    if (hadLoadedService) window.location.reload();
  }, [consent]);
  const hasConsent = useCallback((service: "analytics" | "clarity") => Boolean(consent?.preferences[service]), [consent]);
  const openPreferences = useCallback(() => setIsModalOpen(true), []);
  const closePreferences = useCallback(() => setIsModalOpen(false), []);

  const value = useMemo<ConsentContextValue>(() => ({
    consent,
    isReady,
    isModalOpen,
    openPreferences,
    closePreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    resetConsent,
    hasConsent,
  }), [consent, isReady, isModalOpen, openPreferences, closePreferences, acceptAll, rejectAll, savePreferences, resetConsent, hasConsent]);

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <AnimatePresence>{isReady && !consent && !isModalOpen && <CookieBanner />}</AnimatePresence>
      <AnimatePresence>{isModalOpen && <CookieModal />}</AnimatePresence>
      {isReady && consent?.preferences.analytics && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
      {isReady && consent?.preferences.clarity && (
        <Script id="microsoft-clarity" strategy="afterInteractive" onLoad={grantClarityConsent}>
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${MICROSOFT_CLARITY_ID}");
          `}
        </Script>
      )}
    </ConsentContext.Provider>
  );
}
