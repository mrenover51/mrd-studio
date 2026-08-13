export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  activity: string;
  positioning: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  technologies: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "mrenover",
    name: "MRÉNOVER",
    url: "https://www.mrenover.fr/",
    category: "Site vitrine premium",
    activity: "Rénovation intérieure & décapage laser",
    positioning: "Site professionnel destiné à présenter clairement deux activités complémentaires, valoriser le savoir-faire de l’entreprise et générer des demandes de devis.",
    image: "/images/realisations/mrenover.png",
    imageWidth: 1896,
    imageHeight: 900,
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
    image: "/images/realisations/love-room-absolu.png",
    imageWidth: 1889,
    imageHeight: 901,
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
    image: "/images/realisations/decapage-france.png",
    imageWidth: 1899,
    imageHeight: 904,
    imageAlt: "Aperçu de la plateforme Décapage France",
    technologies: [],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
