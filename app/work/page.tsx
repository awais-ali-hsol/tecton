import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { Counter } from "@/components/ui/Counter";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageHero } from "@/components/ui/PageHero";
import { MaskLines, Reveal } from "@/components/ui/Reveal";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { WorkExplorer } from "@/components/work/WorkExplorer";
import { WorkReel } from "@/components/work/WorkReel";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected platforms, mobile apps and commerce experiences designed and engineered by Tecton Solutions.",
  alternates: { canonical: "https://tectonsolutions.com/work" },
  openGraph: {
    title: "Work — Tecton Solutions",
    description: "Selected platforms, mobile apps and commerce experiences designed and engineered by Tecton Solutions.",
    url: "https://tectonsolutions.com/work",
  },
  twitter: {
    title: "Work — Tecton Solutions",
    description: "Selected platforms, mobile apps and commerce experiences designed and engineered by Tecton Solutions.",
  },
};

const years = projects.map((p) => Number(p.year));
const yearSpan = Math.max(...years) - Math.min(...years) + 1;

const STATS = [
  { to: projects.length, label: "Live products in this archive" },
  { to: yearSpan, label: "Years of launches" },
  { to: 4, label: "Product disciplines" },
  { to: 100, suffix: "%", label: "Still live and in use" },
];

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          lines={["Selected", <em key="w">work.</em>]}
          intro={
            <p>
              Platforms, apps and storefronts for wellness studios, fintechs, publishers and retailers —
              every one of them live, in use and still earning its keep.
            </p>
          }
        />

        <section className="theme-ink wreel-section" aria-label="Project filmstrip">
          <WorkReel />
          <div className="wrap">
            <dl className="stats wstats">
              {STATS.map((s, i) => (
                <Reveal key={s.label} className="stat" delay={i * 0.08}>
                  <dt className="label">{s.label}</dt>
                  <dd className="stat__num"><Counter to={s.to} suffix={s.suffix} /></dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section className="block theme-ink" aria-labelledby="archive-title">
          <div className="wrap">
            <header className="sec-head">
              <h2 id="archive-title" className="h-display">
                <MaskLines lines={["Every launch,", <span key="l2"><em>still</em> live.</span>]} />
              </h2>
            </header>
            <WorkExplorer defaultView="grid" allowViewToggle allowSort />
          </div>
        </section>

        <CtaSection lines={["Your project", <span key="l2">could be <em>next.</em></span>]} />
      </main>
      <SiteFooter />
    </>
  );
}
