type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);

export const ArrowUpRight = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>
);

export const ArrowLeft = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M20 12H5M11 6l-6 6 6 6" /></svg>
);

export const ArrowDown = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 4v15M6 13l6 6 6-6" /></svg>
);

export const ArrowUp = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 20V5M6 11l6-6 6 6" /></svg>
);

export const Plus = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 5v14M5 12h14" /></svg>
);

export const Check = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);

export const Copy = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="9" y="9" width="11" height="11" rx="1.5" /><path d="M15 9V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15H9" /></svg>
);

export const Grid = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></svg>
);

export const List = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);

export const Asterisk = ({ size = 18, className }: IconProps) => (
  <svg {...base(size)} className={className}><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" /></svg>
);
