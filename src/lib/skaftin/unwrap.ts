import type { SkaftinApiResponse } from "./types";

export class SkaftinApiError extends Error {
  constructor(
    message: string,
    public readonly payload?: unknown
  ) {
    super(message);
    this.name = "SkaftinApiError";
  }
}

export function unwrapSkaftinResponse<T>(payload: unknown): T {
  if (payload === null || typeof payload !== "object" || !("success" in payload)) {
    throw new SkaftinApiError("Invalid API response", payload);
  }
  const p = payload as SkaftinApiResponse<T>;
  if (!p.success) {
    throw new SkaftinApiError(p.message || String(p.error) || "Request failed", payload);
  }
  if (p.data === undefined) {
    throw new SkaftinApiError("Missing data in response", payload);
  }
  return p.data;
}
