import type { CSSProperties, ReactNode } from "react";

export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
  label,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  label?: string;
}) {
  const style = { "--marquee-dur": `${duration}s` } as CSSProperties;
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""} ${className ?? ""}`} style={style} aria-label={label} role={label ? "region" : undefined}>
      <div className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
