"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { EASE } from "./hooks";

type Frame = { src: string; alt: string; caption: string; position?: string };

/**
 * Editorial photo spread: two framed images drifting at different parallax depths
 * with a pull quote between them. Monochrome by default, colour on hover.
 */
export function StudioFrames({ frames, quote, cite }: { frames: [Frame, Frame]; quote: ReactNode; cite: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["24%", "-24%"]);
  const yQ = useTransform(scrollYProgress, [0, 1], ["40%", "-30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <div ref={ref} className="frames">
      {frames.map((f, i) => (
        <motion.figure
          key={f.src}
          className={`frame frame--${i ? "b" : "a"}`}
          style={reduce ? undefined : { y: i ? yB : yA }}
        >
          <motion.div
            className="frame__media"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.4, ease: EASE, delay: i * 0.15 }}
          >
            <motion.div className="frame__img" style={reduce ? undefined : { scale: imgScale }}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectPosition: f.position }} />
            </motion.div>
          </motion.div>
          <figcaption>
            <span className="label">Fig. 0{i + 1}</span>
            <span className="label">{f.caption}</span>
          </figcaption>
        </motion.figure>
      ))}
      <motion.blockquote className="frames__quote" style={reduce ? undefined : { y: yQ }}>
        <p>{quote}</p>
        <cite className="label">— {cite}</cite>
      </motion.blockquote>
    </div>
  );
}
