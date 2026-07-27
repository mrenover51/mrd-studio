import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MRD Studio",
    short_name: "MRD Studio",
    description: "Création de sites internet sur mesure, performants et optimisés pour le référencement.",
    start_url: "/",
    display: "standalone",
    background_color: "#06070A",
    theme_color: "#06070A",
    lang: "fr",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.png", sizes: "1536x1024", type: "image/png", purpose: "any" },
    ],
  };
}
