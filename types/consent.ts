export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  clarity: boolean;
};

export type StoredConsent = {
  version: "v1";
  preferences: ConsentPreferences;
  savedAt: string;
  expiresAt: string;
};

export type ConsentContextValue = {
  consent: StoredConsent | null;
  isReady: boolean;
  isModalOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: Pick<ConsentPreferences, "analytics" | "clarity">) => void;
  resetConsent: () => void;
  hasConsent: (service: "analytics" | "clarity") => boolean;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export {};
