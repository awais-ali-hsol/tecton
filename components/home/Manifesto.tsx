"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/ui/Counter";
import { StudioFrames } from "@/components/ui/StudioFrames";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STATEMENT =
  "Tecton is an independent product studio. For over a decade we've partnered with founders and operators to design, engineer and ship software people *rely* on — not demos, but systems that *hold* *weight* as the business grows.";

const STATS = [
  { to: 10, suffix: "+", label: "Years building products" },
  { to: 120, suffix: "+", label: "Launches shipped" },
  { to: 98, suffix: "%", label: "Clients who return" },
  { to: 4.9, decimals: 1, suffix: "/5", label: "Average Clutch rating" },
];

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

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = STATEMENT.split(" ");

  return (
    <section className="manifesto theme-bone" id="studio" aria-label="About the studio">
      <div className="wrap">
        <div className="manifesto__grid">
          <SectionLabel index="01" title="The studio" />
          <p ref={ref} className="manifesto__text">
            {reduce
              ? words.map((w, i) => (
                  <span key={i}>{w.startsWith("*") ? <em>{w.replace(/\*/g, "")}</em> : w} </span>
                ))
              : words.map((w, i) => (
                  <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
                ))}
          </p>
        </div>

        <dl className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <dt className="label">{s.label}</dt>
              <dd className="stat__num">
                <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
        <StudioFrames
          frames={[
            { src: "/assets/imgi_13_bg5.webp", alt: "Tecton designers and engineers mapping a product flow during a discovery workshop", caption: "Discovery workshop, NYC", position: "50% 30%" },
            { src: "/assets/imgi_78_Big-1.webp", alt: "The Tecton team reviewing a build together around a laptop", caption: "Weekly product review", position: "42% 40%" },
          ]}
          quote={<>We don&apos;t hand projects off. We build <em>alongside</em> you — in the room, on the call, in the code.</>}
          cite="Alex Morgan, Co-founder"
        />
      </div>
    </section>
  );
}
