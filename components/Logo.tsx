import type { CSSProperties } from "react";

interface LogoProps {
  width?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Inline SVG logo — currentColor for text/icon adapts to dark/light theme,
 * lime #D9F45F accent is hardcoded so it always shows without CSS filters.
 */
export function Logo({ width = 160, className, style }: LogoProps) {
  const height = Math.round(width * (42 / 160));
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Tecton Solutions"
      role="img"
    >
      {/* Outer hexagon — inherits currentColor from CSS */}
      <polygon
        points="33,18 25.5,5 10.5,5 3,18 10.5,31 25.5,31"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Lime accent inner hex — always visible in both themes */}
      <polygon points="25,14 18,10 11,14 11,22 18,26 25,22" fill="#D9F45F" />
      {/* TECTON */}
      <text
        x="44"
        y="23"
        fontSize="17"
        fontWeight="700"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        letterSpacing="0.08em"
        fill="currentColor"
      >
        TECTON
      </text>
      {/* SOLUTIONS */}
      <text
        x="45"
        y="34"
        fontSize="8"
        fontWeight="600"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        letterSpacing="0.26em"
        fill="currentColor"
        opacity="0.5"
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
