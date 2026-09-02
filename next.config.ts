import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep URLs as-is (no trailing slash enforcement).
  trailingSlash: false,

  // Placeholder for gradual migration rewrites/redirects/headers.
  // See rewrites.ts for documentation on how to add entries.
  // rewrites: async () => (await import("./rewrites")).rewrites(),
  // redirects: async () => (await import("./rewrites")).redirects(),
  // headers: async () => (await import("./rewrites")).headers(),
};

export default nextConfig;
