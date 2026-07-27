"use client";

import { useContext } from "react";
import { ConsentContext } from "@/components/cookies/CookieProvider";

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent doit être utilisé dans CookieProvider.");
  return context;
}
