import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tecton Solutions | Design. Build. Deliver.",
  description: "Tecton Solutions builds modern software, web applications, mobile apps, AI solutions, SaaS platforms and scalable digital products for growing businesses.",
  keywords: ["software development", "AI solutions", "SaaS", "web development", "Tecton Solutions"],
  icons: {
    icon: [{ url: "/tecton-favicon.png", type: "image/png", sizes: "1254x1254" }],
    shortcut: "/tecton-favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Tecton Solutions | Design. Build. Deliver.",
    description: "Modern digital products for growing businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecton Solutions",
    description: "Design. Build. Deliver.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
