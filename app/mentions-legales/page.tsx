import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site MRD Studio : éditeur, publication, hébergement, propriété intellectuelle et contact.",
  alternates: { canonical: "/mentions-legales", languages: { "fr-FR": "/mentions-legales", "x-default": "/mentions-legales" } },
  openGraph: { title: "Mentions légales", description: "Informations relatives à l’éditeur, à l’hébergement et à l’utilisation du site MRD Studio.", url: "/mentions-legales", locale: "fr_FR", type: "website", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MRD Studio" }] },
  twitter: { card: "summary_large_image", title: "Mentions légales", description: "Informations légales du site MRD Studio.", images: ["/og-image.jpg"] },
};

const sections: LegalSection[] = [
  { title: "Éditeur du site", paragraphs: ["Le site mrdstudio.fr est édité sous le nom commercial MRD Studio. Adresse de contact : 425 Rempart du Nord, 51190 Avize. Téléphone : 06 07 84 64 25. Email : contact@mrdstudio.fr."], notice: "ajouter le nom ou la raison sociale, la forme juridique, le capital social le cas échéant, le numéro SIREN/SIRET, le RCS ou RM, le numéro de TVA et l’adresse du siège validée." },
  { title: "Direction de la publication", paragraphs: ["La direction de la publication est assurée par la personne légalement responsable de MRD Studio."], notice: "indiquer le nom et le prénom du directeur ou de la directrice de la publication." },
  { title: "Hébergement", paragraphs: ["Le site est prévu pour être hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Site : vercel.com."], notice: "confirmer l’hébergeur effectivement utilisé en production et adapter cette section en cas de changement." },
  { title: "Propriété intellectuelle", paragraphs: ["La structure, les textes, créations graphiques, éléments visuels, marques et composants originaux présents sur le site sont protégés par le droit applicable. Toute reproduction ou adaptation non autorisée peut constituer une atteinte aux droits de leur titulaire.", "Les marques, services et contenus appartenant à des tiers restent la propriété de leurs titulaires respectifs."] },
  { title: "Responsabilité", paragraphs: ["MRD Studio veille à fournir des informations exactes et à maintenir le site accessible. Les contenus ont une portée informative et ne constituent pas une garantie de résultat commercial ou de positionnement dans les moteurs de recherche.", "Les liens vers des services externes sont proposés pour faciliter la navigation. MRD Studio ne contrôle pas en permanence leur disponibilité ni leur contenu."] },
  { title: "Contact", paragraphs: ["Pour signaler une erreur, exercer un droit ou poser une question concernant le site, vous pouvez écrire à contact@mrdstudio.fr ou appeler le 06 07 84 64 25."] },
];

export default function LegalNoticesPage() {
  return <LegalPage eyebrow="Informations légales" title="Mentions légales" introduction="Les informations ci-dessous identifient les responsables du site et encadrent son utilisation. Les mentions signalées doivent être complétées avant la mise en ligne définitive." sections={sections} />;
}
