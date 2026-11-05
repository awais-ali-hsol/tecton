import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { ScrollReset } from "@/components/ui/ScrollReset";
import { HOME_DESCRIPTION, HOME_TITLE, pageMetadata, SITE_NAME, SITE_URL, jsonLdScript, siteJsonLd } from "@/lib/seo";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--ff-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--ff-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--ff-mono", display: "swap" });

const homeMeta = pageMetadata({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Tecton Solutions",
  },
  description: HOME_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/tecton-favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/tecton-favicon.png",
    apple: "/tecton-favicon.png",
  },
  // Per-page canonical, Open Graph and Twitter data come from pageMetadata() in lib/seo.ts.
  // No canonical here: a root canonical would leak onto the 404 page.
  openGraph: homeMeta.openGraph,
  twitter: homeMeta.twitter,
};

export const viewport: Viewport = {
  themeColor: "#0E0E0C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="theme-ink" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(siteJsonLd)}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollReset />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
