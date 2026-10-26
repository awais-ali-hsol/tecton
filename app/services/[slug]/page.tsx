import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { processSteps, serviceDetails, services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { CtaSection } from "@/components/ui/CtaSection";
import { ArrowLeft, ArrowRight, Check } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/PageHero";
import { MaskLines, Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Service — Tecton Solutions" };
  return {
    title: svc.title,
    description: svc.description,
    alternates: { canonical: `https://tectonsolutions.com/services/${svc.slug}` },
    openGraph: {
      title: `${svc.title} — Tecton Solutions`,
      description: svc.description,
      type: "website",
      url: `https://tectonsolutions.com/services/${svc.slug}`,
    },
    twitter: {
      title: `${svc.title} — Tecton Solutions`,
      description: svc.description,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();
  const svc = services[index];
  const detail = serviceDetails[svc.slug];
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const words = svc.title.split(" ");
  const last = words.pop();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          kicker={`(Service ${svc.number}) — Capabilities`}
          meta={`${svc.number} / ${String(services.length).padStart(2, "0")}`}
          lines={[
            ...(words.length ? [words.join(" ")] : []),
            <em key="last">{last}</em>,
          ]}
          intro={<p>{svc.detail}</p>}
        >
          <div className="phero__back">
            <Link href="/#services" className="link-arrow"><ArrowLeft size={16} /> All services</Link>
          </div>
        </PageHero>

        <section className="block theme-bone" aria-labelledby="overview-title">
          <div className="wrap split">
            <SectionLabel index="01" title="Overview" className="split__label" />
            <div className="split__body split__body--narrow">
              <h2 id="overview-title" className="lead">{svc.description} <em>Built for what comes next.</em></h2>
              <Reveal>
                <p className="body-copy">
                  We bring the right mix of strategy, design and engineering to create something useful
                  now and ready to evolve — with the documentation and handover to keep it that way.
                </p>
                <div className="callout">
                  <span className="label">Best for</span>
                  <p>{detail.bestFor}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="block theme-ink" aria-labelledby="caps-title">
          <div className="wrap">
            <header className="sec-head">
              <SectionLabel index="02" title="Capabilities" />
              <h2 id="caps-title" className="h-display">
                <MaskLines lines={["What's in", <span key="l2">the <em>toolkit.</em></span>]} />
              </h2>
              <Reveal className="sec-head__aside" delay={0.2}>
                <ul className="tags">{svc.technologies.map((t) => <li key={t}>{t}</li>)}</ul>
              </Reveal>
            </header>
            <ol className="caps">
              {detail.capabilities.map((c, i) => (
                <li key={c}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {c}
                  <Check size={20} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="block theme-bone" aria-label="Experience and deliverables">
          <div className="wrap two-col">
            <div>
              <SectionLabel index="03" title="Where we've helped" />
              <ul className="bullets">
                {detail.experience.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
            <div>
              <SectionLabel index="04" title="What you walk away with" />
              <ul className="bullets">
                {detail.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <div style={{ marginTop: 40 }}>
                <Button href={`/contact/?service=${svc.slug}`} variant="ink">Discuss {svc.title}</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="block theme-ink" aria-labelledby="svc-process-title">
          <div className="wrap">
            <header className="sec-head">
              <SectionLabel index="05" title="Engagement" />
              <h2 id="svc-process-title" className="h-display">
                <MaskLines lines={["Six steps,", <span key="l2"><em>no</em> surprises.</span>]} />
              </h2>
            </header>
            <div className="rows">
              {processSteps.map((s, i) => (
                <Reveal key={s.number} className="row" delay={i * 0.04}>
                  <span className="row__num">{s.number}</span>
                  <h3 className="row__title">{s.title} <span className="label">— {s.duration}</span></h3>
                  <p className="row__body">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <nav className="block--tight theme-ink" aria-label="More services">
          <div className="wrap pager">
            <Link href={`/services/${prev.slug}/`}>
              <span className="label"><ArrowLeft size={12} className="inline-icon" /> Previous — {prev.number}</span>
              <span className="pager__title">{prev.title}</span>
            </Link>
            <Link href={`/services/${next.slug}/`}>
              <span className="label">Next — {next.number} <ArrowRight size={12} className="inline-icon" /></span>
              <span className="pager__title">{next.title}</span>
            </Link>
          </div>
        </nav>

        <CtaSection href={`/contact/?service=${svc.slug}`} />
      </main>
      <SiteFooter />
    </>
  );
}
