"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STATEMENT =
  "Tecton is an independent software studio in Lahore, founded in 2025 by engineers with ten-plus years of combined experience. We partner with founders and operators to design, engineer and ship software people *rely* on — not demos, but systems that *hold* *weight* as the business grows.";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  const emphasised = word.startsWith("*");
  const text = word.replace(/\*/g, "");
  return (
    <>
      <motion.span style={{ opacity }}>{emphasised ? <em>{text}</em> : text}</motion.span>{" "}
    </>
  );
}

const STATS = [
  // Keep these in step with the About page stats and the Organization schema.
  { to: 10, suffix: "+", label: "Years of combined experience" },
  { to: 50, suffix: "+", label: "Products launched" },
  { to: 10, suffix: "", label: "Designers & engineers" },
  { to: 4, suffix: "", label: "Countries served" },
];

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = STATEMENT.split(" ");

  return (
    <section className="manifesto theme-bone" id="studio" aria-label="About the studio">
      <div className="wrap">
        <div className="manifesto__grid">
          <SectionLabel index="00" title="Studio" />
        </div>
        <p ref={ref} className="manifesto__text">
          {reduce
            ? words.map((w, i) => (
                <span key={i}>{w.startsWith("*") ? <em>{w.replace(/\*/g, "")}</em> : w} </span>
              ))
            : words.map((w, i) => (
                <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
              ))}
        </p>

        <dl className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <dt className="label">{s.label}</dt>
              <dd className="stat__num">
                <Counter to={s.to} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
