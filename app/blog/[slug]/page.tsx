import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/seo/blog-article";
import { blogArticles } from "@/lib/seo-local-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find(item => item[0] === slug);
  if (!article) return {};
  const [, title, description] = article;
  const canonical = `/blog/${slug}`;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { "fr-FR": canonical, "x-default": canonical },
    },
    authors: [{ name: "MRD Studio", url: "https://mrdstudio.fr" }],
    openGraph: { title, description, url: canonical, type: "article", publishedTime: "2026-07-27", modifiedTime: "2026-07-28", images: [{ url: "/logo.png", width: 1536, height: 1024, alt: "MRD Studio" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/logo.png"] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles.find(item => item[0] === slug);
  if (!article) notFound();
  return <BlogArticle slug={article[0]} title={article[1]} description={article[2]} />;
}
