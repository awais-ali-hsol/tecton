"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type KeyboardEvent } from "react";
import { EASE } from "@/components/ui/hooks";

export function Timeline({ items }: { items: { year: string; event: string }[] }) {
  const [active, setActive] = useState(items.length - 1);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="timeline">
      <div className="timeline__years" role="tablist" aria-label="Studio milestones" onKeyDown={onKey}>
        {items.map((m, i) => (
          <button
            key={m.year}
            ref={(el) => { tabs.current[i] = el; }}
            type="button"
            role="tab"
            id={`tl-tab-${m.year}`}
            aria-selected={i === active}
            aria-controls="tl-panel"
            tabIndex={i === active ? 0 : -1}
            className="timeline__year"
            onClick={() => setActive(i)}
            onPointerEnter={() => setActive(i)}
          >
            {m.year}
          </button>
        ))}
      </div>
      <div className="timeline__panel" id="tl-panel" role="tabpanel" aria-labelledby={`tl-tab-${items[active].year}`}>
        <div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={active}
              className="timeline__event"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              {items[active].event}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
