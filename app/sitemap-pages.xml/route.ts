import { escapeXml, pageUrls, SEO_LAST_MODIFIED, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageUrls.map(url => `  <url><loc>${escapeXml(url)}</loc><lastmod>${SEO_LAST_MODIFIED}</lastmod></url>`).join("\n")}
</urlset>`;
  return xmlResponse(xml);
}
