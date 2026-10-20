import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";
import { Magnetic } from "./Magnetic";

type Variant = "signal" | "light" | "ink" | "ghost";

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode | false;
  magnetic?: boolean;
  className?: string;
};

type LinkProps = Common & { href: string; external?: boolean };
type ButtonProps = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-busy"?: boolean;
};

export function Button(props: LinkProps | ButtonProps) {
  const { children, variant = "signal", size = "md", icon, magnetic, className } = props;
  const text = typeof children === "string" ? children : undefined;
  const cls = `btn btn--${variant} btn--${size} ${className ?? ""}`;
  const inner = (
    <>
      <span className="btn__label">
        <span data-text={text}>{children}</span>
      </span>
      {icon !== false && <span className="btn__icon" aria-hidden>{icon ?? <ArrowRight size={18} />}</span>}
    </>
  );

  let el: ReactNode;
  if (props.href !== undefined) {
    el = props.external ? (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
    ) : (
      <Link href={props.href} className={cls}>{inner}</Link>
    );
  } else {
    el = (
      <button
        type={props.type ?? "button"}
        onClick={props.onClick}
        disabled={props.disabled}
        aria-busy={props["aria-busy"]}
        className={cls}
      >
        {inner}
      </button>
    );
  }
  return magnetic ? <Magnetic>{el}</Magnetic> : el;
}
