import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalPage } from "@/components/seo/local-page";
import { cityProfiles, citySlug, departments } from "@/lib/seo-local-data";

type Props = { params: Promise<{ slug: string }> };

function resolveLocalPage(slug: string) {
  const department = departments.find(item => `creation-site-${item.slug}` === slug);
  if (department) return { department };
  if (!slug.startsWith("creation-site-")) return null;
  const normalizedCity = slug.replace("creation-site-", "");
  const profile = cityProfiles[normalizedCity];
  if (!profile) return null;
  const parent = departments.find(item => item.slug === profile.department);
  const city = parent?.cities.find(name => citySlug(name) === normalizedCity);
  return parent && city ? { department: parent, city, cityProfile: profile } : null;
}

export function generateStaticParams() {
  return [
    ...departments.map(item => ({ slug: `creation-site-${item.slug}` })),
    ...Object.keys(cityProfiles).map(city => ({ slug: `creation-site-${city}` })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = resolveLocalPage(slug);
  if (!page) return {};
  const { department, city } = page;
  const title = city ? `Création de site internet à ${city} | Agence web` : `Création de site internet ${department.name} (${department.code})`;
  const description = city
    ? `MRD Studio crée des sites internet premium à ${city} : design sur mesure, SEO local, refonte et accompagnement pour artisans, commerces et PME.`
    : `Agence web dans la ${department.name} : création de sites premium, référencement local et refonte pour entreprises, artisans, domaines et professions libérales.`;
  const canonical = `/${slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, locale: "fr_FR", type: "website", images: [{ url: "/images/logo.png", width: 1536, height: 1024, alt: "MRD Studio" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/logo.png"] },
  };
}

export default async function SeoLocalPage({ params }: Props) {
  const { slug } = await params;
  const page = resolveLocalPage(slug);
  if (!page) notFound();
  return <LocalPage {...page} />;
}
