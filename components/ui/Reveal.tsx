"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "./hooks";

type RevealProps = { children: ReactNode; delay?: number; y?: number; className?: string };

export function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type MaskLinesProps = {
  lines: ReactNode[];
  trigger?: "mount" | "view";
  delay?: number;
  stagger?: number;
};

/**
 * Lines slide up from behind a mask. Wrap in your own heading element.
 * "mount" uses a CSS animation so above-the-fold headlines paint before hydration.
 */
export function MaskLines({ lines, trigger = "view", delay = 0, stagger = 0.09 }: MaskLinesProps) {
  return (
    <>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          {trigger === "mount" ? (
            <span className="mask-line__inner mask-line__inner--css" style={{ animationDelay: `${delay + i * stagger}s` }}>
              {line}
            </span>
          ) : (
            <motion.span
              className="mask-line__inner"
              initial={{ y: "108%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.1, ease: EASE, delay: delay + i * stagger }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </>
  );
}
