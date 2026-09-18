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
  seoTitle?: string;
  seoDescription?: string;
  context: string;
  objectives: readonly string[];
  projectNotes: readonly [string, string][];
  relatedServices: readonly { label: string; href: string }[];
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
    context: "MRÉNOVER réunit deux activités complémentaires : la rénovation intérieure et le décapage laser. Le site doit permettre de comprendre rapidement chacune d’elles sans diluer l’identité de l’entreprise.",
    objectives: ["Présenter clairement les deux activités", "Mettre en valeur le savoir-faire de l’entreprise", "Faciliter les demandes de devis"],
    projectNotes: [["Architecture", "Le parcours sépare les besoins tout en conservant une présentation cohérente de l’entreprise."], ["Expérience", "Les contenus sont organisés pour conduire de la découverte d’une prestation vers la prise de contact."]],
    relatedServices: [{ label: "Création de site internet pour une entreprise artisanale", href: "/creation-site-internet" }, { label: "Concevoir un site vitrine professionnel", href: "/site-vitrine" }],
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
    context: "Love Room Absolu présente un hébergement haut de gamme dont la découverte repose fortement sur l’atmosphère, les informations pratiques et la facilité de réservation.",
    objectives: ["Restituer une expérience premium en ligne", "Présenter l’hébergement avec clarté", "Faciliter l’accès à la réservation"],
    projectNotes: [["Direction visuelle", "La présentation met l’expérience et le positionnement de l’hébergement au premier plan."], ["Parcours", "Les informations utiles et l’accès à la réservation structurent la progression du visiteur."]],
    relatedServices: [{ label: "Découvrir la création de sites premium", href: "/site-premium" }, { label: "Créer un site internet professionnel", href: "/creation-site-internet" }],
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
    context: "Décapage France répond à un besoin de mise en relation à l’échelle nationale entre des porteurs de projet et des spécialistes du décapage.",
    objectives: ["Expliquer le fonctionnement de la plateforme", "Permettre le dépôt d’un projet", "Orienter les demandes vers des spécialistes"],
    projectNotes: [["Produit web", "Le projet dépasse le rôle d’un site vitrine : le parcours est construit autour du dépôt et de l’orientation d’une demande."], ["Lisibilité", "La présentation aide particuliers et professionnels à identifier le service adapté à leur besoin."]],
    relatedServices: [{ label: "Concevoir un site internet sur mesure", href: "/creation-site-internet" }, { label: "Maintenir une plateforme dans le temps", href: "/maintenance-site-internet" }],
  },
  {
    slug: "boucherie-tourteaux",
    name: "BOUCHERIE TOURTEAUX",
    url: "https://boucherie-tourteaux.fr",
    category: "Site vitrine premium",
    activity: "Boucherie artisanale & traiteur",
    positioning: "Création d'un site vitrine premium pour une boucherie artisanale, avec mise en valeur du savoir-faire, des produits, du service traiteur et optimisation de la visibilité locale.",
    image: "/realisations/boucherie-tourteaux.png",
    imageWidth: 1897,
    imageHeight: 844,
    imageAlt: "Aperçu du site de la Boucherie Tourteaux",
    technologies: [],
    seoTitle: "Boucherie Tourteaux — Création de site vitrine | MRD Studio",
    seoDescription: "Découvrez la création du site vitrine de la Boucherie Tourteaux par MRD Studio : design premium, expérience responsive et visibilité locale.",
    context: "La Boucherie Tourteaux est une boucherie artisanale qui propose également un service traiteur. Le site doit traduire ce savoir-faire et rendre les informations utiles faciles à consulter.",
    objectives: ["Valoriser le savoir-faire artisanal", "Présenter les produits et le service traiteur", "Renforcer la visibilité locale de l’établissement"],
    projectNotes: [["Contenus", "La présentation articule l’identité de la boucherie, son offre de produits et son activité de traiteur."], ["Expérience responsive", "L’interface est pensée pour conserver une lecture claire des informations sur les différents formats d’écran."], ["Visibilité locale", "La structure éditoriale relie l’activité, l’offre et l’implantation locale sans multiplier les pages artificielles."]],
    relatedServices: [{ label: "Créer un site vitrine pour un commerce", href: "/site-vitrine" }, { label: "Travailler sa visibilité locale", href: "/seo-local" }],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
