import type { Metadata } from "next";
import { Suspense } from "react";
import { contact, faqs } from "@/lib/data";
import { BriefForm } from "@/components/contact/BriefForm";
import { CopyEmail, Faq, StudioClock } from "@/components/contact/ContactBits";
import { Gridlines } from "@/components/ui/PageHero";
import { MaskLines, Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. We reply to every brief within one business day.",
  alternates: { canonical: "https://tectonsolutions.com/contact" },
  openGraph: {
    title: "Contact — Tecton Solutions",
    description: "Tell us about your project. We reply to every brief within one business day.",
    url: "https://tectonsolutions.com/contact",
  },
  twitter: {
    title: "Contact — Tecton Solutions",
    description: "Tell us about your project. We reply to every brief within one business day.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="contact theme-ink" aria-labelledby="contact-title">
          <Gridlines />
          <div className="wrap">
            <div className="phero__meta">
              <span className="label">(Contact) — New project enquiries</span>
              <span className="label">Reply within 1 business day</span>
            </div>
            <div className="contact__grid" style={{ marginTop: 0 }}>
              <aside className="contact__aside">
                <h1 id="contact-title" className="contact__title">
                  <MaskLines trigger="mount" delay={0.1} lines={["Let's", <em key="t">talk.</em>]} />
                </h1>
                <Reveal delay={0.35}>
                  <p className="contact__lede">
                    Share a few details and a partner — not a sales rep — will come back with honest
                    thoughts on scope, timeline and the smartest first step.
                  </p>
                  <dl className="contact__list">
                    <div><dt className="label">Email</dt><dd><CopyEmail /></dd></div>
                    <div><dt className="label">Phone</dt><dd><a href={contact.phoneHref} className="link-u">{contact.phone}</a></dd></div>
                    <div><dt className="label">Studio</dt><dd>{contact.address}</dd></div>
                    <div><dt className="label">Local time</dt><dd><StudioClock /></dd></div>
                  </dl>
                </Reveal>
              </aside>
              <Suspense fallback={<div className="brief" />}>
                <BriefForm />
              </Suspense>
            </div>
          </div>
        </section>

        <section className="block theme-bone" id="faq" aria-labelledby="faq-title">
          <div className="wrap split">
            <div className="split__label">
              <SectionLabel index="FAQ" title="Before you ask" />
            </div>
            <div className="split__body">
              <h2 id="faq-title" className="h-display" style={{ marginBottom: 56 }}>
                <MaskLines lines={["Good", <span key="l2"><em>questions.</em></span>]} />
              </h2>
              <Faq items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
