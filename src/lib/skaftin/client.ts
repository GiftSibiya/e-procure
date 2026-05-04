import type { SkaftinEnvConfig } from "./config";
import { createAuthApi } from "./auth";
import { createDatabaseApi } from "./database";
import { createSkaftinAxios } from "./http";

export interface SkaftinClientOptions extends SkaftinEnvConfig {
  getAccessToken: () => string | null;
}

/** Typed client for Skaftin platform APIs (see /client-sdk/requests). */
export function createSkaftinClient(options: SkaftinClientOptions) {
  const http = createSkaftinAxios(options.baseUrl, options.apiKey, options.getAccessToken);
  return {
    http,
    auth: createAuthApi(http, options.projectId),
    database: createDatabaseApi(http),
  };
}

export type SkaftinClient = ReturnType<typeof createSkaftinClient>;
