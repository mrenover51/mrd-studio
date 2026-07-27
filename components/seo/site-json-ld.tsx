const siteUrl = "https://mrd-studio.fr";

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
      email: "mailto:mrenover51@gmail.com",
      telephone: "+33607846425",
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
      email: "mailto:mrenover51@gmail.com",
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
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MRD Studio",
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
