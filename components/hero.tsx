"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight, BrainCircuit, CloudUpload, Code2, PanelsTopLeft, Smartphone, Sparkles } from "lucide-react";
import Link from "next/link";

const tech = [
  { name: "Web", slug: "web-mobile", description: "Fast, SEO-ready websites & web apps", icon: Code2, color: "#22D3EE" },
  { name: "Mobile", slug: "web-mobile", description: "Native & cross-platform iOS/Android apps", icon: Smartphone, color: "#3B82F6" },
  { name: "AI", slug: "ai-automation", description: "AI agents, automation & smart features", icon: BrainCircuit, color: "#8B5CF6" },
  { name: "SaaS", slug: "saas-platforms", description: "Scalable SaaS platforms built to grow", icon: PanelsTopLeft, color: "#3B82F6" },
  { name: "Cloud", slug: "cloud-devops", description: "Secure cloud infrastructure & DevOps", icon: CloudUpload, color: "#22D3EE" },
];

const Scene = dynamic(() => import("./hero-scene").then((module) => module.Scene), {
  ssr: false,
  loading: () => null,
});

function useCountUp(target: number, duration = 1.5) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => (target % 1 ? latest.toFixed(1) : Math.round(latest).toLocaleString()));
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      value.set(target);
      return;
    }
    const controls = animate(value, target, { duration, ease: "easeOut", delay: 0.55 });
    return controls.stop;
  }, [duration, target, value]);
  return rounded;
}

function Metric({ target, suffix = "", label, note }: { target: number; suffix?: string; label: string; note: string }) {
  const value = useCountUp(target);
  return <div className="tecton-metric"><span>{label}</span><b><motion.span>{value}</motion.span>{suffix}</b><small>{note}</small></div>;
}

export default function Hero() {
  const [activeTech, setActiveTech] = useState<number | null>(null);
  const [pausedSpotlight, setPausedSpotlight] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const active = activeTech ?? 0;
  const activeItem = tech[active];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setSceneReady(true), 650);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (pausedSpotlight || reducedMotion) return;
    const timer = window.setInterval(() => setActiveTech((current) => ((current ?? 0) + 1) % tech.length), 3600);
    return () => window.clearInterval(timer);
  }, [pausedSpotlight, reducedMotion]);

  const selectTech = (index: number) => {
    setActiveTech(index);
    setPausedSpotlight(true);
    setShowTooltip(true);
  };

  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-grid" /><div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="container hero-layout">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}>BUILDING THE FUTURE WITH TECHNOLOGY</motion.div>
        <motion.h1 id="hero-title" initial={reducedMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .28, ease: [.22, 1, .36, 1] }}>Turning ideas into<br /><em>real solutions.</em></motion.h1>
        <motion.p initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .48 }}>We design and build modern digital products that help businesses innovate, automate, and scale.</motion.p>
        <motion.div className="hero-actions" initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .64 }}><a className="button button-gradient" href="#contact">Start a project <ArrowUpRight size={17} /></a></motion.div>
        <motion.div className="trust-line" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .82 }} aria-label="Explore our services">
          {tech.map((item, index) => <span className="trust-item-wrap" key={item.name}><Link className={`trust-item${activeTech === index ? " is-active" : ""}`} href={`/services/${item.slug}`} onMouseEnter={() => selectTech(index)} onFocus={() => selectTech(index)} onClick={() => selectTech(index)}>{item.name}</Link>{index < tech.length - 1 && <i aria-hidden="true" />}</span>)}
        </motion.div>
      </div>

      <div className="hero-visual" onPointerMove={() => setPausedSpotlight(true)}>
        <div className="hero-scene-placeholder" aria-hidden="true" />
        {sceneReady && !reducedMotion && <Scene />}
        <motion.div className="floating-chip chip-one" animate={reducedMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}><Sparkles size={15} /> AI / AUTOMATION</motion.div>
        <motion.div className="floating-chip chip-two" animate={reducedMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}><span className="chip-pulse" /> SYSTEMS ONLINE</motion.div>
        <div className="hero-service-icons" role="group" aria-label="Explore Tecton services">
          {tech.map((item, index) => {
            const Icon = item.icon;
            return <Link key={item.name} className={`hero-service-link service-node-${index}${activeTech === index ? " is-active" : ""}`} style={{ "--node-color": item.color } as React.CSSProperties} href={`/services/${item.slug}`} aria-label={`${item.name}: ${item.description}`} onMouseEnter={() => selectTech(index)} onFocus={() => selectTech(index)} onClick={() => selectTech(index)}>
              <span className="hero-service-upright"><span className="hero-service-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span><span className="hero-service-name">{item.name}</span></span>
            </Link>;
          })}
        </div>
        <div className="dashboard-card-anchor"><motion.div className="tecton-glass-card" initial={reducedMotion ? false : { opacity: 0, y: 24, rotateY: -8, rotateX: 5 }} animate={{ opacity: 1, y: 0, rotateY: -8, rotateX: 5 }} transition={{ duration: .8, delay: .72, ease: [.22, 1, .36, 1] }}>
          <div className="grid-card-top"><span>TECTON / {activeItem.name.toUpperCase()}</span><span className="live-dot">LIVE</span></div>
          <div className="grid-stats"><Metric target={24} suffix="+" label="Innovate" note="ideas" /><Metric target={340} suffix="+" label="Automate" note="flows" /><Metric target={3.2} suffix="x" label="Scale" note="growth" /></div>
          <div className="grid-card-chart"><div className="chart-bars" aria-hidden="true">{[42, 64, 50, 80, 58, 72].map((height, index) => <motion.i key={height} initial={reducedMotion ? false : { height: "0%" }} animate={{ height: `${Math.min(height + (active === index % tech.length ? 18 : 0), 96)}%` }} transition={{ duration: reducedMotion ? 0 : .75, delay: reducedMotion ? 0 : .9 + index * .08, ease: "easeOut" }} />)}</div><div className="chart-footer"><span>IDEAS SHIPPED</span><b>128 <small>↑ 18.4%</small></b></div></div>
        </motion.div></div>
        {showTooltip && <div className="hero-tech-tooltip" aria-live="polite"><span>{activeItem.name}</span><p>{activeItem.description}</p></div>}
      </div>
    </div>
  </section>;
}
