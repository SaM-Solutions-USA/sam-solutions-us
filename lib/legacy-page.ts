/**
 * lib/legacy-page.ts — Server-only legacy HTML path resolver.
 *
 * Resolves a URL pathname to an absolute filesystem path beneath the
 * `legacy/` directory.  Returns `null` when the pathname is missing,
 * malformed, or attempts path traversal.
 *
 * This module MUST NOT be imported from client-side code (no `"use client"`).
 */

import { join, normalize, sep } from "node:path";
import { access, constants } from "node:fs/promises";

// ── Constants ────────────────────────────────────────────────────────

const LEGACY_ROOT = normalize(join(process.cwd(), "legacy"));

// ── Helpers ──────────────────────────────────────────────────────────

/**
 * Normalise a URL pathname for legacy-filesystem mapping.
 *
 * Rules applied:
 * 1. Must start with `/`.
 * 2. Strip trailing slash(es) — except the root `/` itself.
 * 3. Remove empty segments caused by `//` sequences.
 * 4. Decode percent-encoded segments to catch encoded traversal attempts.
 */
function normalisePathname(raw: string): string | null {
  if (!raw.startsWith("/")) return null;

  // Percent-decode every segment to normalise encoded traversal like %2e%2e
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    // Malformed percent-encoding → reject.
    return null;
  }

  // Strip trailing slashes (keep root as "/" -> "").
  const withoutTrailing = decoded.replace(/\/+$/, "");

  // Split and remove empty segments (catches `//foo`).
  const parts = withoutTrailing.split("/").filter(Boolean);

  // Reject any segment that is "." or ".." after decoding.
  for (const part of parts) {
    if (part === "." || part === "..") return null;
  }

  return parts.join("/");
}

/**
 * Safety gate: ensure the resolved absolute path stays inside LEGACY_ROOT.
 */
function isInsideLegacy(absolute: string): boolean {
  const normalised = normalize(absolute);
  if (normalised === LEGACY_ROOT) return false; // must be *inside*, not the root itself.
  return normalised.startsWith(LEGACY_ROOT + sep);
}

// ── Public API ───────────────────────────────────────────────────────

/**
 * Resolve a URL pathname to the absolute filesystem path of a legacy HTML
 * document, or `null` when no matching document exists (or input is unsafe).
 *
 * Candidate order:
 * 1. `legacy/<normalized>/index.html`
 * 2. `legacy/<normalized>.html`
 */
export async function resolveLegacyPage(
  pathname: string,
): Promise<string | null> {
  // Step 1 — normalise & validate input.
  const normalized = normalisePathname(pathname);
  if (normalized === null) return null;

  // Step 2 — build candidate paths in priority order.
  const candidates: string[] = [];

  // Candidate A: legacy/<path>/index.html
  candidates.push(join(LEGACY_ROOT, normalized, "index.html"));

  // Candidate B: legacy/<path>.html
  candidates.push(join(LEGACY_ROOT, `${normalized}.html`));

  // Step 3 — check each candidate.
  for (const candidate of candidates) {
    try {
      await access(candidate, constants.F_OK);
      // Safety gate: must be inside LEGACY_ROOT.
      if (!isInsideLegacy(candidate)) continue;
      return normalize(candidate);
    } catch {
      // File does not exist or is not accessible — try next candidate.
      continue;
    }
  }

  // No candidate found.
  return null;
}
