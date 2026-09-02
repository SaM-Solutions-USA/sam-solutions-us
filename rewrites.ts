/**
 * Rewrites configuration for gradual migration.
 *
 * Each entry rewrites a URL pattern to a specific Next.js route.
 * When all files in a section are converted to React/Next.js pages,
 * remove its rewrite — the middleware/static server will stop
 * intercepting those paths.
 *
 * During this first iteration, no rewrites are needed because ALL
 * routes are served from the static export. Add entries here as
 * specific Next.js pages are created.
 */

import type { NextConfig } from "next";

export async function rewrites(): Promise<ReturnType<NextConfig["rewrites"]>> {
  return [];
}

export async function redirects(): Promise<ReturnType<NextConfig["redirects"]>> {
  return [];
}

export async function headers(): Promise<ReturnType<NextConfig["headers"]>> {
  return [];
}

export const rewriterConfig = { rewrites, redirects, headers };
