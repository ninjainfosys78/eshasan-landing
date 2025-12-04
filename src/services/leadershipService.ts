// services/leadershipService.ts
import { pb, type Leader } from "./pocketbase";



type PbFilesHelper = {
  getUrl?: (record: unknown, filename: string) => string;
  getURL?: (record: unknown, filename: string) => string;
};

type PbTopLevelHelper = {
  getFileUrl?: (record: unknown, filename: string) => string;
  files?: PbFilesHelper;
  baseUrl?: string;
};

/**
 * Fetch leaders (page 1 by default, up to perPage).
 * Returns an array of Leader records.
 */
export async function getLeaders(opts?: { page?: number; perPage?: number; sort?: string }): Promise<Leader[]> {
  const page = opts?.page ?? 1;
  const perPage = opts?.perPage ?? 50;
  const sort = opts?.sort ?? "-created"; // default: newest first

  try {
    const res = await pb.collection("eShasan_leadership").getList<Leader>(page, perPage, {
      sort,
    });
    return res.items;
  } catch (err: unknown) {
    // Convert unknown error to Error with message for downstream handling
    if (err instanceof Error) {
      console.error("leadershipService.getLeaders error:", err);
      throw err;
    }
    const fallbackErr = new Error(String(err ?? "Unknown error fetching leaders"));
    console.error("leadershipService.getLeaders error:", fallbackErr);
    throw fallbackErr;
  }
}

export function getImageUrl(leader: Leader, options?: { fallback?: string }): string {
  const fallback = options?.fallback ?? "/images/placeholder-portrait.svg";

  // Accept both 'Image' and 'image' property names just in case
  // Cast Leader -> unknown -> Record<string, unknown> to satisfy TypeScript safely
  const leaderRecord = leader as unknown as Record<string, unknown>;
  const rawValue = leaderRecord["Image"] ?? leaderRecord["image"];
  if (rawValue === undefined || rawValue === null) return fallback;

  const filename = Array.isArray(rawValue) ? rawValue[0] : String(rawValue ?? "");
  if (!filename) return fallback;

  // Prepare a typed view of pb to avoid `any`
  const pbHelper = pb as unknown as PbTopLevelHelper;

  // Try pb.getFileUrl(record, filename)
  try {
    if (typeof pbHelper.getFileUrl === "function") {
      try {
        const url = pbHelper.getFileUrl(leader, filename);
        if (url) return url;
      } catch {
        // ignore and fall through
      }
    }
  } catch {
    // ignore
  }

  // Try pb.files.getUrl or pb.files.getURL
  try {
    const files = pbHelper.files;
    if (files) {
      if (typeof files.getUrl === "function") {
        try {
          const url = files.getUrl(leader, filename);
          if (url) return url;
        } catch {
          // ignore
        }
      }
      if (typeof files.getURL === "function") {
        try {
          const url = files.getURL(leader, filename);
          if (url) return url;
        } catch {
          // ignore
        }
      }
    }
  } catch {
    // ignore
  }

  // Fallback: construct canonical PocketBase file URL if baseUrl available
  try {
    const base = String(pbHelper.baseUrl ?? "").replace(/\/$/, "");
    if (base) {
      const collectionName = "eShasan_leadership";
      return `${base}/api/files/${encodeURIComponent(collectionName)}/${encodeURIComponent(leader.id)}/${encodeURIComponent(
        filename
      )}`;
    }
  } catch {
    // ignore
  }

  // Final fallback
  return fallback;
}

export const leadershipService = {
  getLeaders,
  getImageUrl,
};
