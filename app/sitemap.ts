import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Trailing-slash URLs so every entry returns 200 and matches its canonical.
// No lastmod: a build-time timestamp on every page is a date Google learns to ignore.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    ...services.map((s) => `/services/${s.slug}/`),
    "/work/",
    "/about/",
    "/contact/",
    "/privacy/",
  ];
  return paths.map((path) => ({ url: absoluteUrl(path) }));
}
