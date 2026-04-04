import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // 👈 ye add karo
  images: {
    unoptimized: true, // 👈 important for static export
  },
};

export default nextConfig;