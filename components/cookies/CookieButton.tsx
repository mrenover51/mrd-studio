"use client";

import { useConsent } from "@/hooks/useConsent";

export function CookieButton({ className = "" }: { className?: string }) {
  const { openPreferences } = useConsent();
  return (
    <button
      type="button"
      onClick={openPreferences}
      className={`transition-colors duration-500 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${className}`}
    >
      Gérer mes cookies
    </button>
  );
}
