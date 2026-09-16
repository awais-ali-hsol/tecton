import type { MetadataRoute } from "next";
import { services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tectonsolutions.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...services.map((service) => ({ url: `https://tectonsolutions.com/services/${service.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
