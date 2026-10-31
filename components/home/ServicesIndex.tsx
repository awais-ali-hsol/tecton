"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { serviceDetails, services } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { EASE } from "@/components/ui/hooks";
import { MaskLines } from "@/components/ui/Reveal";

export function ServicesIndex() {
  const [active, setActive] = useState(0);
  const svc = services[active];
  const detail = serviceDetails[svc.slug];

  return (
    <section className="svc theme-ink" id="services" aria-labelledby="svc-title">
      <div className="wrap">
        <header className="sec-head">
          <h2 id="svc-title" className="h-display">
            <MaskLines lines={["Ten disciplines.", <span key="l2"><em>One</em> accountable team.</span>]} />
          </h2>
        </header>

        <div className="svc__grid">
          <aside className="svc__panel" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="svc__panel-top">
                  <span className="svc__num">{svc.number}</span>
                  <span className="label">/ {String(services.length).padStart(2, "0")}</span>
                </div>
                <h3 className="svc__name">{svc.title}</h3>
                <p className="svc__detail">{svc.detail}</p>
                <ul className="svc__caps">
                  {detail.capabilities.slice(0, 4).map((c) => <li key={c}>{c}</li>)}
                </ul>
                <ul className="tags">
                  {svc.technologies.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <Link href={`/services/${svc.slug}/`} className="link-arrow">
                  Explore {svc.title} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </aside>

          <ol className="svc__list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="svc-row"
                  data-active={i === active}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="svc-row__num label">{s.number}</span>
                  <span className="svc-row__title">{s.title}</span>
                  <span className="svc-row__desc">{s.description}</span>
                  <span className="svc-row__arrow" aria-hidden><ArrowUpRight size={22} /></span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
