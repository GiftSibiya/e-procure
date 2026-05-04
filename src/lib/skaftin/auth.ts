import type { AxiosInstance } from "axios";
import type { LoginPayload, LoginResult, RegisterPayload, SkaftinApiResponse } from "./types";
import { unwrapSkaftinResponse } from "./unwrap";

/**
 * Auth routes per client-sdk/requests/01-AUTH-REQUESTS.md
 * Base: `/api/auth/{projectId}/auth`
 */
export function createAuthApi(http: AxiosInstance, projectId: string) {
  const prefix = `/api/auth/${encodeURIComponent(projectId)}/auth`;

  return {
    async register(body: RegisterPayload): Promise<unknown> {
      const { data } = await http.post<SkaftinApiResponse<unknown>>(`${prefix}/register`, body);
      return unwrapSkaftinResponse(data);
    },

    async login(body: LoginPayload): Promise<LoginResult> {
      const { data } = await http.post<SkaftinApiResponse<LoginResult>>(`${prefix}/login`, body);
      return unwrapSkaftinResponse<LoginResult>(data);
    },

    async logout(): Promise<void> {
      const { data } = await http.post<SkaftinApiResponse<unknown>>(`${prefix}/logout`);
      unwrapSkaftinResponse(data);
    },
  };
}
