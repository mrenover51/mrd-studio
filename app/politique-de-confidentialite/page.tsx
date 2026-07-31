import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de MRD Studio : données collectées, finalités, conservation, destinataires et exercice de vos droits.",
  alternates: { canonical: "/politique-de-confidentialite", languages: { "fr-FR": "/politique-de-confidentialite", "x-default": "/politique-de-confidentialite" } },
  openGraph: { title: "Politique de confidentialité", description: "Données traitées, finalités, conservation et exercice de vos droits auprès de MRD Studio.", url: "/politique-de-confidentialite", locale: "fr_FR", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MRD Studio" }] },
  twitter: { card: "summary_large_image", title: "Politique de confidentialité", description: "La politique de protection des données de MRD Studio.", images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  { title: "Responsable du traitement", paragraphs: ["MRD Studio détermine les finalités et les moyens des traitements présentés dans ce document. Pour toute question relative à vos données, vous pouvez écrire à contact@mrdstudio.fr ou appeler le 06 07 84 64 25."], notice: "indiquer la dénomination ou le nom légal complet, la forme juridique, l’adresse professionnelle définitive et, le cas échéant, le délégué à la protection des données." },
  { title: "Données traitées", paragraphs: ["Nous traitons uniquement les informations nécessaires aux échanges et à la mesure du site, selon vos choix."], list: ["Données transmises dans le formulaire : identité, coordonnées, société, budget, type de projet et message.", "Données techniques de sécurité indispensables au fonctionnement du service.", "Données statistiques Google Analytics 4 uniquement après votre accord.", "Données d’interaction Microsoft Clarity uniquement après votre accord."] },
  { title: "Finalités et bases légales", paragraphs: ["Les demandes reçues servent à répondre à votre message, qualifier votre projet et préparer une éventuelle relation contractuelle. Ces traitements reposent sur votre demande et sur l’intérêt légitime à gérer les échanges professionnels.", "La mesure d’audience et l’analyse comportementale reposent sur votre consentement. Vous pouvez le retirer à tout moment depuis le lien « Gérer mes cookies »." ] },
  { title: "Destinataires et sous-traitants", paragraphs: ["Les données sont accessibles uniquement aux personnes qui en ont besoin pour traiter votre demande et aux prestataires techniques nécessaires au fonctionnement du site.", "Le site peut s’appuyer sur Vercel pour l’hébergement, Resend pour l’acheminement des messages, Google Analytics 4 et Microsoft Clarity lorsque vous les autorisez. Leurs traitements et éventuels transferts sont encadrés par leurs conditions et mécanismes contractuels." ] },
  { title: "Durées de conservation", paragraphs: ["Les demandes sans suite sont conservées pendant une durée proportionnée au suivi commercial, puis supprimées ou anonymisées. Les données relatives à une relation contractuelle peuvent être conservées pendant les durées légales applicables.", "Votre preuve de choix concernant les cookies est stockée dans votre navigateur pendant 180 jours. Les durées propres à GA4 et Clarity doivent être configurées dans leurs interfaces d’administration."], notice: "valider les durées exactes du formulaire, des prospects, des clients et la durée de conservation configurée dans chaque outil." },
  { title: "Vos droits", paragraphs: ["Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de vos données, et vous opposer à certains traitements. Vous pouvez retirer votre consentement sans affecter la licéité des traitements antérieurs.", "Une demande peut être adressée à contact@mrdstudio.fr. En cas de difficulté non résolue, vous pouvez saisir la CNIL sur cnil.fr." ] },
  { title: "Sécurité", paragraphs: ["Nous appliquons des mesures techniques et organisationnelles proportionnées : connexions chiffrées, limitation des accès, en-têtes de sécurité, validation des formulaires et minimisation des données. Aucun système ne pouvant être garanti sans risque, les mesures sont réévaluées avec l’évolution du service."] },
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="Données personnelles" title="Politique de confidentialité" introduction="Cette politique explique de manière transparente quelles données peuvent être traitées lors de votre visite et comment exercer vos droits." sections={sections} />;
}
