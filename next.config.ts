import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',       // generates static HTML into /out
  trailingSlash: true,    // helps routing on static hosts like Pages
  images: {
    unoptimized: true,    // Next's image optimizer needs a server; disable it for static export
  },
};

export default nextConfig;
