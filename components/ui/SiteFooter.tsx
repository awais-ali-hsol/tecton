"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { contact, services, socials } from "@/lib/data";
import { isEmail, subscribeNewsletter } from "@/lib/forms";
import { ArrowRight, ArrowUp, Check } from "./icons";
import { useLocalTime } from "./hooks";
import { Magnetic } from "./Magnetic";

type Status = "idle" | "loading" | "done" | "error";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }
    setStatus("loading");
    const res = await subscribeNewsletter(email);
    if (res.ok) {
      setStatus("done");
      setEmail("");
    } else {
      setStatus("error");
      setError(res.error);
    }
  };

  if (status === "done") {
    return (
      <p className="news__done" role="status">
        <Check size={18} /> You&apos;re on the list. First issue lands next month.
      </p>
    );
  }

  return (
    <form className="news" onSubmit={onSubmit} noValidate>
      <label htmlFor="news-email" className="sr-only">Email address</label>
      <input
        id="news-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        aria-invalid={status === "error"}
        aria-describedby={status === "error" ? "news-error" : undefined}
      />
      <button type="submit" aria-label="Subscribe" disabled={status === "loading"} aria-busy={status === "loading"}>
        {status === "loading" ? <span className="spinner" aria-hidden /> : <ArrowRight size={20} />}
      </button>
      {status === "error" && <p id="news-error" className="field-error" role="alert">{error}</p>}
    </form>
  );
}

export function SiteFooter() {
  const time = useLocalTime(contact.timezone);
  const year = new Date().getFullYear();

  return (
    <footer className="ftr theme-ink">
      <div className="wrap">
        <div className="ftr__top">
          <div className="ftr__lead" id="newsletter">
            <p className="label">Field notes — monthly</p>
            <h2 className="ftr__title">
              Notes on building software that <em>lasts.</em>
            </h2>
            <Newsletter />
          </div>

          <div className="ftr__cols">
            <div>
              <p className="label">Sitemap</p>
              <ul>
                <li><Link href="/" className="link-u">Home</Link></li>
                <li><Link href="/work/" className="link-u">Work</Link></li>
                <li><Link href="/about/" className="link-u">Studio</Link></li>
                <li><Link href="/contact/" className="link-u">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="label">Services</p>
              <ul>
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}><Link href={`/services/${s.slug}/`} className="link-u">{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Connect</p>
              <ul>
                {socials.map((s) => (
                  <li key={s.label}><a href={s.href} className="link-u">{s.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Studio</p>
              <ul>
                <li><a href={`mailto:${contact.email}`} className="link-u">{contact.email}</a></li>
                <li><a href={contact.phoneHref} className="link-u">{contact.phone}</a></li>
                <li className="ftr__addr">{contact.address}</li>
                <li className="ftr__time"><i className="pulse-dot" aria-hidden /> NYC {time ?? "--:--"}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ftr__mark" aria-hidden>
          {"Tecton".split("").map((c, i) => (
            <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>{c}</span>
          ))}
        </div>

        <div className="ftr__bottom">
          <span className="label">© {year} Tecton Solutions</span>
          <span className="label hide-sm">Independent product studio — New York</span>
          <Magnetic>
            <button
              type="button"
              className="to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
            >
              <span className="label">Back to top</span>
              <span className="to-top__icon"><ArrowUp size={16} /></span>
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
