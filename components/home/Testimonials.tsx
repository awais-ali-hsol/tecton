"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { clients, testimonials } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";
import { EASE } from "@/components/ui/hooks";
import { Marquee } from "@/components/ui/Marquee";
import { SectionLabel } from "@/components/ui/SectionLabel";

const DURATION = 8000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const total = testimonials.length;
  const go = useCallback((dir: number) => setIndex((v) => (v + dir + total) % total), [total]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(id);
  }, [index, paused, reduce, go]);

  const t = testimonials[index];

  return (
    <section className="quotes theme-bone" aria-labelledby="quotes-title">
      <div className="wrap quotes__grid">
        <div className="quotes__aside">
          <SectionLabel index="05" title="Client voices" />
          <h2 id="quotes-title" className="sr-only">What clients say</h2>
          <div className="rating">
            <p className="rating__num">4.9<span>/5</span></p>
            <p className="rating__text">Average across 40+ verified reviews on Clutch and Google.</p>
          </div>
          <div className="quotes__nav">
            <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Previous testimonial"><ArrowLeft /></button>
            <span className="label" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Next testimonial"><ArrowRight /></button>
          </div>
        </div>

        <figure
          className="quote"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <blockquote className="quote__text">
                <span className="quote__mark" aria-hidden>“</span>
                {t.quote}
              </blockquote>
              <figcaption className="quote__by">
                <span className="quote__avatar">
                  <Image src={t.avatar} alt="" width={56} height={56} />
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <span className="label">{t.role}, {t.company}</span>
                </span>
              </figcaption>
            </motion.div>
          </AnimatePresence>

          <div className="quote__progress">
            {testimonials.map((q, i) => (
              <button
                key={q.name}
                type="button"
                aria-label={`Show testimonial from ${q.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              >
                <span
                  key={i === index ? `${index}-${paused}` : undefined}
                  data-state={i < index ? "done" : i === index ? (paused || reduce ? "hold" : "run") : "idle"}
                  style={{ animationDuration: `${DURATION}ms` }}
                />
              </button>
            ))}
          </div>
        </figure>
      </div>

      <div className="clients">
        <p className="label clients__label wrap">Trusted by teams at</p>
        <Marquee duration={35} reverse label="Client logos">
          {clients.map((src, i) => (
            <span className="clients__logo" key={`${src}-${i}`}>
              <Image src={src} alt="" width={120} height={48} />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
