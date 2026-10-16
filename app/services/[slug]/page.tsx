import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  ArrowLeft, ArrowUpRight, Check,
  Braces, Cloud, CloudCog, Gauge, Layers3,
  Palette, Server, ShoppingBag, Sparkles, Workflow,
} from "lucide-react";
import { serviceDetails, services } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

const iconMap: Record<string, React.ElementType> = {
  brackets: Braces, layers: Layers3, sparkles: Sparkles,
  cloud: Cloud, server: Server, shopping: ShoppingBag,
  palette: Palette, cloudCog: CloudCog, workflow: Workflow, gauge: Gauge,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Service | Tecton Solutions" };
  return {
    title: `${svc.title} | Tecton Solutions`,
    description: svc.description,
    openGraph: { title: `${svc.title} | Tecton Solutions`, description: svc.description, type: "website" },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) {
    return (
      <main className="sdp-not-found">
        <h1>Service not found</h1>
        <Link href="/#services">← Back to services</Link>
      </main>
    );
  }
  const detail = serviceDetails[svc.slug]!;
  const Icon = iconMap[svc.icon] ?? Braces;
  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <main className="sdp">

      {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
      <nav className="sdp-nav">
        <div className="sdp-nav-inner">
          <Link href="/" className="sdp-nav-logo" aria-label="Tecton Solutions home">
            <Logo width={140} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <ThemeToggle />
            <Link href="/#services" className="sdp-back-link">
              <ArrowLeft size={14} /> All Services
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="sdp-hero">

        {/* Photo background */}
        <div className="sdp-hero-photo" aria-hidden>
          <Image
            src="/assets/imgi_13_bg5.webp"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority
          />
          <div className="sdp-hero-photo-overlay" />
        </div>

        {/* Outlined bg word */}
        <div className="sdp-hero-bg-word" aria-hidden>{svc.title.toUpperCase()}</div>

        <div className="container sdp-hero-body">

          {/* Top row — eyebrow + service number */}
          <div className="sdp-hero-top">
            <div className="sdp-hero-eyebrow">
              <div className="sdp-hero-icon-wrap">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>{svc.title}</span>
            </div>
            <span className="sdp-hero-num-badge">{svc.number} / {String(services.length).padStart(2,"0")}</span>
          </div>

          {/* Main headline */}
          <h1 className="sdp-hero-h1">
            <span className="sdp-hero-h1-outline" aria-hidden>{svc.title}</span>
            <span className="sdp-hero-h1-solid">{svc.title}</span>
          </h1>

          {/* Divider + detail text */}
          <div className="sdp-hero-detail-row">
            <div className="sdp-hero-divider" />
            <p className="sdp-hero-detail">{svc.detail}</p>
          </div>

          {/* Bottom bar */}
          <div className="sdp-hero-bar">
            {/* Left — tech pills */}
            <div className="sdp-hero-pills">
              {svc.technologies.map((t) => (
                <span key={t} className="sdp-hero-pill">{t}</span>
              ))}
            </div>

            {/* Right — CTA */}
            <div className="sdp-hero-actions">
              <Link href="/#contact" className="btn">
                Start a Project
                <span className="btn-icon"><ArrowUpRight size={16} /></span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────────────────────── */}
      <section className="sdp-overview">
        <div className="container sdp-overview-grid">
          <div className="sdp-overview-left">
            <span className="eyebrow" style={{ marginBottom: "20px", display: "flex" }}>What We Do</span>
            <h2 className="sdp-section-h2">
              Technology with a<br />
              <span className="sdp-lime">clear purpose.</span>
            </h2>
          </div>
          <div className="sdp-overview-right">
            <p className="sdp-lead">{svc.description}</p>
            <p className="sdp-body">
              We bring the right mix of strategy, design and engineering to create
              something useful now and ready for what comes next.
            </p>
            <div className="sdp-best-for">
              <span className="sdp-best-for-label">Best for</span>
              <span className="sdp-best-for-text">{detail.bestFor}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ───────────────────────────────────────────────── */}
      <section className="sdp-capabilities">
        <div className="container">
          <div className="sdp-cap-head">
            <span className="eyebrow">Core Capabilities</span>
          </div>
          <div className="sdp-cap-grid">
            {detail.capabilities.map((cap, i) => (
              <div key={cap} className="sdp-cap-item">
                <span className="sdp-cap-num">0{i + 1}</span>
                <div className="sdp-cap-check">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="sdp-cap-text">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE + DELIVERABLES ──────────────────────────────────── */}
      <section className="sdp-exp">
        <div className="container">
          <div className="sdp-exp-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>How We Work</span>
              <h2 className="sdp-section-h2">
                From first question<br />
                <span className="sdp-lime">to shipped product.</span>
              </h2>
            </div>
            <p className="sdp-exp-sub">
              Every engagement is shaped around the decisions, constraints and
              outcomes that matter to your team.
            </p>
          </div>

          <div className="sdp-exp-grid">
            {/* What we bring */}
            <div className="sdp-exp-col">
              <div className="sdp-exp-col-label">WHAT WE BRING</div>
              {detail.experience.map((item, i) => (
                <div key={item} className="sdp-exp-item">
                  <span className="sdp-exp-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="sdp-deliverables">
              <div className="sdp-del-label">TYPICAL DELIVERABLES</div>
              <div className="sdp-del-list">
                {detail.deliverables.map((item) => (
                  <div key={item} className="sdp-del-item">
                    <span className="sdp-del-icon"><Check size={13} strokeWidth={3} /></span>
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="btn" style={{ marginTop: "32px", alignSelf: "flex-start" }}>
                Discuss Your Needs
                <span className="btn-icon"><ArrowUpRight size={15} /></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ─────────────────────────────────────────────────── */}
      <section className="sdp-stack">
        <div className="container sdp-stack-inner">
          <span className="eyebrow">Technologies</span>
          <div className="sdp-stack-tags">
            {svc.technologies.map((t) => (
              <span key={t} className="sdp-stack-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ───────────────────────────────────────────── */}
      <section className="sdp-related">
        <div className="container">
          <div className="sdp-related-head">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>More Services</span>
            <h2 className="sdp-section-h2">
              More ways to<br />
              <span className="sdp-lime">move forward.</span>
            </h2>
          </div>
          <div className="sdp-related-grid">
            {related.map((item) => {
              const RelIcon = iconMap[item.icon] ?? Braces;
              return (
                <Link key={item.slug} href={`/services/${item.slug}`} className="sdp-rel-card">
                  <div className="sdp-rel-icon">
                    <RelIcon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="sdp-rel-num">{item.number}</div>
                  <h3 className="sdp-rel-title">{item.title}</h3>
                  <p className="sdp-rel-desc">{item.description}</p>
                  <span className="sdp-rel-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="sdp-related-cta">
            <Link href="/#contact" className="text-link">
              Talk through your project <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="sdp-footer">
        <div className="container sdp-footer-inner">
          <Link href="/" aria-label="Tecton Solutions home">
            <Logo width={120} style={{ opacity: 0.6 }} />
          </Link>
          <span className="sdp-footer-copy">
            © {new Date().getFullYear()} Tecton Solutions. All rights reserved.
          </span>
          <Link href="/#contact" className="btn" style={{ height: "48px", padding: "6px 6px 6px 20px", fontSize: "13px" }}>
            Start a Project
            <span className="btn-icon" style={{ width: "36px", height: "36px" }}>
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </footer>

    </main>
  );
}
