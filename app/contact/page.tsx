"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@tectonsolutions.com", href: "mailto:hello@tectonsolutions.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 234-5678", href: "tel:+15552345678" },
  { icon: MapPin, label: "Office", value: "350 Fifth Avenue, New York, NY 10118", href: "#" },
];

const services = [
  "Custom Software", "Web & Mobile", "AI & Automation",
  "SaaS Platforms", "APIs & Backend", "E-commerce",
  "UI/UX & Product Design", "Cloud & DevOps",
  "System Integration", "Performance Optimization",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <main className="cp">

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <nav className="sdp-nav">
        <div className="sdp-nav-inner">
          <Link href="/" className="sdp-nav-logo" aria-label="Tecton Solutions home">
            <Image src="/tecton-logoo.svg" alt="Tecton Solutions" width={140} height={38}
              style={{ filter: "brightness(0) invert(1)" }} priority />
          </Link>
          <div className="cp-nav-links">
            <Link href="/about" className="cp-nav-link">About</Link>
            <Link href="/work" className="cp-nav-link">Our Work</Link>
            <Link href="/contact" className="cp-nav-link cp-nav-link--active">Contact</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="cp-hero">
        <div className="cp-hero-bg-word" aria-hidden>CONTACT</div>
        <div className="container cp-hero-body">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="cp-h1">
            Let&apos;s build<br />
            <span className="cp-h1-lime">something great.</span>
          </h1>
          <p className="cp-hero-sub">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ───────────────────────────────────────────────── */}
      <section className="cp-main">
        <div className="container cp-main-grid">

          {/* ── LEFT — form ──────────────────────────────────────────── */}
          <div className="cp-form-wrap">
            {submitted ? (
              <div className="cp-success">
                <div className="cp-success-icon"><CheckCircle2 size={32} strokeWidth={1.5} /></div>
                <h2 className="cp-success-h2">Message received.</h2>
                <p className="cp-success-p">
                  Thanks for reaching out. A member of our team will be in touch within one business day.
                </p>
                <Link href="/" className="btn">
                  Back to Home <span className="btn-icon"><ArrowUpRight size={16} /></span>
                </Link>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit} noValidate>
                <div className="cp-form-row">
                  <div className="cp-field">
                    <label className="cp-label" htmlFor="cp-name">Full Name *</label>
                    <input id="cp-name" className="cp-input" type="text" placeholder="Alex Johnson"
                      value={form.name} onChange={set("name")} required />
                  </div>
                  <div className="cp-field">
                    <label className="cp-label" htmlFor="cp-email">Work Email *</label>
                    <input id="cp-email" className="cp-input" type="email" placeholder="alex@company.com"
                      value={form.email} onChange={set("email")} required />
                  </div>
                </div>

                <div className="cp-field">
                  <label className="cp-label" htmlFor="cp-company">Company</label>
                  <input id="cp-company" className="cp-input" type="text" placeholder="Your Company"
                    value={form.company} onChange={set("company")} />
                </div>

                <div className="cp-form-row">
                  <div className="cp-field">
                    <label className="cp-label" htmlFor="cp-service">Service Needed</label>
                    <select id="cp-service" className="cp-input cp-select"
                      value={form.service} onChange={set("service")}>
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="cp-field">
                    <label className="cp-label" htmlFor="cp-budget">Budget Range</label>
                    <select id="cp-budget" className="cp-input cp-select"
                      value={form.budget} onChange={set("budget")}>
                      <option value="">Select a range…</option>
                      <option>Under $10,000</option>
                      <option>$10,000 – $25,000</option>
                      <option>$25,000 – $75,000</option>
                      <option>$75,000 – $150,000</option>
                      <option>$150,000+</option>
                    </select>
                  </div>
                </div>

                <div className="cp-field">
                  <label className="cp-label" htmlFor="cp-msg">Tell us about your project *</label>
                  <textarea id="cp-msg" className="cp-input cp-textarea"
                    placeholder="What are you building? What problems are you solving?"
                    value={form.message} onChange={set("message")} required />
                </div>

                <button type="submit" className="btn cp-submit">
                  Send Message
                  <span className="btn-icon"><ArrowUpRight size={16} /></span>
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT — info ─────────────────────────────────────────── */}
          <aside className="cp-aside">
            <div className="cp-aside-card">
              <div className="cp-aside-head">
                <span className="eyebrow">Contact Info</span>
              </div>
              <div className="cp-contact-list">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="cp-contact-item">
                    <div className="cp-contact-icon"><Icon size={16} strokeWidth={1.5} /></div>
                    <div>
                      <div className="cp-contact-label">{label}</div>
                      <div className="cp-contact-value">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="cp-aside-card">
              <div className="cp-aside-head">
                <span className="eyebrow">Office Hours</span>
              </div>
              <div className="cp-hours">
                <div className="cp-hours-row"><span>Monday – Friday</span><span>9am – 6pm EST</span></div>
                <div className="cp-hours-row"><span>Saturday</span><span>By appointment</span></div>
                <div className="cp-hours-row"><span>Sunday</span><span>Closed</span></div>
              </div>
            </div>

            <div className="cp-aside-card cp-aside-card--lime">
              <p className="cp-aside-promise">
                We reply to every inquiry within <strong>one business day</strong> — usually much sooner.
              </p>
            </div>
          </aside>
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
          <Link href="/" className="btn" style={{ height: "48px", padding: "6px 6px 6px 20px", fontSize: "13px" }}>
            Back to Home
            <span className="btn-icon" style={{ width: "36px", height: "36px" }}><ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </footer>

    </main>
  );
}
