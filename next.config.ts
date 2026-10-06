import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to ./out, served as a Cloudflare Workers static site
  output: "export",
  // No image optimisation server: images are served as they are
  images: { unoptimized: true },
  // No "N" badge in the corner while developing; errors still show
  devIndicators: false,
};

export default nextConfig;
