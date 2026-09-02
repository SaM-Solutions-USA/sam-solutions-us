/**
 * app/[[...slug]]/route.ts — Legacy HTML fallback route handler.
 *
 * This optional catch-all Route Handler intercepts GET and HEAD requests
 * for URLs that are NOT matched by a more specific App Router route
 * (e.g. `app/about-us/page.tsx`, `app/api/...`). It delegates to
 * `lib/legacy-page.ts` to find the matching document under `legacy/`.
 *
 * Route precedence in Next.js App Router:
 *   1. Static file routes (app/<route>/route.ts) — most specific
 *   2. Dynamic catch-all routes (app/[[...slug]]/route.ts) — least specific
 *
 * Because this is a *Route Handler* (not a Page), it only handles
 * request methods that have explicit functions (GET, HEAD). Pages under
 * more-specific paths take precedence over this catch-all.
 */

import { readFile } from "node:fs/promises";
import { resolveLegacyPage } from "@/lib/legacy-page";

// ------------------------------------------------------------------
// GET — return the full legacy HTML document as-is.
// ------------------------------------------------------------------
export async function GET(
  request: Request,
): Promise<Response> {
  const filePath = await resolveLegacyPage(new URL(request.url).pathname);
  if (!filePath) {
    return new Response("Not Found", { status: 404 });
  }

  const html = await readFile(filePath, "utf-8");
  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// ------------------------------------------------------------------
// HEAD — same as GET but without a body.
// ------------------------------------------------------------------
export async function HEAD(
  request: Request,
): Promise<Response> {
  const filePath = await resolveLegacyPage(new URL(request.url).pathname);
  if (!filePath) {
    return new Response("Not Found", { status: 404 });
  }

  // HEAD returns the same headers as GET but no body.
  return new Response(null, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
