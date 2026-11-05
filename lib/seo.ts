import type { Metadata } from "next";
import { contact, socials } from "@/lib/data";

export const SITE_URL = "https://tectonsolutions.com";
export const SITE_NAME = "Tecton Solutions";
export const HOME_TITLE = "Custom Software Development Company | Tecton Solutions";
export const HOME_DESCRIPTION =
  "Custom software, web and mobile apps, SaaS platforms and AI automation, designed and engineered by a senior team in Lahore for clients worldwide.";

export const ORG_ID = `${SITE_URL}/#organization`;

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Tecton Solutions — custom software, web and mobile app development",
};

/** Absolute URL for a site path. Paths always end in a slash to match `trailingSlash: true`. */
export function absoluteUrl(path = "/") {
  const clean = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${SITE_URL}${clean}`;
}

/**
 * Page metadata with a full (non-templated) title, a trailing-slash canonical and
 * Open Graph / Twitter cards that always carry the default share image —
 * a page-level `openGraph` object replaces the root one, so the image must be repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}

/** Keyword-targeted copy for each service page, keyed by slug. */
export const serviceSeo: Record<
  string,
  { title: string; description: string; keyword: string; /** Ends the H1 after the service name. */ headline: string }
> = {
  "custom-software": {
    headline: "development services",
    title: "Custom Software Development Services | Tecton Solutions",
    description:
      "Custom software development services: business apps, internal tools and legacy modernization built around your workflows by a senior team. Get a quote.",
    keyword: "Custom software development",
  },
  "web-mobile": {
    headline: "app development services",
    title: "Web & Mobile App Development Services | Tecton Solutions",
    description:
      "Fast, responsive websites and mobile apps for startups and growing businesses, from UX to launch. Senior team, clear scope, full handover. Get a quote.",
    keyword: "Web and mobile app development",
  },
  "ai-automation": {
    headline: "services",
    title: "AI Automation & Integration Services | Tecton Solutions",
    description:
      "AI automation and integration services: copilots, document automation and LLM workflows added to your product with guardrails and human oversight.",
    keyword: "AI automation and integration",
  },
  "saas-platforms": {
    headline: "development services",
    title: "SaaS Development Company | Tecton Solutions",
    description:
      "SaaS development from MVP to scale: multi-tenant architecture, billing and subscriptions, roles and admin tooling, designed and engineered by one team.",
    keyword: "SaaS development",
  },
  "apis-backend": {
    headline: "development services",
    title: "API & Backend Development Services | Tecton Solutions",
    description:
      "API and backend development: secure REST and GraphQL APIs, data modeling, authentication and background jobs, tested, logged and documented for handover.",
    keyword: "API and backend development",
  },
  "e-commerce": {
    headline: "development services",
    title: "E-commerce Development Services | Tecton Solutions",
    description:
      "E-commerce development services: custom Shopify and Next.js storefronts, checkout and payment flows and inventory integrations built to convert.",
    keyword: "E-commerce development",
  },
  "ui-ux-product-design": {
    headline: "services",
    title: "UI/UX & Product Design Services | Tecton Solutions",
    description:
      "UI/UX and product design services: user research, flows, interactive prototypes and developer-ready design systems that make complex products simple.",
    keyword: "UI/UX and product design",
  },
  "cloud-devops": {
    headline: "services",
    title: "Cloud & DevOps Services | Tecton Solutions",
    description:
      "Cloud and DevOps services: AWS architecture, infrastructure as code, CI/CD pipelines, monitoring and runbooks that make every release calm and repeatable.",
    keyword: "Cloud and DevOps",
  },
  "system-integration": {
    headline: "services",
    title: "System Integration Services | Tecton Solutions",
    description:
      "System integration services: connect CRMs, ERPs and third-party APIs with REST, GraphQL and webhooks, with data sync, monitoring and failure recovery.",
    keyword: "System integration",
  },
  "performance-optimization": {
    headline: "services",
    title: "Website & App Performance Optimization | Tecton Solutions",
    description:
      "Performance optimization for websites and apps: Core Web Vitals, bundle and rendering fixes, database profiling and load testing, with measured results.",
    keyword: "Performance optimization",
  },
};

/** Sitewide Organization + WebSite graph. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/tecton-logo.svg` },
      image: `${SITE_URL}/og-image.png`,
      description:
        "Software studio in Lahore, Pakistan designing and engineering custom software, web and mobile apps, SaaS platforms and AI automation for clients worldwide.",
      foundingDate: "2025",
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contact.email,
        availableLanguage: ["English"],
      },
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Renders a JSON-LD script tag. `<` is escaped so content can never close the script element. */
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
