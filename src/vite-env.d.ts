/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE?: string;
  /** Skaftin API origin (no trailing slash). Leave empty to use Vite dev proxy. */
  readonly VITE_SKAFTIN_BASE_URL?: string;
  readonly VITE_SKAFTIN_PROJECT_ID?: string;
  readonly VITE_SKAFTIN_API_KEY?: string;
  /** Optional: override proxy target for `/app-api` and `/api` (default: production host in vite.config). */
  readonly VITE_SKAFTIN_PROXY_TARGET?: string;
}
