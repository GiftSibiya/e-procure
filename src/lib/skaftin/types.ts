/** Standard envelope from Skaftin Client API (see client-sdk/requests/README.md). */
export interface SkaftinApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

export interface SkaftinUser {
  id: number;
  name?: string;
  last_name?: string;
  email?: string;
  phone?: string | null;
  is_active?: boolean;
  roles?: Array<{ id: number; role_name: string; role_key: string }>;
  [key: string]: unknown;
}

export interface SkaftinSession {
  accessToken: string;
}

export interface LoginPayload {
  credential: string;
  password: string;
  method: "email" | "phone" | "custom_field_1" | "custom_field_2";
}

export interface LoginResult {
  user: SkaftinUser;
  session: SkaftinSession;
  organisation_name?: string;
  organisation_id?: number;
  is_admin?: boolean;
}

export interface RegisterPayload {
  name: string;
  last_name?: string;
  email: string;
  password: string;
  phone?: string;
  role_key?: string;
  role_id?: number;
  custom_field_1?: string;
  custom_field_2?: string;
  metadata?: Record<string, unknown>;
  otp_method?: "email" | "sms";
}

export interface SelectRowsResult<T = Record<string, unknown>> {
  rows: T[];
  rowCount?: number;
  totalCount?: number;
}

export interface DatabaseSelectBody {
  columns?: string[];
  where?: Record<string, unknown>;
  orderBy?: string;
  orderDirection?: "ASC" | "DESC";
  limit?: number;
  offset?: number;
  decrypt?: string[];
}

export interface DatabaseInsertBody {
  data: Record<string, unknown>;
  encrypt?: string[];
}

export interface DatabaseUpdateBody {
  data: Record<string, unknown>;
  where: Record<string, unknown>;
}

export interface DatabaseDeleteBody {
  where: Record<string, unknown>;
}
