import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data";
import { Timeline } from "@/components/about/Timeline";
import { Counter } from "@/components/ui/Counter";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageHero } from "@/components/ui/PageHero";
import { MaskLines, Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const metadata: Metadata = {
  title: "Studio",
  description: "An independent product studio in Lahore, Pakistan. Ten years of designing and engineering software people rely on.",
  alternates: { canonical: "https://tectonsolutions.com/about" },
  openGraph: {
    title: "Studio — Tecton Solutions",
    description: "An independent product studio in Lahore, Pakistan. Ten years of designing and engineering software people rely on.",
    url: "https://tectonsolutions.com/about",
  },
  twitter: {
    title: "Studio — Tecton Solutions",
    description: "An independent product studio in Lahore, Pakistan. Ten years of designing and engineering software people rely on.",
  },
};

const values = [
  { title: "Clarity before code", body: "We invest in understanding the problem before writing a line. Clear thinking is the cheapest way to build better software." },
  { title: "Craft over speed", body: "We move quickly, but never at the expense of systems that hold up as your business and your traffic grow." },
  { title: "Radical ownership", body: "Every deliverable leaves our hands documented, tested and ready to run — we hand over with pride, not caveats." },
  { title: "Long-term thinking", body: "We'd rather be the partner you call for the next five projects than the vendor who shipped the last one." },
];

const milestones = [
  { year: "2025", event: "Founded in Pakistan by three engineers with a stubborn belief that business software deserved better craft." },
  { year: "2026", event: "Now partnering with teams across Pakistan, the USA and the UK — still independent." },
];

const stats = [
  { to: 2, suffix: "+", label: "Years independent" },
  { to: 50, suffix: "+", label: "Products launched" },
  { to: 10, suffix: "", label: "Designers & engineers" },
  { to: 4, suffix: "", label: "Countries served" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          lines={["Built to", <em key="l">last.</em>]}
          introAside
          intro={
            <p>
              A senior team of strategists, designers and engineers who treat your product like
              infrastructure — because for your business, it is.
            </p>
          }
        />

        <section className="block theme-bone" aria-labelledby="mission-title">
          <div className="wrap pullquote">
            <Reveal>
              <blockquote>
                <p>Senior people, small teams, <em>no</em> hand-offs. That&apos;s the whole model.</p>
                <cite className="label">Muhammad Zain Ali, CTO</cite>
              </blockquote>
            </Reveal>
          </div>
          <div className="wrap split">
            <SectionLabel title="Mission" className="split__label" />
            <div className="split__body">
              <h2 id="mission-title" className="lead">
                We exist to turn complex problems into focused, well-made software. Not the most
                features — the <em>right</em> ones, built with care and designed to last.
              </h2>
              <Reveal>
                <p className="body-copy">
                  We work as a true partner: embedded in your product thinking, opinionated when it
                  helps and always honest about trade-offs. Our best work happens when we understand not
                  just what to build, but why it matters to your business and the people using it.
                </p>
              </Reveal>
              <dl className="stats">
                {stats.map((s, i) => (
                  <Reveal key={s.label} className="stat" delay={i * 0.08}>
                    <dt className="label">{s.label}</dt>
                    <dd className="stat__num"><Counter to={s.to} suffix={s.suffix} /></dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="block theme-ink" aria-labelledby="values-title">
          <div className="wrap">
            <header className="sec-head">
              <SectionLabel title="Principles" />
              <h2 id="values-title" className="h-display">
                <MaskLines lines={["How we", <span key="l2">show <em>up.</em></span>]} />
              </h2>
            </header>
            <div className="rows rows--plain">
              {values.map((v, i) => (
                <Reveal key={v.title} className="row" delay={i * 0.05}>
                  <h3 className="row__title">{v.title}</h3>
                  <p className="row__body">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

<section className="block theme-ink" aria-labelledby="team-title">
          <div className="wrap">
            <header className="sec-head">
              <SectionLabel title="The team" />
              <h2 id="team-title" className="h-display">
                <MaskLines lines={["Small team.", <span key="l2"><em>Senior</em> hands.</span>]} />
              </h2>
            </header>
            <Reveal delay={0.2}>
              <p className="about-team__sub">No hand-offs to juniors you never met. The people in your kickoff are the people shipping your product.</p>
            </Reveal>
            <ul className="team">
              {team.map((m, i) => (
                <li key={m.name}>
                  <Reveal className="member" delay={i * 0.06}>
                    <div className="member__photo">
                      <Image src={m.avatar} alt={`Portrait of ${m.name}`} fill sizes="(max-width: 560px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                    </div>
                    <p className="member__name">{m.name}</p>
                    <span className="label">{m.role}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block theme-bone" aria-labelledby="history-title">
          <div className="wrap">
            <header className="sec-head">
              <SectionLabel title="History" />
              <h2 id="history-title" className="h-display">
                <MaskLines lines={["Since 2025,", <span key="l2">one <em>studio.</em></span>]} />
              </h2>
            </header>
            <Timeline items={milestones} />
          </div>
        </section>

        {/* Recognition section, hidden for now.
        <section className="block theme-ink" aria-labelledby="awards-title">
          <div className="wrap">
            <header className="sec-head">
              <SectionLabel title="Recognition" />
              <h2 id="awards-title" className="sr-only">Awards and recognition</h2>
            </header>
            <ul className="awards">
              {awards.map((a) => (
                <li key={a.title} className="award">
                  <span className="label">{a.year}</span>
                  <span className="award__title">{a.title}</span>
                  <span className="label">{a.category}</span>
                  <span className="award__arrow" aria-hidden><ArrowUpRight size={20} /></span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        */}

        <CtaSection lines={["Let's build", <span key="l2">something <em>solid.</em></span>]} />
      </main>
      <SiteFooter />
    </>
  );
}
