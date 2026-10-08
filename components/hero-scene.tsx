"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Line } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const SERVICES = [
  { name: "Web", slug: "web-mobile", color: "#22D3EE", detail: "Fast, SEO-ready websites & web apps" },
  { name: "Mobile", slug: "web-mobile", color: "#3B82F6", detail: "Native & cross-platform iOS/Android apps" },
  { name: "AI", slug: "ai-automation", color: "#8B5CF6", detail: "AI agents, automation & smart features" },
  { name: "SaaS", slug: "saas-platforms", color: "#3B82F6", detail: "Scalable SaaS platforms built to grow" },
  { name: "Cloud", slug: "cloud-devops", color: "#22D3EE", detail: "Secure cloud infrastructure & DevOps" },
];
// Keep all five stations in clear lanes around the card and away from the corner badges.
const ORBIT_ANCHORS: [number, number][] = [[3, 0], [0, 3.2], [-3, 0], [0, -3.2], [-2.45, 2.15]];

/** Fine luminous links and a few low-cost particles flow toward the core. */
export function DataStreams({ count = 9 }: { count?: number }) {
  const particles = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!particles.current) return;
    const phase = (clock.elapsedTime * .38) % 1;
    particles.current.children.forEach((particle, index) => {
      const [x, y] = ORBIT_ANCHORS[index % ORBIT_ANCHORS.length];
      const start = new THREE.Vector3(x, y, .12);
      const point = start.multiplyScalar(1 - (phase + Math.floor(index / ORBIT_ANCHORS.length) * .35) % 1);
      particle.position.copy(point);
      particle.scale.setScalar(.65 + Math.sin(clock.elapsedTime * 5 + index) * .25);
    });
  });
  return <group>
    {SERVICES.map((service, index) => {
      const [x, y] = ORBIT_ANCHORS[index];
      const start = [x, y, .12] as [number, number, number];
      return <Line key={service.name} points={[start, [0, 0, 0]]} color={service.color} transparent opacity={.24} lineWidth={1} />;
    })}
    <group ref={particles}>{Array.from({ length: count }, (_, index) => <mesh key={index}><sphereGeometry args={[.025, 7, 7]} /><meshBasicMaterial color={index % 2 ? "#22D3EE" : "#8B5CF6"} transparent opacity={.82} /></mesh>)}</group>
  </group>;
}

function SceneContent({ mobile }: { mobile: boolean }) {
  const root = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((_, delta) => {
    if (root.current) {
      root.current.position.y = 0;
      root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, pointer.x * .14, 3.5, delta);
      root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, -pointer.y * .12, 3.5, delta);
    }
  });
  return <group ref={root}>
    <ambientLight intensity={1.6} /><directionalLight position={[4, 5, 6]} intensity={2.3} color="#f4fbff" />
    <pointLight position={[-3, 2, 3]} intensity={1.6} color="#22D3EE" /><pointLight position={[3, -2, -2]} intensity={1.2} color="#8B5CF6" />
    <DataStreams count={mobile ? 4 : 9} />
    <EffectComposer multisampling={0}><Bloom intensity={.32} luminanceThreshold={.78} luminanceSmoothing={.32} mipmapBlur /></EffectComposer>
  </group>;
}

export function Scene() {
  const [running, setRunning] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [cameraDistance, setCameraDistance] = useState(8.5);

  useEffect(() => {
    const target = stage.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting && !document.hidden), { threshold: .05 });
    observer.observe(target);
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (height > 0) setCameraDistance(Math.max(9.2, 9.2 / (.764 * (width / height))));
    });
    resizeObserver.observe(target);
    const visibility = () => setRunning(!document.hidden && target.getBoundingClientRect().bottom > 0 && target.getBoundingClientRect().top < window.innerHeight);
    document.addEventListener("visibilitychange", visibility);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 800px)");
    const updateMotion = () => setPrefersReducedMotion(preference.matches);
    const updateSize = () => setMobile(smallScreen.matches);
    updateMotion();
    updateSize();
    preference.addEventListener("change", updateMotion);
    smallScreen.addEventListener("change", updateSize);
    return () => { observer.disconnect(); resizeObserver.disconnect(); document.removeEventListener("visibilitychange", visibility); preference.removeEventListener("change", updateMotion); smallScreen.removeEventListener("change", updateSize); };
  }, []);

  return <div className="hero-canvas" ref={stage} aria-hidden="true">
    {running && !prefersReducedMotion && <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, cameraDistance], fov: 42 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} frameloop="always"><SceneContent mobile={mobile} /></Canvas>}
  </div>;
}
