import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  /* standalone模式 */
  output: 'standalone',
};

export default nextConfig;
