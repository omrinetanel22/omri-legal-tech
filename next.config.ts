import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/omri-legal-tech",
  assetPrefix: "/omri-legal-tech/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
