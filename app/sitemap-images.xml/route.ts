const pages = [
  "https://mrdstudio.fr",
  "https://mrdstudio.fr/blog",
  "https://mrdstudio.fr/contact",
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.map(url => `  <url>
    <loc>${url}</loc>
    <image:image>
      <image:loc>https://mrdstudio.fr/logo.png</image:loc>
      <image:title>MRD Studio — création de sites internet premium</image:title>
      <image:caption>Identité visuelle de MRD Studio, studio digital basé à Avize.</image:caption>
    </image:image>
  </url>`).join("\n")}
</urlset>`;
  return xmlResponse(xml);
}
import { xmlResponse } from "@/lib/sitemap-data";
