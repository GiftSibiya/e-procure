/** Base URL for API calls (no trailing slash). Empty uses same-origin relative paths (Vite dev proxy). */
export function apiBase(): string {
  const raw = import.meta.env.VITE_API_BASE;
  if (typeof raw !== "string" || raw === "") return "";
  return raw.replace(/\/$/, "");
}

export function apiUrl(path: string): string {
  const base = apiBase();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
