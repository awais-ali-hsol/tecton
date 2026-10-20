"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { contact } from "@/lib/data";
import { Check, Copy, Plus } from "@/components/ui/icons";
import { EASE, useLocalTime } from "@/components/ui/hooks";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };
  return (
    <button type="button" className="copy" onClick={copy}>
      <span className="link-u">{contact.email}</span>
      <span className="copy__icon" aria-hidden>{copied ? <Check size={14} /> : <Copy size={14} />}</span>
      <span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : "Copy email address"}</span>
    </button>
  );
}

export function StudioClock() {
  const time = useLocalTime(contact.timezone);
  const hour = time ? Number(time.slice(0, 2)) : null;
  const open = hour !== null && hour >= 9 && hour < 18;
  return (
    <span>
      {time ?? "--:--"} in New York{hour !== null && <span className="label"> · {open ? "studio open" : "studio closed — we'll reply first thing"}</span>}
    </span>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.q} className="faq__item">
            <h3>
              <button
                type="button"
                className="faq__q"
                aria-expanded={expanded}
                aria-controls={`faq-a-${i}`}
                id={`faq-q-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
              >
                {item.q}
                <span className="faq__icon" aria-hidden><Plus /></span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="faq__a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
