"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useFinePointer } from "./hooks";

export function Magnetic({ children, strength = 0.3, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 220, damping: 16, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className ?? ""}`}
      style={active ? { x: sx, y: sy } : undefined}
      onPointerMove={(e) => {
        if (!active || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
