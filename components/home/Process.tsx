"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/data";
import { useMediaQuery } from "@/components/ui/hooks";
import { MaskLines } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** Desktop: vertical scroll drives a horizontal track. Mobile / reduced motion: plain stacked list. */
export function Process() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const wide = useMediaQuery("(min-width: 1024px)");
  const pinned = wide && !reduce;
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!pinned || !el) return;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section
      ref={section}
      className={`process theme-ink ${pinned ? "is-pinned" : ""}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
      aria-labelledby="process-title"
    >
      <div className="process__sticky">
        <div className="wrap process__head">
          <SectionLabel index="04" title="How we work" />
          <h2 id="process-title" className="h-display">
            <MaskLines lines={["From first call", <span key="l2">to <em>compounding</em> value.</span>]} />
          </h2>
          {pinned && (
            <div className="process__progress" aria-hidden>
              <motion.span style={{ scaleX: scrollYProgress }} />
            </div>
          )}
        </div>

        <motion.div ref={track} className="process__track" style={pinned ? { x } : undefined}>
          {processSteps.map((s) => (
            <article key={s.number} className="step">
              <div className="step__top">
                <span className="step__num">{s.number}</span>
                <span className="label">{s.duration}</span>
              </div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__body">{s.body}</p>
            </article>
          ))}
          <div className="step step--end">
            <p className="step__end-text">
              Thirteen weeks from kickoff to launch is typical. <em>Your mileage depends on ambition.</em>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
