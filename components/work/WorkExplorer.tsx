"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion, useMotionValue, useReducedMotion, useSpring, type MotionValue } from "framer-motion";
import { useMemo, useState, useSyncExternalStore, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { projects, type ProjectKind } from "@/lib/data";
import { ArrowUpRight, Grid, List } from "@/components/ui/icons";
import { EASE, useFinePointer } from "@/components/ui/hooks";

type Project = (typeof projects)[number];
type Filter = "All" | ProjectKind;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "All", label: "All" },
  { value: "Web", label: "Websites" },
  { value: "SaaS", label: "Platforms & SaaS" },
  { value: "Mobile", label: "Mobile" },
  { value: "Commerce", label: "Commerce" },
];

const pad = (n: number) => String(n).padStart(2, "0");
const noopSubscribe = () => () => {};

type Sort = "featured" | "newest" | "oldest";
const SORTS: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
];

export function WorkExplorer({
  defaultView = "list",
  allowViewToggle = false,
  allowSort = false,
}: {
  defaultView?: "list" | "grid";
  allowViewToggle?: boolean;
  allowSort?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState(defaultView);
  const [sort, setSort] = useState<Sort>("featured");
  const items = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.kind === filter);
    if (sort === "featured") return list;
    const dir = sort === "newest" ? -1 : 1;
    return [...list].sort((a, b) => dir * (Number(a.year) - Number(b.year)));
  }, [filter, sort]);
  const count = (f: Filter) => (f === "All" ? projects.length : projects.filter((p) => p.kind === f).length);

  return (
    <div className="wx">
      <div className="wx__bar">
        <LayoutGroup id="work-filters">
          <div className="chips" role="group" aria-label="Filter projects by type">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className="chip"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
              >
                {filter === f.value && (
                  <motion.span layoutId="chip-active" className="chip__bg" transition={{ duration: 0.5, ease: EASE }} />
                )}
                <span className="chip__text">{f.label}</span>
                <sup className="chip__count">{pad(count(f.value))}</sup>
              </button>
            ))}
          </div>
        </LayoutGroup>
        <div className="wx__tools">
          {allowSort && (
            <div className="seg" role="group" aria-label="Sort projects">
              <span className="label">Sort</span>
              {SORTS.map((s) => (
                <button key={s.value} type="button" aria-pressed={sort === s.value} onClick={() => setSort(s.value)}>
                  {s.label}
                </button>
              ))}
            </div>
          )}
          {allowViewToggle && (
            <div className="viewtoggle" role="group" aria-label="Layout">
              <button type="button" aria-pressed={view === "grid"} onClick={() => setView("grid")} aria-label="Grid view"><Grid size={16} /></button>
              <button type="button" aria-pressed={view === "list"} onClick={() => setView("list")} aria-label="List view"><List size={16} /></button>
            </div>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{items.length} projects shown</p>
      {view === "list" ? <WorkList items={items} /> : <WorkGrid items={items} />}
    </div>
  );
}

