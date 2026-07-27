import { blogArticles } from "@/lib/seo-local-data";
import { escapeXml, SEO_LAST_MODIFIED, xmlResponse } from "@/lib/sitemap-data";

export function GET() {
  const urls = [
    ["https://mrdstudio.fr/blog", "1.0"],
    ...blogArticles.map(([slug]) => [`https://mrdstudio.fr/blog/${slug}`, "0.8"]),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([url, priority]) => `  <url><loc>${escapeXml(url)}</loc><lastmod>${SEO_LAST_MODIFIED}</lastmod><priority>${priority}</priority></url>`).join("\n")}
</urlset>`;
  return xmlResponse(xml);
}
