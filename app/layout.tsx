import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AmbientLight } from "@/components/ui/ambient-light";
import { VisualSignature } from "@/components/ui/visual-signature";
import { LightSystem } from "@/components/ui/light-system";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { CookieProvider } from "@/components/cookies/CookieProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrdstudio.fr"),
  title: {
    default: "MRD Studio — Création de sites internet sur mesure",
    template: "%s | MRD Studio",
  },
  description:
    "MRD Studio conçoit des sites internet sur mesure, performants et optimisés pour le référencement, à Avize et partout en France.",
  keywords: [
    "agence web",
    "création site internet",
    "site internet sur mesure",
    "webdesign",
    "référencement SEO",
    "agence web Avize",
  ],
  authors: [{ name: "MRD Studio" }],
  creator: "MRD Studio",
  publisher: "MRD Studio",
  category: "technology",
  applicationName: "MRD Studio",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/", "x-default": "/" },
  },
  openGraph: {
    title: "MRD Studio — Sites internet sur mesure",
    description:
      "Sites internet sur mesure, performants et optimisés pour le référencement.",
    url: "/",
    siteName: "MRD Studio",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MRD Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRD Studio — Sites internet sur mesure",
    description: "Design, développement, performance et référencement réunis dans une expérience digitale sur mesure.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <CookieProvider>
          <SiteJsonLd />
          <VisualSignature />
          <AmbientLight />
          <LightSystem />
          {children}
          <CustomCursor />
        </CookieProvider>
      </body>
    </html>
  );
}
