import Link from "next/link";
import type { ReactNode } from "react";
import { contact } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import { Magnetic } from "./Magnetic";
import { MaskLines } from "./Reveal";

export function CtaSection({
  lines = ["Have something", <span key="l2">worth <em>building?</em></span>],
  href = "/contact/",
}: {
  lines?: ReactNode[];
  href?: string;
}) {
  return (
    <section className="cta theme-signal" aria-labelledby="cta-title">
      <div className="wrap cta__grid">
        <p className="label cta__kicker">(Next step) — Let&apos;s talk</p>
        <h2 id="cta-title" className="cta__title">
          <MaskLines lines={lines} />
        </h2>
        <div className="cta__side">
          <p>
            Tell us where you&apos;re headed. Within one business day you&apos;ll get honest thoughts on
            scope, timeline and the smartest first step.
          </p>
          <a href={`mailto:${contact.email}`} className="cta__mail link-u">{contact.email}</a>
        </div>
        <Magnetic className="cta__orb-wrap" strength={0.25}>
          <Link href={href} className="orb" aria-label="Start a project">
            <svg className="orb__ring" viewBox="0 0 200 200" aria-hidden>
              <defs>
                <path id="orb-path" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text>
                <textPath href="#orb-path" textLength="500">START A PROJECT ✳ START A PROJECT ✳ </textPath>
              </text>
            </svg>
            <span className="orb__arrow"><ArrowUpRight size={34} /></span>
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
