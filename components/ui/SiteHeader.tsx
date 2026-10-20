"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { contact, socials } from "@/lib/data";
import { Button } from "./Button";
import { EASE, useLocalTime } from "./hooks";

const NAV = [
  { href: "/work/", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/about/", label: "Studio" },
  { href: "/#insights", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export function SiteHeader() {
  const pathname = normalize(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const time = useLocalTime(contact.timezone);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 320 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 320) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href) && href !== "/";

  return (
    <>
      <header className="hdr" data-scrolled={scrolled && !open} data-hidden={hidden && !open}>
        <div className="wrap hdr__inner">
          <Link href="/" className="hdr__logo" aria-label="Tecton Solutions — home" onClick={() => setOpen(false)}>
            <Logo width={132} />
          </Link>

          <nav className="hdr__nav" aria-label="Primary">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="hdr__link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <sup>0{i + 1}</sup>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hdr__end">
            <span className="hdr__status label">
              <i className="pulse-dot" aria-hidden /> Booking Q1 2027
            </span>
            <Button href="/contact/" size="sm" className="hdr__cta">Start a project</Button>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="menu theme-ink"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav className="menu__nav" aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                >
                  <Link href={item.href} className="menu__link" onClick={() => setOpen(false)}>
                    <span className="label">0{i + 1}</span>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className="menu__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href={`mailto:${contact.email}`} className="menu__email">{contact.email}</a>
              <div className="menu__meta">
                <span className="label">New York {time ?? "--:--"}</span>
                <span className="menu__socials">
                  {socials.map((s) => (
                    <a key={s.label} href={s.href} className="label">{s.label}</a>
                  ))}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
