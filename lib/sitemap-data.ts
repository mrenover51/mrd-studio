import { cityProfiles, departments } from "@/lib/seo-local-data";
import { serviceProfiles } from "@/lib/service-data";

export const SITE_URL = "https://mrdstudio.fr";
export const SEO_LAST_MODIFIED = "2026-07-28";

export const pageUrls = [
  "",
  "/contact",
  "/blog",
  "/faq",
  "/politique-de-confidentialite",
  "/politique-cookies",
  "/mentions-legales",
  ...serviceProfiles.map(service => `/${service.slug}`),
  ...departments.map(department => `/creation-site-${department.slug}`),
  ...Object.keys(cityProfiles).map(city => `/creation-site-${city}`),
].map(path => `${SITE_URL}${path}`);

export const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, character => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    "\"": "&quot;",
  })[character] ?? character);

export const xmlResponse = (xml: string) => new Response(xml, {
  headers: {
    "Content-Type": "application/xml; charset=utf-8",
    "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
  },
});
