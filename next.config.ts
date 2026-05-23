import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: false, // Vercel handles image optimization natively
  },
};

export default nextConfig;
