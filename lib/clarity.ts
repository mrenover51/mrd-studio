export const MICROSOFT_CLARITY_ID = "xt7d439cwm";

export function revokeClarityConsent() {
  if (typeof window === "undefined") return;
  window.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
}

export function grantClarityConsent() {
  if (typeof window === "undefined") return;
  window.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
}
