import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to ./out, served by Cloudflare Pages
  output: "export",
  // No image optimization server on Pages
  images: { unoptimized: true },
};

export default nextConfig;