function WorkList({ items }: { items: Project[] }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const showPreview = fine && !reduce;
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  return (
    <>
      <ul
        className="wlist"
        onPointerMove={(e) => {
          x.set(e.clientX);
          y.set(e.clientY);
        }}
        onPointerLeave={() => setHovering(false)}
      >
        <AnimatePresence initial={false}>
          {items.map((p, i) => (
            <motion.li
              key={p.title}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wrow"
                onPointerEnter={() => {
                  setActive(i);
                  setHovering(true);
                }}
                onFocus={() => setActive(i)}
              >
                <span className="wrow__idx label">{pad(i + 1)}</span>
                <span className="wrow__title">{p.title}</span>
                <span className="wrow__cat">{p.category}</span>
                <span className="wrow__year label">{p.year}</span>
                <span className="wrow__arrow" aria-hidden><ArrowUpRight size={22} /></span>
                <span className="wrow__thumb" aria-hidden>
                  <Image src={p.image} alt="" fill sizes="(max-width: 768px) 100vw, 1px" />
                </span>
                <span className="sr-only">(opens live site in a new tab)</span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {showPreview && (
        <Preview items={items} active={active} visible={hovering} x={sx} y={sy} />
      )}
    </>
  );
}

function Preview({
  items,
  active,
  visible,
  x,
  y,
}: {
  items: Project[];
  active: number;
  visible: boolean;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) {
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  if (!mounted) return null;
  return createPortal(
    <motion.div
      className="wpreview"
      style={{ x, y }}
      initial={false}
      animate={{ scale: visible ? 1 : 0.4, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      aria-hidden
    >
      <motion.div className="wpreview__strip" animate={{ y: `${-active * 100}%` }} transition={{ duration: 0.75, ease: EASE }}>
        {items.map((p) => (
          <div className="wpreview__item" key={p.title}>
            <Image src={p.image} alt="" fill sizes="380px" />
          </div>
        ))}
      </motion.div>
      <span className="wpreview__chip">View live <ArrowUpRight size={14} /></span>
    </motion.div>,
    document.body,
  );
}

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

function WorkGrid({ items }: { items: Project[] }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 32, mass: 0.4 });

  return (
    <>
      <div
        className={`wgrid ${fine ? "has-cursor" : ""}`}
        onPointerMove={(e) => {
          x.set(e.clientX);
          y.set(e.clientY);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              className={`wcard wcard--${i % 4}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <GridCard project={p} index={i} tilt={fine && !reduce} onHover={setHovering} />
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
      {fine && <ViewCursor x={reduce ? x : sx} y={reduce ? y : sy} visible={hovering} />}
    </>
  );
}

function GridCard({
  project: p,
  index,
  tilt,
  onHover,
}: {
  project: Project;
  index: number;
  tilt: boolean;
  onHover: (v: boolean) => void;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tiltX = useSpring(rx, { stiffness: 150, damping: 18 });
  const tiltY = useSpring(ry, { stiffness: 150, damping: 18 });

  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="wcard__link">
      <div
        className="wcard__stage"
        data-tone={p.stage.tone}
        style={{ "--stage-bg": p.stage.bg } as CSSProperties}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => {
          onHover(false);
          rx.set(0);
          ry.set(0);
        }}
        onPointerMove={(e) => {
          if (!tilt) return;
          const r = e.currentTarget.getBoundingClientRect();
          ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
          rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
        }}
      >
        <span className="wcard__idx" aria-hidden>{pad(index + 1)}</span>
        <span className="wcard__kind label">{p.kind === "SaaS" ? "Platform" : p.kind}</span>
        <motion.div className="wcard__browser" style={tilt ? { rotateX: tiltX, rotateY: tiltY } : undefined}>
          <div className="browser__bar">
            <span className="browser__dots"><i /><i /><i /></span>
            <span className="browser__url">{host(p.url)}</span>
          </div>
          <div className="browser__screen">
            <Image src={p.image} alt={`${p.title} — ${p.description}`} fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </motion.div>
        {!tilt && <span className="wcard__chip">View live <ArrowUpRight size={14} /></span>}
      </div>
      <div className="wcard__meta">
        <span className="label">{pad(index + 1)} — {p.category}</span>
        <span className="label">{p.year}</span>
      </div>
      <h3 className="wcard__title">
        {p.title}
        <ArrowUpRight size={26} className="wcard__arrow" />
      </h3>
      <p className="wcard__desc">{p.description}</p>
      <ul className="tags">
        {p.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <span className="sr-only">(opens live site in a new tab)</span>
    </a>
  );
}

function ViewCursor({
  x,
  y,
  visible,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  visible: boolean;
}) {
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  if (!mounted) return null;
  return createPortal(
    <motion.div
      className="vcursor"
      style={{ x, y }}
      initial={false}
      animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      aria-hidden
    >
      View <ArrowUpRight size={14} />
    </motion.div>,
    document.body,
  );
}
