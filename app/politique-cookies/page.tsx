import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique relative aux cookies",
  description: "Cookies utilisés par MRD Studio, finalités, durées et procédure pour accepter, refuser ou modifier vos préférences.",
  alternates: { canonical: "/politique-cookies", languages: { "fr-FR": "/politique-cookies", "x-default": "/politique-cookies" } },
  openGraph: { title: "Politique relative aux cookies", description: "Traceurs utilisés, finalités et gestion de vos préférences sur MRD Studio.", url: "/politique-cookies", locale: "fr_FR", type: "website", images: [{ url: "/logo.png", width: 1536, height: 1024, alt: "MRD Studio" }] },
  twitter: { card: "summary_large_image", title: "Politique relative aux cookies", description: "Comprendre et gérer les traceurs du site MRD Studio.", images: ["/logo.png"] },
};

const sections: LegalSection[] = [
  { title: "Qu’est-ce qu’un cookie ?", paragraphs: ["Un cookie ou traceur est une information enregistrée ou lue sur votre terminal lors de la consultation d’un service. Certains sont indispensables à son fonctionnement ; d’autres nécessitent votre accord préalable."] },
  { title: "Cookies essentiels", paragraphs: ["Le site mémorise votre choix de confidentialité dans le stockage local de votre navigateur. Ce stockage, nommé « mrd-studio-consent-v1 », est nécessaire au respect de votre décision et expire après 180 jours.", "Il ne sert ni à mesurer votre audience ni à établir un profil publicitaire."] },
  { title: "Google Analytics 4", paragraphs: ["Finalité : mesurer le trafic et comprendre les parcours agrégés afin d’améliorer le site. Identifiant de mesure : G-JF8W9KQL95.", "Google Analytics n’est chargé que si vous activez la catégorie « Cookies statistiques ». Le Consent Mode v2 conserve les signaux publicitaires en état refusé ; seul analytics_storage peut être accordé."], list: ["analytics_storage : refusé avant le choix, accordé uniquement avec votre consentement.", "ad_storage, ad_user_data et ad_personalization : toujours refusés sur ce site."] },
  { title: "Microsoft Clarity", paragraphs: ["Finalité : analyser les interactions, les parcours et les difficultés d’utilisation afin d’améliorer l’expérience. Identifiant du projet : xt7d439cwm.", "Clarity n’est chargé que si vous activez la catégorie « Cookies analyse comportementale »."] },
  { title: "Gérer ou retirer votre accord", paragraphs: ["Le bandeau permet d’accepter, de refuser ou de choisir chaque service séparément. Le lien « Gérer mes cookies », présent dans le footer, permet de rouvrir les préférences à tout moment.", "Lorsque vous désactivez un service déjà chargé, le choix est enregistré puis la page est rechargée afin de repartir sans son script. Vous pouvez également supprimer les données du site depuis les réglages de votre navigateur."] },
  { title: "Durée du choix", paragraphs: ["Votre choix est conservé 180 jours. À expiration, le bandeau est présenté de nouveau. Une nouvelle version substantielle de cette politique peut également entraîner une nouvelle demande de consentement."] },
];

export default function CookiesPolicyPage() {
  return <LegalPage eyebrow="Traceurs" title="Politique relative aux cookies" introduction="Cette page décrit les traceurs susceptibles d’être utilisés, leurs finalités et la manière de garder le contrôle sur votre choix." sections={sections} />;
}
