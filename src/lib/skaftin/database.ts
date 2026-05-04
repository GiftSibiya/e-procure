import type { AxiosInstance } from "axios";
import type {
  DatabaseDeleteBody,
  DatabaseInsertBody,
  DatabaseSelectBody,
  DatabaseUpdateBody,
  SelectRowsResult,
  SkaftinApiResponse,
} from "./types";
import { unwrapSkaftinResponse } from "./unwrap";

/**
 * Database routes per client-sdk/requests/03-DATABASE-REQUESTS.md
 * Base: `/app-api/database`
 */
export function createDatabaseApi(http: AxiosInstance) {
  const root = "/app-api/database";

  return {
    async listTables(): Promise<Array<{ table_name: string; row_count?: number }>> {
      const { data } = await http.get<SkaftinApiResponse<Array<{ table_name: string; row_count?: number }>>>(
        `${root}/tables`
      );
      return unwrapSkaftinResponse(data);
    },

    async getTableSchema(tableName: string): Promise<unknown> {
      const { data } = await http.get<SkaftinApiResponse<unknown>>(
        `${root}/tables/${encodeURIComponent(tableName)}/schema`
      );
      return unwrapSkaftinResponse(data);
    },

    async select<T = Record<string, unknown>>(tableName: string, body?: DatabaseSelectBody): Promise<SelectRowsResult<T>> {
      const { data } = await http.post<SkaftinApiResponse<SelectRowsResult<T>>>(
        `${root}/tables/${encodeURIComponent(tableName)}/select`,
        body ?? {}
      );
      return unwrapSkaftinResponse(data);
    },

    async insert(tableName: string, payload: DatabaseInsertBody): Promise<unknown> {
      const { data } = await http.post<SkaftinApiResponse<unknown>>(
        `${root}/tables/${encodeURIComponent(tableName)}/insert`,
        payload
      );
      return unwrapSkaftinResponse(data);
    },

    async update(tableName: string, payload: DatabaseUpdateBody): Promise<{ rowCount?: number }> {
      const { data } = await http.put<SkaftinApiResponse<{ rowCount?: number }>>(
        `${root}/tables/${encodeURIComponent(tableName)}/update`,
        payload
      );
      return unwrapSkaftinResponse(data);
    },

    async delete(tableName: string, payload: DatabaseDeleteBody): Promise<{ rowCount?: number }> {
      const { data } = await http.delete<SkaftinApiResponse<{ rowCount?: number }>>(
        `${root}/tables/${encodeURIComponent(tableName)}/delete`,
        { data: payload }
      );
      return unwrapSkaftinResponse(data);
    },
  };
}
