import type { CSSProperties } from "react";

interface LogoProps {
  width?: number;
  className?: string;
  style?: CSSProperties;
}

/** T mark: three overlapping parallelogram ribbons, shared by Logo and LogoMark. */
function MarkShapes() {
  return (
    <>
      {/* ── T mark: three overlapping parallelogram ribbons ── */}
      {/* Ribbon 1 – wide crossbar, spans full mark width */}
      <polygon points="0,16 42,2 42,13 0,27" fill="#F04A24" />
      {/* Ribbon 2 – left stem, starts inside crossbar */}
      <polygon points="10,17 22,11 22,48 10,48" fill="#F04A24" />
      {/* Ribbon 3 – right stem, overlaps ribbon 2 */}
      <polygon points="20,11 31,6 31,48 20,48" fill="#F04A24" />
    </>
  );
}

/** The T mark on its own, cropped to its bounds. Sized by the caller via CSS. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 2 42 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <MarkShapes />
    </svg>
  );
}

/**
 * Tecton Solutions logo — 3-ribbon T mark + TECTON / SOLUTIONS wordmark.
 * Brand colors: Burnt Orange #F04A24 (mark), currentColor (wordmark).
 */
export function Logo({ width = 148, className, style }: LogoProps) {
  const height = Math.round(width * (48 / 148));
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label="Tecton Solutions"
    >
      <MarkShapes />

      {/* ── Wordmark ── */}
      <text
        x="50" y="27"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.015em"
        fill="currentColor"
        style={{ fontFamily: "var(--ff-sans, 'Inter Tight', sans-serif)" }}
      >
        TECTON
      </text>
      <text
        x="51" y="38"
        fontSize="8.5"
        fontWeight="500"
        letterSpacing="0.15em"
        fill="currentColor"
        fillOpacity="0.6"
        style={{ fontFamily: "var(--ff-sans, 'Inter Tight', sans-serif)" }}
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
