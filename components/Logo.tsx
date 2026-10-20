import type { CSSProperties } from "react";

interface LogoProps {
  width?: number;
  className?: string;
  style?: CSSProperties;
}

/** Wordmark inherits currentColor; the inner plate uses the brand signal color. */
export function Logo({ width = 148, className, style }: LogoProps) {
  const height = Math.round(width * (36 / 148));
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label="Tecton Solutions"
    >
      <polygon points="29,18 22.5,6.7 9.5,6.7 3,18 9.5,29.3 22.5,29.3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="21.5,14.2 16,11 10.5,14.2 10.5,20.6 16,23.8 21.5,20.6" style={{ fill: "var(--signal, #FF4F1F)" }} />
      <text x="40" y="23.5" fontSize="17" fontWeight="600" letterSpacing="-0.02em" fill="currentColor" style={{ fontFamily: "var(--sans)" }}>
        Tecton
      </text>
      <text x="98" y="23.5" fontSize="9" letterSpacing="0.08em" fill="currentColor" opacity="0.55" style={{ fontFamily: "var(--mono)" }}>
        ®
      </text>
    </svg>
  );
}
