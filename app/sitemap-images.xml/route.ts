import { projects } from "@/lib/realisations-data";
import { escapeXml, xmlResponse } from "@/lib/sitemap-data";

const pages = [
  {
    url: "https://mrdstudio.fr",
    image: "/og-image.jpg",
    title: "MRD Studio — création de sites internet premium",
    caption: "Identité visuelle de MRD Studio, studio digital basé à Avize et actif partout en France.",
  },
  ...projects.map(project => ({
    url: `https://mrdstudio.fr/realisations/${project.slug}`,
    image: project.image,
    title: project.name,
    caption: project.imageAlt,
  })),
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(page => `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <image:image>
      <image:loc>${escapeXml(`https://mrdstudio.fr${page.image}`)}</image:loc>
      <image:title>${escapeXml(page.title)}</image:title>
      <image:caption>${escapeXml(page.caption)}</image:caption>
    </image:image>
  </url>`).join("\n")}
</urlset>`;
  return xmlResponse(xml);
}
