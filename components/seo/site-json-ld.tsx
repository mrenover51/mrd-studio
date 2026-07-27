const siteUrl = "https://mrdstudio.fr";
const services = [
  "Création de site internet",
  "Refonte de site internet",
  "Site vitrine",
  "Site premium",
  "SEO local",
  "Référencement Google",
  "Maintenance de site internet",
  "Optimisation Lighthouse",
  "Création d’identité visuelle",
  "Gestion des réseaux sociaux",
  "Community management",
  "Google Business Profile",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "MRD Studio",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 1536,
        height: 1024,
      },
      email: "mailto:contact@mrdstudio.fr",
      telephone: "+33607846425",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+33607846425",
        email: "contact@mrdstudio.fr",
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: ["fr"],
      },
      knowsAbout: [
        "Création de sites internet",
        "Next.js",
        "Design UX et UI",
        "Référencement naturel",
        "SEO local",
        "Core Web Vitals",
      ],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${siteUrl}/#business`,
      name: "MRD Studio",
      url: siteUrl,
      image: `${siteUrl}/logo.png`,
      description:
        "Studio digital spécialisé dans la création de sites internet sur mesure, le design d’interface, la performance et le référencement.",
      telephone: "+33607846425",
      email: "mailto:contact@mrdstudio.fr",
      priceRange: "Sur devis",
      address: {
        "@type": "PostalAddress",
        streetAddress: "425 Rempart du Nord",
        postalCode: "51190",
        addressLocality: "Avize",
        addressRegion: "Grand Est",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
      contactPoint: { "@id": `${siteUrl}/#contact` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": `${siteUrl}/#services`,
        name: "Services digitaux MRD Studio",
        itemListElement: services.map((name, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name,
            provider: { "@id": `${siteUrl}/#business` },
          },
        })),
      },
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ContactPoint",
      "@id": `${siteUrl}/#contact`,
      telephone: "+33607846425",
      email: "contact@mrdstudio.fr",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: ["fr"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MRD Studio",
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "CommunicateAction",
        target: `${siteUrl}/contact`,
        name: "Contacter MRD Studio",
      },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
