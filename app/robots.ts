import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://mrd-studio.fr/sitemap.xml",
    host: "https://mrd-studio.fr",
  };
}
