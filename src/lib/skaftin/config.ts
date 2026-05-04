export interface SkaftinEnvConfig {
  /** API origin, no trailing slash. Use empty string in dev to hit Vite proxy (same-origin). */
  baseUrl: string;
  projectId: string;
  apiKey: string;
}

/** Reads Skaftin settings from `import.meta.env`. */
export function getSkaftinConfigFromEnv(): SkaftinEnvConfig | null {
  const projectId = import.meta.env.VITE_SKAFTIN_PROJECT_ID;
  const apiKey = import.meta.env.VITE_SKAFTIN_API_KEY;
  if (typeof projectId !== "string" || projectId.trim() === "") return null;
  if (typeof apiKey !== "string" || apiKey.trim() === "") return null;

  const baseRaw = import.meta.env.VITE_SKAFTIN_BASE_URL;
  const baseUrl = typeof baseRaw === "string" ? baseRaw.replace(/\/$/, "") : "";

  return {
    baseUrl,
    projectId: projectId.trim(),
    apiKey: apiKey.trim(),
  };
}

export function isSkaftinConfigured(): boolean {
  return getSkaftinConfigFromEnv() !== null;
}
