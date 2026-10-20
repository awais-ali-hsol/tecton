import Image from "next/image";
import { projects } from "@/lib/data";
import { Marquee } from "@/components/ui/Marquee";

const half = Math.ceil(projects.length / 2);
const rows = [projects.slice(0, half), projects.slice(half)];

/** Tilted two-row filmstrip of every project — decorative, the real index sits below. */
export function WorkReel() {
  return (
    <div className="wreel" aria-hidden>
      <div className="wreel__tilt">
        {rows.map((row, r) => (
          <Marquee key={r} duration={r ? 70 : 60} reverse={r === 1} className="wreel__row">
            {row.map((p) => (
              <figure key={p.title} className="wreel__item" style={{ background: p.stage.bg }}>
                <div className="wreel__shot">
                  <Image src={p.image} alt="" fill sizes="360px" />
                </div>
                <figcaption data-tone={p.stage.tone}>
                  <span>{p.title}</span>
                  <span>{p.year}</span>
                </figcaption>
              </figure>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
}
