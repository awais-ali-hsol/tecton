"use client";

import { useEffect, useRef, useState, useCallback, RefObject } from "react";
import Image from "next/image";
import {
  services,
  projects,
  stats,
  testimonials,
  awards,
  team,
  clients,
  posts,
} from "@/lib/data";

/* ─── HOOKS ─────────────────────────────────────────────────────────────────── */

/* Adds .revealed to elements when they enter the viewport */
function useReveal(threshold = 0.12) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [threshold]);
}

/* Parallax on hero background */
function useParallax(ref: RefObject<HTMLElement | null>, factor = 0.35) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        (el as HTMLElement).style.transform = `translateY(${y * factor}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [ref, factor]);
}

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * ease));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ─── ICON HELPERS ───────────────────────────────────────────────────────────── */

function ArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 12L12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor">
      <path d="M9 1.5l2.06 4.18 4.61.67-3.34 3.25.79 4.59L9 11.77l-4.12 2.42.79-4.59L2.33 6.35l4.61-.67L9 1.5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
      <path d="M13.5 1.5L8.5 7l5.5 6.5h-2.5L8 9.5 4.5 13.5H2L7.5 8 2.5 1.5H5L8.5 6 11.5 1.5h2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
      <path d="M1 2.5A1.5 1.5 0 102.5 1 1.5 1.5 0 001 2.5zm.5 2.5H4v9H1.5V5zM5.5 5H8v1.2C8.5 5.5 9.4 5 10.5 5c2 0 2.5 1.3 2.5 3V14H10.5v-4.5c0-.8-.1-2-1.5-2S7.5 8.7 7.5 9.5V14H5.5V5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
      <path d="M7.5 1c1.7 0 1.9 0 2.6.04a3.5 3.5 0 011.2.22 2.4 2.4 0 01.87.56 2.4 2.4 0 01.56.87c.14.37.21.77.22 1.2.04.67.04.9.04 2.6s0 1.9-.04 2.6a3.5 3.5 0 01-.22 1.2 2.4 2.4 0 01-.56.87 2.4 2.4 0 01-.87.56 3.5 3.5 0 01-1.2.22c-.67.04-.9.04-2.6.04s-1.9 0-2.6-.04a3.5 3.5 0 01-1.2-.22 2.4 2.4 0 01-.87-.56 2.4 2.4 0 01-.56-.87A3.5 3.5 0 012.04 10 37 37 0 012 7.5c0-1.7 0-1.9.04-2.6a3.5 3.5 0 01.22-1.2 2.4 2.4 0 01.56-.87 2.4 2.4 0 01.87-.56 3.5 3.5 0 011.2-.22C5.6 1 5.83 1 7.5 1zm0 1.35c-1.67 0-1.87 0-2.53.04-.6.03-.93.13-1.15.22a1.93 1.93 0 00-.7.46 1.93 1.93 0 00-.46.7c-.09.22-.19.54-.22 1.14-.04.66-.04.86-.04 2.53s0 1.87.04 2.53c.03.6.13.93.22 1.15.1.26.25.5.46.7.2.2.44.36.7.46.22.09.54.19 1.15.22.66.04.86.04 2.53.04s1.87 0 2.53-.04c.6-.03.93-.13 1.15-.22.26-.1.5-.25.7-.46.2-.2.36-.44.46-.7.09-.22.19-.54.22-1.15.04-.66.04-.86.04-2.53s0-1.87-.04-2.53c-.03-.6-.13-.93-.22-1.15a1.93 1.93 0 00-.46-.7 1.93 1.93 0 00-.7-.46c-.22-.09-.54-.19-1.15-.22-.66-.04-.86-.04-2.53-.04zm0 2.3a2.85 2.85 0 110 5.7 2.85 2.85 0 010-5.7zm0 4.35a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3.7-5.05a.67.67 0 110 1.34.67.67 0 010-1.34z" />
    </svg>
  );
}

/* ─── SERVICE ICON ───────────────────────────────────────────────────────────── */
function SvcIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    brackets: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l-4 6 4 6M13 4l4 6-4 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    layers: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 10l8-5 8 5-8 5-8-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M2 14l8 5 8-5M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity=".5" /></svg>,
    sparkles: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2v3M10 15v3M2 10h3M15 10h3M4.22 4.22l2.12 2.12M13.66 13.66l2.12 2.12M4.22 15.78l2.12-2.12M13.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    cloud: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 8a5 5 0 00-9.9-1 4 4 0 00.9 7.9h9a3 3 0 000-6h-.9a5 5 0 00.9-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
    server: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="11" width="14" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="6.5" cy="6.5" r=".75" fill="currentColor" /><circle cx="6.5" cy="13.5" r=".75" fill="currentColor" /></svg>,
    shopping: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 3h2l.6 3M7 13h8l2-7H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="16" r="1" fill="currentColor" /><circle cx="14" cy="16" r="1" fill="currentColor" /></svg>,
    palette: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16 3 3 0 010-6h2a2 2 0 002-2 8 8 0 00-4-8z" stroke="currentColor" strokeWidth="1.5" /></svg>,
    cloudCog: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8.5 17.5H6a4 4 0 010-8 5 5 0 019.5.5 3 3 0 01-2 5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="13" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.3" /></svg>,
    workflow: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="7" width="5" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" /><rect x="13" y="4" width="5" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" /><rect x="13" y="13" width="5" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" /><path d="M7 8.5h3l3-3M7 8.5h3l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
    gauge: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 14a6 6 0 1112 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M10 14l-3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="10" cy="14" r="1" fill="currentColor" /></svg>,
  };
  return <>{icons[icon] ?? icons["brackets"]}</>;
}

/* ─── STAT COUNTER ───────────────────────────────────────────────────────────── */
function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div className="stat-col">
      <div className="stat-num">
        <span ref={ref}>{count}</span>
        <span className="suf">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ─── MARQUEE ITEMS ──────────────────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Custom Software", "AI & Automation", "Web & Mobile", "SaaS Platforms",
  "UI/UX Design", "Cloud & DevOps", "APIs & Backend", "E-commerce", "System Integration",
];

/* ─── NAVBAR ─────────────────────────────────────────────────────────────────── */
function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const navLinks: { label: string; href: string }[] = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "/contact" },
  ];

  const handleContact = useCallback(() => {
    setOpen(false);
    window.location.href = "/contact";
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="/" className="nav-logo" aria-label="Tecton Solutions">
            <Image src="/tecton-logoo.svg" alt="Tecton Solutions" width={160} height={42} priority style={{ filter: "brightness(0) invert(1)" }} />
          </a>
          <div className="nav-links">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="btn" onClick={handleContact}>
              Start a Project
              <span className="btn-icon"><ArrowRight /></span>
            </button>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen((p) => !p)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <button className="btn mobile-menu-cta" onClick={handleContact}>
          Start a Project
          <span className="btn-icon"><ArrowRight /></span>
        </button>
      </div>
    </>
  );
}

/* ─── HERO ───────────────────────────────────────────────────────────────────── */
function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  useParallax(bgRef, 0.28);
  return (
    <section className="hero" id="home">
      <div className="hero-bg" ref={bgRef}>
        <Image
          src="/assets/imgi_16_Group3.webp"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
          priority
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(10,10,10,0.90) 0%, rgba(10,10,10,0.78) 55%, rgba(10,10,10,0.50) 100%)"
        }} />
      </div>
      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="eyebrow" style={{ marginBottom: "28px" }}>
              Software & Digital Products
            </div>
            <h1 className="hero-h1">
              <span className="line-white">Design.</span>
              <span className="line-white">Build.</span>
              <span className="line-lime">Deliver.</span>
            </h1>
            <div className="hero-tag-row">
              <span className="hero-tag">Full-stack</span>
              <span className="hero-tag-dot" />
              <span className="hero-tag">AI-Ready</span>
              <span className="hero-tag-dot" />
              <span className="hero-tag">Launch-Focused</span>
            </div>
          </div>

          <div className="hero-right">
            <p className="hero-desc">
              We partner with ambitious teams to build modern digital products —
              from web apps and SaaS platforms to AI-powered tools that drive
              real business outcomes.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button className="btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Start a Project
                <span className="btn-icon"><ArrowRight /></span>
              </button>
              <a href="#work" className="btn-outline">
                View Our Work <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="hero-social-proof">
              <div className="hero-avatars">
                {["/assets/imgi_33_tm-3h2.webp", "/assets/imgi_34_tm-3h3.webp", "/assets/imgi_35_tm-3h1.webp"].map((src, i) => (
                  <div className="hero-avatar" key={i}>
                    <Image src={src} alt="" width={44} height={44} />
                  </div>
                ))}
              </div>
              <div className="hero-proof-text">
                <strong>120+ Projects</strong>
                <span>delivered across 15+ industries</span>
              </div>
            </div>

            <div className="hero-mini-stats">
              <div className="hero-mini-stat">
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
              <div className="hero-mini-sep" />
              <div className="hero-mini-stat">
                <strong>98%</strong>
                <span>Client Satisfaction</span>
              </div>
              <div className="hero-mini-sep" />
              <div className="hero-mini-stat">
                <strong>4.9★</strong>
                <span>Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ──────────────────────────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="stats-section">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal" style={{ "--reveal-delay": i * 120 } as React.CSSProperties}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
      <div className="stats-bg-word">OUR RESULTS</div>
    </section>
  );
}

/* ─── MARQUEE ────────────────────────────────────────────────────────────────── */
function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-band">
        <div className="marquee-track" aria-hidden>
          {items.map((item, i) => (
            <span key={i}>✦ {item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SERVICES ───────────────────────────────────────────────────────────────── */
function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="reveal-left">
            <div className="eyebrow" style={{ marginBottom: "16px" }}>What We Do</div>
            <h2 className="section-h2">
              Full-spectrum<br /><span className="lime">digital craft</span>
            </h2>
          </div>
          <div className="reveal-right">
            <p className="section-body">
              From early-stage product strategy to production-grade engineering,
              we bring together every discipline needed to ship great software.
            </p>
            <a href="#contact" className="text-link">
              See all services <ArrowRight size={13} />
            </a>
          </div>
        </div>
        <div className="services-grid">
          {services.slice(0, 9).map((svc, i) => (
            <div key={svc.slug} className="svc-card reveal" style={{ "--reveal-delay": 60 + i * 70 } as React.CSSProperties}>
              <div className="svc-num">{svc.number}</div>
              <div className="svc-icon">
                <SvcIcon icon={svc.icon} />
              </div>
              <div className="svc-title">{svc.title}</div>
              <div className="svc-desc">{svc.description}</div>
              <a href={`/services/${svc.slug}`} className="svc-link">
                Learn more <ArrowRight size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CASE STUDIES ───────────────────────────────────────────────────────────── */
function CaseStudies() {
  return (
    <section className="cases-section" id="work">
      <div className="container" style={{ position: "relative" }}>
        <div className="cases-eyebrow reveal"><span className="eyebrow">Selected Work</span></div>
        <div className="cases-title-row reveal" style={{ "--reveal-delay": 80 } as React.CSSProperties}>
          <h2 className="cases-h2">
            Projects that<br />move the needle.
          </h2>
          <div className="cases-bg-word">WORK</div>
          <a href="/work" className="btn">
            All Projects
            <span className="btn-icon"><ArrowRight /></span>
          </a>
        </div>
        {projects.slice(0, 3).map((proj, i) => (
          <div key={proj.title} className="case-row reveal" style={{ "--reveal-delay": i * 100 } as React.CSSProperties}>
            <div className="case-img-wrap">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="case-cat">{proj.category}</div>
              <h3 className="case-h3">{proj.title}</h3>
              <p className="case-desc">{proj.detail}</p>
              <div className="case-tags">
                {proj.tags.map((t) => (
                  <span key={t} className="case-tag">{t}</span>
                ))}
              </div>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-link">
                View Live Site <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────────── */
function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="testimonials-section" id="about">
      <div className="container">
        <div className="reveal" style={{ marginBottom: "48px" }}>
          <span className="eyebrow">Client Voices</span>
        </div>
        <div className="testimonials-inner">
          <div className="rating-col reveal-left" style={{ "--reveal-delay": 100 } as React.CSSProperties}>
            <div className="rating-num">4.9</div>
            <div className="rating-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} size={20} />
              ))}
            </div>
            <p className="rating-note">Based on 40+ verified reviews across Clutch and Google.</p>
          </div>
          <div className="reveal-right" style={{ "--reveal-delay": 200 } as React.CSSProperties}>
            <div className="testimonial-card">
              <p className="t-quote">&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                <div className="t-author">
                  <div className="t-avatar">
                    <Image src={t.avatar} alt={t.name} width={52} height={52} />
                  </div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}, {t.company}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Testimonial ${i + 1}`}
                      onClick={() => setActive(i)}
                      style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        background: i === active ? "var(--color-primary)" : "var(--color-border)",
                        transition: "background 200ms ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AWARDS ─────────────────────────────────────────────────────────────────── */
