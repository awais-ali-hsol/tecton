import type { ReactNode } from "react";
import { MaskLines } from "./Reveal";

export function PageHero({
  kicker,
  meta,
  lines,
  intro,
  children,
}: {
  kicker: string;
  meta?: string;
  lines: ReactNode[];
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="phero theme-ink">
      <Gridlines />
      <div className="wrap phero__inner">
        <div className="phero__meta">
          <span className="label">{kicker}</span>
          {meta && <span className="label">{meta}</span>}
        </div>
        <h1 className="phero__title">
          <MaskLines trigger="mount" delay={0.1} lines={lines} />
        </h1>
        {intro && (
          <div className="phero__intro fade-up" style={{ animationDelay: "0.4s" }}>
            {intro}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Gridlines() {
  return (
    <div className="gridlines" aria-hidden>
      <div className="wrap gridlines__inner">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i} style={{ animationDelay: `${i * 80}ms` }} />
        ))}
      </div>
    </div>
  );
}
