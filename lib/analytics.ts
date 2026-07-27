export const GOOGLE_ANALYTICS_ID = "G-JF8W9KQL95";

type ConsentState = "granted" | "denied";

function ensureGtag() {
  const analyticsWindow = window as typeof window & { dataLayer?: unknown[][] };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    analyticsWindow.dataLayer?.push(args);
  };
}

export function setDefaultGoogleConsent() {
  if (typeof window === "undefined") return;
  ensureGtag();
  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
}

export function updateGoogleConsent(analyticsStorage: ConsentState) {
  if (typeof window === "undefined") return;
  ensureGtag();
  window.gtag?.("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function removeGoogleAnalyticsCookies() {
  if (typeof document === "undefined") return;
  document.cookie.split(";").forEach(cookie => {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.mrdstudio.fr; SameSite=Lax`;
    }
  });
}
