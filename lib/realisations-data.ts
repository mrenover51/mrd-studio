export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  activity: string;
  positioning: string;
  image: string;
  imageAlt: string;
  technologies: readonly string[];
};

const screenshot = (url: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1600`;

export const projects: readonly Project[] = [
  {
    slug: "mrenover",
    name: "MRÉNOVER",
    url: "https://www.mrenover.fr/",
    category: "Site vitrine premium",
    activity: "Rénovation intérieure & décapage laser",
    positioning: "Site professionnel destiné à présenter clairement deux activités complémentaires, valoriser le savoir-faire de l’entreprise et générer des demandes de devis.",
    image: screenshot("https://www.mrenover.fr/"),
    imageAlt: "Aperçu du site MRÉNOVER",
    technologies: [],
  },
  {
    slug: "love-room-absolu",
    name: "LOVE ROOM ABSOLU",
    url: "https://www.love-room-absolu.fr/",
    category: "Site premium & réservation",
    activity: "Hébergement / Love Room",
    positioning: "Expérience digitale immersive destinée à présenter un hébergement haut de gamme et faciliter la réservation.",
    image: screenshot("https://www.love-room-absolu.fr/"),
    imageAlt: "Aperçu du site Love Room Absolu",
    technologies: [],
  },
  {
    slug: "decapage-france",
    name: "DÉCAPAGE FRANCE",
    url: "https://www.decapage-france.fr/",
    category: "Plateforme web métier",
    activity: "Mise en relation dans le secteur du décapage",
    positioning: "Plateforme nationale permettant aux particuliers et professionnels de déposer leur projet et d’être orientés vers des spécialistes du décapage.",
    image: screenshot("https://www.decapage-france.fr/"),
    imageAlt: "Aperçu de la plateforme Décapage France",
    technologies: [],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
