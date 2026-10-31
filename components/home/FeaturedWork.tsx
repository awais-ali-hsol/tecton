"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import { useFinePointer } from "@/components/ui/hooks";
import { MaskLines, Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkExplorer } from "@/components/work/WorkExplorer";

type Project = (typeof projects)[number];

const STAGES: { project: Project; bg: string; tone: "light" | "dark" }[] = [projects[0], projects[8], projects[2]].map(
  (project) => ({ project, ...project.stage }),
);

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function Stage({ project, bg, tone, index, total }: (typeof STAGES)[number] & { index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const isLast = index === total - 1;

  // As the next stage slides over this one, push this one back.
  const { scrollYProgress: leave } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(leave, [0, 1], [1, isLast ? 1 : 0.88]);
  const shade = useTransform(leave, [0, 1], [0, isLast ? 0 : 0.55]);

  // Browser frame rises into place as the stage enters.
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const rise = useTransform(enter, [0, 1], ["22%", "0%"]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tiltX = useSpring(rx, { stiffness: 140, damping: 18 });
  const tiltY = useSpring(ry, { stiffness: 140, damping: 18 });
  const tilt = fine && !reduce;

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (!tilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 9);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div ref={ref} className="stage" style={{ "--i": index } as CSSProperties}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="stage__card"
        data-tone={tone}
        style={{ "--stage-bg": bg, ...(reduce ? {} : { scale }) } as CSSProperties}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <span className="stage__num" aria-hidden>{String(index + 1).padStart(2, "0")}</span>

        <div className="stage__info">
          <div className="stage__top">
            <span className="label">Case {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
            <span className="label">{project.category} · {project.year}</span>
          </div>
          <h3 className="stage__title">{project.title}</h3>
          <p className="stage__desc">{project.detail}</p>
          <ul className="tags">{project.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <span className="stage__cta">
            Visit {host(project.url)} <ArrowUpRight size={16} />
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </div>

        <div className="stage__scene" aria-hidden>
          <motion.div
            className="browser"
            style={reduce ? undefined : { y: rise, rotateX: tiltX, rotateY: tiltY }}
          >
            <div className="browser__bar">
              <span className="browser__dots"><i /><i /><i /></span>
              <span className="browser__url">{host(project.url)}</span>
            </div>
            <div className="browser__screen">
              <Image src={project.image} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
          </motion.div>
        </div>

        {!reduce && <motion.span className="stage__shade" style={{ opacity: shade }} aria-hidden />}
      </motion.a>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section className="work theme-ink" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <header className="sec-head">
          <SectionLabel index="02" title="Selected work" />
          <h2 id="work-title" className="h-display">
            <MaskLines lines={["Products that", <span key="l2">earn their <em>keep.</em></span>]} />
          </h2>
          <Reveal className="sec-head__aside" delay={0.2}>
            <p>Ten launches across wellness, property, fintech, media and commerce — each one still live and doing its job.</p>
          </Reveal>
        </header>

        <div className="stack">
          {STAGES.map((s, i) => (
            <Stage key={s.project.title} {...s} index={i} total={STAGES.length} />
          ))}
        </div>

        <div className="work__index">
          <div className="work__index-head">
            <h3 className="label">Full index</h3>
          </div>
          <WorkExplorer />
        </div>

        <div className="work__more">
          <Button href="/work/" variant="ghost">Explore all projects</Button>
        </div>
      </div>
    </section>
  );
}
