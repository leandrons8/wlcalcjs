import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  experimental: {
    optimizePackageImports: ['react-bootstrap'],
  },
};

export default nextConfig;
