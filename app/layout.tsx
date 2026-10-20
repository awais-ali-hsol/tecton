import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
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

export const metadata: Metadata = {
  title: "Tecton Solutions — Software with structural integrity",
  description:
    "Tecton is an independent product studio designing and engineering web platforms, mobile apps, SaaS and AI-powered tools for ambitious companies.",
  keywords: ["product studio", "software development", "AI solutions", "SaaS", "web development", "Tecton Solutions"],
  icons: {
    icon: [{ url: "/tecton-favicon.png", type: "image/png", sizes: "1254x1254" }],
    shortcut: "/tecton-favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Tecton Solutions — Software with structural integrity",
    description: "An independent product studio for companies building software that has to hold weight.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecton Solutions",
    description: "Software with structural integrity.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E0E0C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="theme-ink" suppressHydrationWarning>
        <a href="#main" className="skip-link">Skip to content</a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
