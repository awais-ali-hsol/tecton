import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ArrowUpRight } from "lucide-react";
import { team, stats, awards } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "About Us | Tecton Solutions",
  description: "We are a technology partner for companies building ambitious digital products.",
};

const values = [
  { num: "01", title: "Clarity first", body: "We invest time understanding the problem before writing a line of code. Clear thinking leads to better software." },
  { num: "02", title: "Craft over speed", body: "We work at a pace that lets us do things properly — well-designed systems that hold up as your business grows." },
  { num: "03", title: "Radical ownership", body: "Every deliverable leaves our hands ready to run. We document, we test, we hand over with pride." },
  { num: "04", title: "Long-term thinking", body: "Our goal is to be the partner you call for the next project, not just the current one." },
];

const milestones = [
  { year: "2015", event: "Founded in New York with a focus on bespoke business software." },
  { year: "2017", event: "Expanded into mobile and SaaS, tripling the team in 18 months." },
  { year: "2019", event: "Opened our design practice, bringing product thinking in-house." },
  { year: "2021", event: "Launched our AI & Automation division. First Clutch Top Agency award." },
  { year: "2023", event: "120+ projects delivered. Recognised by Awwwards and Webby Awards." },
  { year: "2025", event: "Serving clients across North America, Europe and the Middle East." },
];

export default function AboutPage() {
  return (
    <main className="ap">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="sdp-nav">
        <div className="sdp-nav-inner">
          <Link href="/" className="sdp-nav-logo" aria-label="Tecton Solutions home">
            <Logo width={140} />
          </Link>
          <div className="cp-nav-links">
            <Link href="/about" className="cp-nav-link cp-nav-link--active">About</Link>
            <Link href="/work" className="cp-nav-link">Our Work</Link>
            <Link href="/contact" className="cp-nav-link">Contact</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="ap-hero">
        <div className="ap-hero-photo" aria-hidden>
          <Image src="/assets/imgi_13_bg5.webp" alt="" fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }} priority />
          <div className="ap-hero-overlay" />
        </div>
        <div className="ap-hero-bg-word" aria-hidden>ABOUT</div>

        <div className="container ap-hero-body">
          <div className="ap-hero-top">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>About Tecton</span>
            <span className="sdp-hero-num-badge">Est. 2015</span>
          </div>
          <h1 className="ap-h1">
            We build software<br />
            <span className="ap-h1-outline" aria-hidden>people rely on.</span>
            <span className="ap-h1-solid">people rely on.</span>
          </h1>
          <div className="ap-hero-detail-row">
            <div className="sdp-hero-divider" />
            <p className="sdp-hero-detail">
              Tecton Solutions is a technology partner for companies building ambitious digital products.
              Over ten years we have helped startups, scale-ups and enterprises ship software that matters.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────── */}
      <section className="ap-stats">
        <div className="container ap-stats-grid">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="ap-stat">
              <div className="ap-stat-value">{value}{suffix}</div>
              <div className="ap-stat-label">{label}</div>
            </div>
          ))}
          <div className="ap-stat">
            <div className="ap-stat-value">10+</div>
            <div className="ap-stat-label">Countries Served</div>
          </div>
        </div>
      </section>

      {/* ── MISSION ─────────────────────────────────────────────────── */}
      <section className="ap-mission">
        <div className="container ap-mission-grid">
          <div className="ap-mission-left">
            <span className="eyebrow" style={{ marginBottom: "20px", display: "flex" }}>Our Mission</span>
            <h2 className="sdp-section-h2">
              Technology with a<br />
              <span className="sdp-lime">clear purpose.</span>
            </h2>
          </div>
          <div className="ap-mission-right">
            <p className="sdp-lead">
              We exist to turn complex problems into focused, well-crafted software. Not the most features —
              the right ones, built with care and designed to last.
            </p>
            <p className="sdp-body">
              We work as a true partner: embedded in your product thinking, opinionated when it helps, and
              always honest about trade-offs. Our best work comes when we understand not just what to build
              but why it matters to your business and the people using it.
            </p>
            <Link href="/contact" className="btn" style={{ marginTop: "8px", alignSelf: "flex-start" }}>
              Work with us <span className="btn-icon"><ArrowUpRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────────────── */}
      <section className="ap-values">
        <div className="container">
          <div className="ap-values-head">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>How We Work</span>
            <h2 className="sdp-section-h2">
              Principles that<br />
              <span className="sdp-lime">guide every project.</span>
            </h2>
          </div>
          <div className="ap-values-grid">
            {values.map(({ num, title, body }) => (
              <div key={num} className="ap-value-card">
                <div className="ap-value-num">{num}</div>
                <h3 className="ap-value-title">{title}</h3>
                <p className="ap-value-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ──────────────────────────────────────────────── */}
      <section className="ap-timeline">
        <div className="container">
          <div className="ap-timeline-head">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>Our Story</span>
            <h2 className="sdp-section-h2">
              A decade of<br />
              <span className="sdp-lime">building together.</span>
            </h2>
          </div>
          <div className="ap-timeline-list">
            {milestones.map(({ year, event }) => (
              <div key={year} className="ap-timeline-row">
                <div className="ap-timeline-year">{year}</div>
                <div className="ap-timeline-dot" />
                <div className="ap-timeline-event">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ──────────────────────────────────────────────────── */}
      <section className="ap-awards">
        <div className="container">
          <span className="eyebrow" style={{ marginBottom: "48px", display: "flex" }}>Recognition</span>
          <div className="ap-awards-list">
            {awards.map(({ category, title, year }) => (
              <div key={title} className="ap-award-row">
                <span className="ap-award-cat">{category}</span>
                <span className="ap-award-title">{title}</span>
                <span className="ap-award-year">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────────────────────── */}
      <section className="ap-team">
        <div className="container">
          <div className="ap-team-head">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>The Team</span>
            <h2 className="sdp-section-h2">
              People who care<br />
              <span className="sdp-lime">about the details.</span>
            </h2>
          </div>
          <div className="ap-team-grid">
            {team.map(({ name, role, avatar }) => (
              <div key={name} className="ap-team-card">
                <div className="ap-team-photo">
                  <Image src={avatar} alt={name} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="ap-team-info">
                  <div className="ap-team-name">{name}</div>
                  <div className="ap-team-role">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="ap-cta">
        <div className="container ap-cta-inner">
          <div className="ap-cta-bg-word" aria-hidden>READY</div>
          <h2 className="ap-cta-h2">Ready to build<br /><span className="sdp-lime">something together?</span></h2>
          <Link href="/contact" className="btn ap-cta-btn">
            Start a Conversation
            <span className="btn-icon"><ArrowUpRight size={16} /></span>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="sdp-footer">
        <div className="container sdp-footer-inner">
          <Link href="/" aria-label="Tecton Solutions home">
            <Logo width={120} style={{ opacity: 0.6 }} />
          </Link>
          <span className="sdp-footer-copy">© {new Date().getFullYear()} Tecton Solutions. All rights reserved.</span>
          <Link href="/contact" className="btn" style={{ height: "48px", padding: "6px 6px 6px 20px", fontSize: "13px" }}>
            Get in Touch
            <span className="btn-icon" style={{ width: "36px", height: "36px" }}><ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </footer>

    </main>
  );
}
