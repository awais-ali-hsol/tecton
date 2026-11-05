import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

// Own title, noindex and no canonical, so a missing URL never claims to be the homepage.
export const metadata: Metadata = {
  title: { absolute: "Page not found | Tecton Solutions" },
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          kicker="(404) — Page not found"
          lines={["Nothing", <em key="h">here.</em>]}
          intro={<p>The page you were looking for has moved or never existed.</p>}
        >
          <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button href="/">Back to home</Button>
            <Button href="/services/" variant="ghost">See our services</Button>
          </div>
        </PageHero>
      </main>
      <SiteFooter />
    </>
  );
}
