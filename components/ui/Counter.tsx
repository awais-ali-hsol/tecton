"use client";

import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

// Two full cycles so every digit visibly spins before landing in the second cycle.
const STRIP = Array.from({ length: 20 }, (_, i) => i % 10);

/** Odometer-style counter: each digit column rolls into place when scrolled into view. */
export function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const value = to.toFixed(decimals);
  let column = 0;

  return (
    <span ref={ref} className="odo" data-on={inView}>
      <span className="sr-only">{value}{suffix}</span>
      <span className="odo__visual" aria-hidden>
        {value.split("").map((char, i) =>
          /\d/.test(char) ? (
            <span key={i} className="odo__col" style={{ "--d": 10 + Number(char), "--i": column++ } as CSSProperties}>
              <span className="odo__sizer">{char}</span>
              <span className="odo__strip">
                {STRIP.map((d, k) => <span key={k}>{d}</span>)}
              </span>
            </span>
          ) : (
            <span key={i} className="odo__char">{char}</span>
          ),
        )}
        {suffix && <span className="odo__suffix">{suffix}</span>}
      </span>
    </span>
  );
}
