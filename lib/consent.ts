import type { ConsentPreferences, StoredConsent } from "@/types/consent";

export const CONSENT_VERSION = "v1" as const;
export const CONSENT_STORAGE_KEY = "mrd-studio-consent-v1";
export const CONSENT_DURATION_DAYS = 180;

const isPreferences = (value: unknown): value is ConsentPreferences => {
  if (!value || typeof value !== "object") return false;
  const preferences = value as Partial<ConsentPreferences>;
  return preferences.essential === true
    && typeof preferences.analytics === "boolean"
    && typeof preferences.clarity === "boolean";
};

export function createConsent(
  preferences: Pick<ConsentPreferences, "analytics" | "clarity">,
  now = new Date(),
): StoredConsent {
  const expiresAt = new Date(now);
  expiresAt.setDate(expiresAt.getDate() + CONSENT_DURATION_DAYS);
  return {
    version: CONSENT_VERSION,
    preferences: { essential: true, ...preferences },
    savedAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
  };
}

export function readConsent(now = new Date()): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      value.version !== CONSENT_VERSION
      || !isPreferences(value.preferences)
      || typeof value.savedAt !== "string"
      || typeof value.expiresAt !== "string"
      || Number.isNaN(Date.parse(value.expiresAt))
      || new Date(value.expiresAt) <= now
    ) {
      clearConsent();
      return null;
    }
    return value as StoredConsent;
  } catch {
    // localStorage can be unavailable even when `window` exists (notably in
    // private browsing or when storage is disabled). Consent UI must remain usable.
    clearConsent();
    return null;
  }
}

export function writeConsent(consent: StoredConsent): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    return true;
  } catch {
    return false;
  }
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Storage access is optional; clearing consent must never break the UI.
  }
}
