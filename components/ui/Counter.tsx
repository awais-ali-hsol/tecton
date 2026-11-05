"use client";

import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";

/**
 * Odometer-style counter: each digit column rolls into place when scrolled into view.
 * The rolling digits are CSS generated content (see .odo__strip in globals.css), so the
 * page text holds the final value once — "10+", not "10+0123456789…".
 */
export function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const value = to.toFixed(decimals);
  let column = 0;

  return (
    <span ref={ref} className="odo" data-on={inView}>
      {value.split("").map((char, i) =>
        /\d/.test(char) ? (
          <span key={i} className="odo__col" style={{ "--d": 10 + Number(char), "--i": column++ } as CSSProperties}>
            <span className="odo__sizer">{char}</span>
            <span className="odo__strip" aria-hidden />
          </span>
        ) : (
          <span key={i} className="odo__char">{char}</span>
        ),
      )}
      {suffix && <span className="odo__suffix">{suffix}</span>}
    </span>
  );
}
