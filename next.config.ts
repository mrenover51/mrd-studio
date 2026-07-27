import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000,
  },
  async headers() {
    const securityHeaders = [
      { key: "Content-Security-Policy", value: contentSecurityPolicy },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    ];
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  async redirects() {
    const cities = [
      "reims", "epernay", "chalons-en-champagne", "vitry-le-francois", "sezanne", "avize", "fismes", "tinqueux", "cormontreuil", "betheny",
      "saint-quentin", "laon", "soissons", "chateau-thierry", "chauny", "tergnier", "hirson",
      "charleville-mezieres", "sedan", "rethel", "givet", "nouzonville",
      "troyes", "romilly-sur-seine", "nogent-sur-seine", "bar-sur-aube", "bar-sur-seine",
      "chaumont", "langres", "saint-dizier", "joinville", "nogent",
    ];
    return cities.flatMap((city) =>
      ["site-internet", "agence-web", "refonte-site"].map((intent) => ({
        source: `/${intent}-${city}`,
        destination: `/creation-site-${city}`,
        permanent: true,
      })),
    );
  },
};

export default nextConfig;
