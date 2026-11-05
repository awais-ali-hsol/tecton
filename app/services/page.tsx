import type { Metadata } from "next";
import Link from "next/link";
import { serviceDetails, services } from "@/lib/data";
import { CtaSection } from "@/components/ui/CtaSection";
import { ArrowRight } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/PageHero";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { absoluteUrl, breadcrumbJsonLd, jsonLdScript, ORG_ID, pageMetadata, serviceSeo } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Software Development Services | Tecton Solutions",
  description:
    "Software development services from one senior team: custom software, web and mobile apps, SaaS, AI automation, APIs, e-commerce, UI/UX, cloud and DevOps.",
  path: "/services/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      name: "Tecton Solutions services",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          "@id": `${absoluteUrl(`/services/${s.slug}/`)}#service`,
          name: `${serviceSeo[s.slug].keyword} services`,
          url: absoluteUrl(`/services/${s.slug}/`),
          provider: { "@id": ORG_ID },
        },
      })),
    },
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
    ]),
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <SiteHeader />
      <main id="main">
        <PageHero
          kicker="(Services) — Ten disciplines"
          meta={`${String(services.length).padStart(2, "0")} services`}
          lines={["Ten disciplines.", <span key="l2"><em>One</em> team.</span>]}
          keyword="Software development services"
          intro={
            <p>
              Strategy, design and engineering under one roof — so the people who scope your product are
              the people who build, launch and look after it.
            </p>
          }
        />

        <section className="block theme-ink" aria-label="All services">
          <div className="wrap">
            <div className="rows">
              {services.map((s) => (
                <article key={s.slug} className="row">
                  <span className="row__num">{s.number}</span>
                  <h2 className="row__title">
                    <Link href={`/services/${s.slug}/`}>{serviceSeo[s.slug].keyword}</Link>
                  </h2>
                  <div className="row__body">
                    <p>{s.detail}</p>
                    <p style={{ marginTop: 12 }}>
                      <strong>Best for:</strong> {serviceDetails[s.slug].bestFor}
                    </p>
                    <ul className="tags" style={{ marginTop: 16 }}>
                      {s.technologies.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <Link href={`/services/${s.slug}/`} className="link-arrow" style={{ marginTop: 20 }}>
                      Explore {s.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
