import { Hero } from "@/components/home/Hero";
import { Insights } from "@/components/home/Insights";
import { Manifesto } from "@/components/home/Manifesto";
import { Process } from "@/components/home/Process";
import { ServicesIndex } from "@/components/home/ServicesIndex";
import { CtaSection } from "@/components/ui/CtaSection";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export default function Site() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Manifesto />
        <ServicesIndex />
        <Process />
        <Insights />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
