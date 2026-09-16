import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tecton Solutions | Ideas / Technology / Real Solutions",
  description: "Tecton Solutions builds modern software, web applications, mobile apps, AI solutions, SaaS platforms and scalable digital products for growing businesses.",
  keywords: ["software development", "AI solutions", "SaaS", "web development", "Tecton Solutions"],
  openGraph: { title: "Tecton Solutions | Ideas / Technology / Real Solutions", description: "Modern digital products for growing businesses.", type: "website" },
  twitter: { card: "summary_large_image", title: "Tecton Solutions", description: "Ideas / technology / real solutions." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Tecton Solutions", url: "https://tectonsolutions.com", slogan: "Ideas / Technology / Real Solutions", description: "Modern software and technology company building scalable digital products." }) }} />
      </body>
    </html>
  );
}
