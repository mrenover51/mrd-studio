import { escapeXml, SEO_LAST_MODIFIED, SITE_URL, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  const children = ["sitemap-pages.xml", "sitemap-blog.xml", "sitemap-images.xml"];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children.map(path => `  <sitemap><loc>${escapeXml(`${SITE_URL}/${path}`)}</loc><lastmod>${SEO_LAST_MODIFIED}</lastmod></sitemap>`).join("\n")}
</sitemapindex>`;
  return xmlResponse(xml);
}
