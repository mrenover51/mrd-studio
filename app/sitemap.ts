import type { MetadataRoute } from "next";
import { blogArticles, cityProfiles, departments } from "@/lib/seo-local-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://mrd-studio.fr", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://mrd-studio.fr/contact", lastModified: new Date(), changeFrequency: "yearly", priority: .8 },
    { url: "https://mrd-studio.fr/blog", lastModified: now, changeFrequency: "weekly", priority: .8 },
    ...departments.map(item => ({ url: `https://mrd-studio.fr/creation-site-${item.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .9 })),
    ...Object.keys(cityProfiles).map(city => ({ url: `https://mrd-studio.fr/creation-site-${city}`, lastModified: now, changeFrequency: "monthly" as const, priority: .8 })),
    ...blogArticles.map(([slug]) => ({ url: `https://mrd-studio.fr/blog/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
