import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Braces, Check, Cloud, CloudCog, Code2, Gauge, Layers3, Palette, Server, ShoppingBag, Sparkles, Workflow } from "lucide-react";
import { serviceDetails, services } from "@/lib/data";

const iconMap = { brackets: Braces, layers: Layers3, sparkles: Sparkles, cloud: Cloud, server: Server, shopping: ShoppingBag, palette: Palette, cloudCog: CloudCog, workflow: Workflow, gauge: Gauge };

function ServiceLogo({ light = false }: { light?: boolean }) {
  return <Image className="service-logo-image" src={light ? "/tecton-logo-dark.svg" : "/tecton-logo.svg"} alt="Tecton Solutions" width={210} height={72} priority />;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service | Tecton Solutions" };
  return {
    title: `${service.title} | Tecton Solutions`,
    description: service.description,
    openGraph: { title: `${service.title} | Tecton Solutions`, description: service.description, type: "website" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return <div className="service-not-found"><h1>Service not found</h1><Link href="/#services">Back to services</Link></div>;
  const detail = serviceDetails[service.slug]!;

  return <main className="service-page">
    <header className="service-nav"><Link href="/" className="service-logo"><ServiceLogo /><span className="sr-only">Tecton Solutions home</span></Link><Link className="service-nav-link" href="/#services"><ArrowLeft size={15} /> All services</Link></header>
    <section className="service-hero"><div className="service-hero-grid" /><div className="container service-hero-inner"><div className="service-hero-copy"><h1>{service.title}</h1><p>{service.detail}</p><div className="service-actions"><Link className="button button-dark" href="/#contact">Start a project <ArrowUpRight size={17} /></Link><Link className="button button-ghost" href="/#services">Explore other services <ArrowLeft size={15} /></Link></div></div><div className="service-visual"><div className="service-visual-core"><Code2 size={42} strokeWidth={1} /><span>{service.title.toUpperCase()}</span><small>TECTON / SOLUTIONS</small></div><div className="service-orbit service-orbit-one" /><div className="service-orbit service-orbit-two" /></div></div></section>
    <section className="service-content"><div className="container service-content-grid"><div><span className="eyebrow">What we do</span><h2>Technology with a<br /><span>clear purpose.</span></h2></div><div><p className="service-lead">{service.description}</p><p className="service-body">We bring the right mix of strategy, design and engineering to create something useful now and ready for what comes next.</p><div className="best-for"><strong>Best for</strong><span>{detail.bestFor}</span></div></div></div><div className="container service-capabilities"><span className="experience-label">Core capabilities</span><div className="capability-grid">{detail.capabilities.map((capability) => <div className="capability" key={capability}><span className="capability-check"><Check size={13} strokeWidth={2.5} /></span>{capability}</div>)}</div></div></section>
    <section className="service-experience"><div className="container"><div className="service-experience-heading"><div><h2>From first question<br /><span>to shipped product.</span></h2></div><p>Every engagement is shaped around the decisions, constraints and outcomes that matter to your team.</p></div><div className="experience-grid"><div><span className="experience-label">WHAT WE BRING</span>{detail.experience.map((item) => <div className="experience-item" key={item}><p>{item}</p></div>)}</div><div className="deliverables-panel"><span className="experience-label">TYPICAL DELIVERABLES</span>{detail.deliverables.map((item) => <div className="deliverable" key={item}><Check size={16} />{item}</div>)}<Link className="button button-dark" href="/#contact">Discuss your needs <ArrowUpRight size={16} /></Link></div></div></div></section>
    {/* <section className="service-stack"><div className="container service-stack-inner"><div><h2>Built with<br /><span>the right tools.</span></h2></div><div className="service-stack-list">{service.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section> */}
    <section className="service-next"><div className="container"><h2>More ways to<br /><span>move forward.</span></h2><div className="service-next-grid">{services.filter((item) => item.slug !== service.slug).slice(0, 3).map((item) => { const Icon = iconMap[item.icon as keyof typeof iconMap]; return <Link className="service-next-card" href={`/services/${item.slug}`} key={item.slug}><span className="service-next-top"><Icon size={20} strokeWidth={1.5} /></span><strong>{item.title}</strong><p>{item.description}</p><span className="service-next-arrow"><ArrowUpRight size={16} /></span></Link> })}</div><Link className="text-link" href="/#contact">Talk through your project <ArrowUpRight size={16} /></Link></div></section>
    <footer className="service-footer"><div className="container"><Link href="/" className="service-logo service-logo-light"><ServiceLogo light /><span className="sr-only">Tecton Solutions home</span></Link><span>© 2026 Tecton Solutions. Ideas / technology / real solutions.</span></div></footer>
  </main>;
}
