import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { ScrollReset } from "@/components/ui/ScrollReset";
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

const SITE_URL = "https://tectonsolutions.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Tecton Solutions",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/tecton-logo.svg`,
      },
      description:
        "An independent product studio designing and engineering web platforms, mobile apps, SaaS and AI-powered tools for ambitious companies.",
      foundingDate: "2015",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Tecton Solutions",
      description: "Software with structural integrity.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
const OG_TITLE = "Tecton Solutions — Software with structural integrity";
const OG_DESCRIPTION =
  "An independent product studio designing and engineering web platforms, mobile apps, SaaS and AI-powered tools for ambitious companies.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: "%s — Tecton Solutions",
  },
  description: OG_DESCRIPTION,
  keywords: ["product studio", "software development", "AI solutions", "SaaS", "web development", "mobile apps", "Tecton Solutions"],
  authors: [{ name: "Tecton Solutions", url: SITE_URL }],
  creator: "Tecton Solutions",
  publisher: "Tecton Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/tecton-favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/tecton-favicon.png",
    apple: "/tecton-favicon.png",
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Tecton Solutions",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tecton Solutions — Software with structural integrity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: "/og-image.png", alt: "Tecton Solutions — Software with structural integrity" }],
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollReset />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
