"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects, services } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "@/components/ui/icons";
import { EASE } from "@/components/ui/hooks";
import { Marquee } from "@/components/ui/Marquee";
import { Gridlines } from "@/components/ui/PageHero";
import { MaskLines } from "@/components/ui/Reveal";

const reel = projects.slice(0, 6);
const REEL_MS = 3600;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const reelY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % reel.length), REEL_MS);
    return () => clearInterval(id);
  }, [reduce, paused]);
  const current = reel[index];

  return (
    <section ref={ref} className="hero theme-ink" aria-labelledby="hero-title">
      <Gridlines />
      <div className="hero__glow" aria-hidden />

      <div className="wrap hero__inner">
        <motion.h1
          id="hero-title"
          className="hero__title"
          style={reduce ? undefined : { y: titleY, opacity: titleOpacity }}
        >
          <MaskLines
            trigger="mount"
            delay={0.2}
            stagger={0.11}
            lines={["Software with", <em key="s">structural</em>, "integrity."]}
          />
        </motion.h1>

        <motion.div
          className="reel-wrap"
          style={reduce ? undefined : { y: reelY }}
          initial={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0, ease: EASE, delay: 0 }}
        >
          <Link
            href="/work/"
            className="reel"
            aria-label={`View all work — now showing ${current.title}`}
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="reel__frame">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.title}
                  className="reel__img"
                  initial={{ clipPath: "inset(0 0 0 100%)" }}
                  animate={{ clipPath: "inset(0 0 0 0%)" }}
                  exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.6 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <Image src={current.image} alt="" fill sizes="(max-width: 1024px) 90vw, 460px" priority={index === 0} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="reel__cap">
              <span className="label">Now showing</span>
              <span className="reel__title">{current.title}</span>
              <span className="label">{String(index + 1).padStart(2, "0")} / {String(reel.length).padStart(2, "0")}</span>
            </div>
            <div className="reel__bar" aria-hidden>
              <span key={`${index}-${paused}`} className="reel__progress" data-paused={paused || !!reduce} />
            </div>
          </Link>
        </motion.div>

        <div className="hero__foot">
          <div className="hero__intro fade-up" style={{ animationDelay: "0.75s" }}>
            <p>
              We design and engineer web platforms, mobile apps and AI-powered tools for companies
              that can&apos;t afford software that cracks under load.
            </p>
            <div className="hero__actions">
              <Button href="/contact/" magnetic>Start a project</Button>
              <a href="#work" className="link-arrow">
                Selected work <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Marquee className="hero__ticker" duration={55} label="Services">
        {services.map((s) => (
          <span className="ticker__item" key={s.slug}>
            {s.title}
            <span className="ticker__sep" aria-hidden>✳</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