function Awards() {
  return (
    <section className="awards-section">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="awards-inner">
          <div className="reveal-left">
            <div className="awards-left-head">
              <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>Recognition</span>
              <h2 className="section-h2">Award-winning<br /><span className="lime">work.</span></h2>
            </div>
            <p className="awards-left-desc">
              Recognised by the industry&apos;s most respected bodies for
              our commitment to quality, craft and outcomes.
            </p>
            <div className="awards-decoration" style={{ marginTop: "48px" }} />
          </div>
          <div className="awards-list">
            {awards.map((a, i) => (
              <div key={a.title} className="award-row reveal" style={{ "--reveal-delay": i * 90 } as React.CSSProperties}>
                <div className="award-cat">{a.category}</div>
                <div className="award-title">{a.title}</div>
                <div className="award-year">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="awards-bg-word">AWARDS</div>
    </section>
  );
}

/* ─── PHOTO BAND ─────────────────────────────────────────────────────────────── */
function PhotoBand() {
  return (
    <div className="photo-band">
      <div className="photo-band-bg">
        <Image
          src="/assets/imgi_13_bg5.webp"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.72)" }} />
      </div>
      <div className="container photo-band-content reveal-scale">
        <h2 className="photo-band-h2">
          Precision built.<br /><span className="lime">Results delivered.</span>
        </h2>
        <button
          className="btn"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Let&apos;s Build Together
          <span className="btn-icon"><ArrowRight /></span>
        </button>
      </div>
    </div>
  );
}

/* ─── CLIENTS ────────────────────────────────────────────────────────────────── */
function Clients() {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-label reveal">
          <span className="eyebrow">Trusted By</span>
        </div>
        <div className="clients-grid">
          {clients.slice(0, 10).map((src, i) => (
            <div key={i} className="client-tile reveal" style={{ "--reveal-delay": i * 55 } as React.CSSProperties}>
              <Image src={src} alt="Client" width={120} height={28} style={{ height: "28px", width: "auto", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM ───────────────────────────────────────────────────────────────────── */
function Team() {
  return (
    <section className="team-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>Our People</span>
            <h2 className="section-h2">The team behind<br /><span className="lime">the work.</span></h2>
          </div>
          <p className="section-body">
            A tight-knit team of engineers, designers and strategists who care about
            the craft and the outcome equally. No unnecessary layers — just focused,
            senior people working closely with you.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={member.name} className="team-card reveal" style={{ "--reveal-delay": i * 80 } as React.CSSProperties}>
              <div className="team-photo">
                <Image src={member.avatar} alt={member.name} fill style={{ objectFit: "cover", objectPosition: "top center" }} />
                <div className="team-photo-overlay" />
              </div>
              <div className="team-card-body">
                <div className="team-card-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>
                <div className="team-socials">
                  <a href="#" className="team-social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
                  <a href="#" className="team-social-btn" aria-label="Twitter"><TwitterIcon /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BAND ───────────────────────────────────────────────────────────────── */
function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band-inner">
          <h2 className="cta-band-h2 reveal-left">
            Ready to build<br />something <span className="lime">great?</span>
          </h2>
          <button
            className="btn"
            style={{ fontSize: "16px", height: "60px", padding: "10px 10px 10px 28px" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
            <span className="btn-icon" style={{ width: "44px", height: "44px" }}><ArrowRight size={18} /></span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── BLOG ───────────────────────────────────────────────────────────────────── */
function Blog() {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: "16px", display: "flex" }}>Insights</span>
            <h2 className="section-h2">From the<br /><span className="lime">field.</span></h2>
          </div>
          <div>
            <p className="section-body">
              Thinking from our team on software, AI, design and building
              products that actually work.
            </p>
            <a href="/blog" className="text-link">
              All Articles <ArrowRight size={13} />
            </a>
          </div>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <a key={post.title} href={post.slug} className="blog-card reveal" style={{ "--reveal-delay": i * 100 } as React.CSSProperties}>
              <div className="blog-img">
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
                <div className="blog-img-overlay" />
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-cat">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-read-more">
                  Read Article <ArrowRight size={11} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────────── */
function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:hello@tectonsolutions.com?subject=Newsletter&body=Please add ${email} to your newsletter.`;
      setEmail("");
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="reveal-left">
            <h2 className="footer-headline">
              Let&apos;s<br /><span className="lime">Talk.</span>
            </h2>
            <p className="footer-tagline">
              Have a project in mind? We&apos;d love to hear about it. Drop us a
              line and we&apos;ll be in touch within 24 hours.
            </p>
          </div>
          <div className="footer-form-side reveal-right" style={{ "--reveal-delay": 150 } as React.CSSProperties}>
            <span className="footer-form-label">Stay in the loop</span>
            <form onSubmit={handleSubmit} className="footer-input-row">
              <input
                className="footer-input"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn" style={{ height: "52px", padding: "6px 6px 6px 18px", fontSize: "13px" }}>
                Subscribe
                <span className="btn-icon" style={{ width: "40px", height: "40px" }}><ArrowRight size={14} /></span>
              </button>
            </form>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <a
                href="mailto:hello@tectonsolutions.com"
                className="btn"
                style={{ height: "52px", padding: "6px 6px 6px 18px", fontSize: "14px" }}
              >
                hello@tectonsolutions.com
                <span className="btn-icon" style={{ width: "40px", height: "40px" }}>
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-cols">
          <div className="footer-brand">
            <Image src="/tecton-logoo.svg" alt="Tecton Solutions" width={140} height={36} style={{ filter: "brightness(0) invert(1)" }} />
            <p>
              We build modern digital products for growing businesses — from custom
              software and SaaS to AI-powered tools.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" className="footer-social-btn" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" className="footer-social-btn" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {[
              { label: "Custom Software", slug: "custom-software" },
              { label: "Web & Mobile", slug: "web-mobile" },
              { label: "AI & Automation", slug: "ai-automation" },
              { label: "SaaS Platforms", slug: "saas-platforms" },
              { label: "UI/UX Design", slug: "ui-ux-product-design" },
            ].map(({ label, slug }) => (
              <a key={slug} href={`/services/${slug}`}>{label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            {[
              { label: "About Us", href: "/about" },
              { label: "Our Work", href: "/work" },
              { label: "Blog", href: "#blog" },
              { label: "Careers", href: "#careers" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <div className="footer-contact-row">
              <span>Email</span>
              <a href="mailto:hello@tectonsolutions.com">hello@tectonsolutions.com</a>
            </div>
            <div className="footer-contact-row">
              <span>Phone</span>
              <a href="tel:+11234567890">+1 (123) 456-7890</a>
            </div>
            <div className="footer-contact-row">
              <span>Location</span>
              <a href="#">New York, NY · Remote</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tecton Solutions. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────────── */
export default function Site() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Awards />
        <PhotoBand />
        <Clients />
        <Team />
        <CtaBand />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
