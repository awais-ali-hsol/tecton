import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, services } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Our Work | Tecton Solutions",
  description: "Selected projects and case studies from Tecton Solutions.",
};

export default function WorkPage() {
  const featured = projects.slice(0, 3);
  const rest = projects.slice(3);

  return (
    <main className="wp">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="sdp-nav">
        <div className="sdp-nav-inner">
          <Link href="/" className="sdp-nav-logo" aria-label="Tecton Solutions home">
            <Image src="/tecton-logoo.svg" alt="Tecton Solutions" width={140} height={38}
              style={{ filter: "brightness(0) invert(1)" }} priority />
          </Link>
          <div className="cp-nav-links">
            <Link href="/about" className="cp-nav-link">About</Link>
            <Link href="/work" className="cp-nav-link cp-nav-link--active">Our Work</Link>
            <Link href="/contact" className="cp-nav-link">Contact</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="wp-hero">
        <div className="wp-hero-bg-word" aria-hidden>WORK</div>
        <div className="container wp-hero-body">
          <span className="eyebrow">Selected Projects</span>
          <h1 className="wp-h1">
            Work that<br />
            <span className="wp-h1-outline" aria-hidden>speaks for itself.</span>
            <span className="wp-h1-solid">speaks for itself.</span>
          </h1>
          <p className="wp-hero-sub">
            {projects.length} live projects spanning wellness, real estate, SaaS, edtech, media and more.
          </p>
        </div>
      </section>

      {/* ── FEATURED CASE STUDIES ───────────────────────────────────── */}
      <section className="wp-cases">
        <div className="container">
          {featured.map(({ category, title, tags, detail, image, url }, i) => (
            <article key={title} className="wp-case">
              <div className="wp-case-media">
                <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
                <div className="wp-case-media-overlay" />
                <span className="wp-case-num">0{i + 1}</span>
              </div>
              <div className="wp-case-body">
                <div className="wp-case-meta">
                  <span className="eyebrow">{category}</span>
                  <div className="wp-case-tags">
                    {tags.map((t) => <span key={t} className="sdp-hero-pill">{t}</span>)}
                  </div>
                </div>
                <h2 className="wp-case-title">{title}</h2>
                <p className="wp-case-summary">{detail}</p>
                <div className="wp-case-actions">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
                    View Live Site
                    <span className="btn-icon"><ArrowUpRight size={16} /></span>
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Discuss a Similar Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── ALL PROJECTS GRID ───────────────────────────────────────── */}
      <section className="wp-grid-section">
        <div className="container">
          <div className="wp-grid-head">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>More Projects</span>
            <h2 className="sdp-section-h2">
              More of our<br />
              <span className="sdp-lime">recent work.</span>
            </h2>
          </div>
          <div className="wp-projects-grid">
            {rest.map(({ category, title, tags, image, url }) => (
              <a key={title} href={url} target="_blank" rel="noopener noreferrer" className="wp-project-card">
                <div className="wp-project-img">
                  <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
                  <div className="wp-project-img-overlay" />
                  <span className="wp-project-link-badge"><ArrowUpRight size={14} /></span>
                </div>
                <div className="wp-project-info">
                  <span className="wp-project-cat">{category}</span>
                  <h3 className="wp-project-title">{title}</h3>
                  <div className="wp-project-tags">
                    {tags.map((t) => <span key={t} className="wp-project-tag">{t}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ───────────────────────────────────────────── */}
      <section className="wp-services-cta">
        <div className="container wp-services-cta-inner">
          <div className="wp-services-cta-copy">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>Our Services</span>
            <h2 className="sdp-section-h2">
              What we can<br />
              <span className="sdp-lime">do for you.</span>
            </h2>
          </div>
          <div className="wp-services-list">
            {services.map(({ number, title, slug }) => (
              <Link key={slug} href={`/services/${slug}`} className="wp-service-row">
                <span className="wp-service-num">{number}</span>
                <span className="wp-service-title">{title}</span>
                <span className="wp-service-arrow"><ArrowUpRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="sdp-footer">
        <div className="container sdp-footer-inner">
          <Link href="/" aria-label="Tecton Solutions home">
            <Image src="/tecton-logoo.svg" alt="Tecton Solutions" width={120} height={32}
              style={{ filter: "brightness(0) invert(1)", opacity: 0.6 }} />
          </Link>
          <span className="sdp-footer-copy">© {new Date().getFullYear()} Tecton Solutions. All rights reserved.</span>
          <Link href="/contact" className="btn" style={{ height: "48px", padding: "6px 6px 6px 20px", fontSize: "13px" }}>
            Start a Project
            <span className="btn-icon" style={{ width: "36px", height: "36px" }}><ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </footer>

    </main>
  );
}
