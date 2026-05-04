import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createSkaftinClient, type SkaftinClient } from "./client";
import { getSkaftinConfigFromEnv, type SkaftinEnvConfig } from "./config";
import type { LoginPayload, LoginResult, RegisterPayload, SkaftinUser } from "./types";
import { SkaftinApiError } from "./unwrap";

const TOKEN_KEY = "skaftin_access_token";
const USER_KEY = "skaftin_user";

export interface SkaftinContextValue {
  configured: boolean;
  config: SkaftinEnvConfig | null;
  client: SkaftinClient | null;
  user: SkaftinUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<LoginResult>;
  logout: () => Promise<void>;
  register: (payload: RegisterPayload) => Promise<unknown>;
  authError: string | null;
  clearAuthError: () => void;
}

const SkaftinContext = createContext<SkaftinContextValue | null>(null);

function readStoredUser(): SkaftinUser | null {
  try {
    const raw = sessionStorage.getItem(USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SkaftinUser;
  } catch {
    return null;
  }
}

export function SkaftinProvider({ children }: { children: ReactNode }) {
  const envConfig = useMemo(() => getSkaftinConfigFromEnv(), []);
  const configured = envConfig !== null;

  const [accessToken, setAccessToken] = useState<string | null>(() => sessionStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState<SkaftinUser | null>(() => readStoredUser());
  const [authError, setAuthError] = useState<string | null>(null);

  const tokenRef = useRef<string | null>(accessToken);
  tokenRef.current = accessToken;

  const getToken = useCallback(() => tokenRef.current, []);

  const client = useMemo(() => {
    if (!envConfig) return null;
    return createSkaftinClient({
      ...envConfig,
      getAccessToken: getToken,
    });
  }, [envConfig, getToken]);

  const clearAuthError = useCallback(() => setAuthError(null), []);

  const persistSession = useCallback((result: LoginResult) => {
    const token = result.session.accessToken;
    sessionStorage.setItem(TOKEN_KEY, token);
    sessionStorage.setItem(USER_KEY, JSON.stringify(result.user));
    setAccessToken(token);
    setUser(result.user);
  }, []);

  const clearSession = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    setAccessToken(null);
    setUser(null);
  }, []);

  const login = useCallback(
    async (payload: LoginPayload) => {
      if (!client) throw new SkaftinApiError("Skaftin is not configured");
      setAuthError(null);
      try {
        const result = await client.auth.login(payload);
        persistSession(result);
        return result;
      } catch (e) {
        const msg = e instanceof SkaftinApiError ? e.message : e instanceof Error ? e.message : "Login failed";
        setAuthError(msg);
        throw e;
      }
    },
    [client, persistSession]
  );

  const logout = useCallback(async () => {
    if (!client || !accessToken) {
      clearSession();
      return;
    }
    setAuthError(null);
    try {
      await client.auth.logout();
    } catch {
      /* still clear local session */
    } finally {
      clearSession();
    }
  }, [client, accessToken, clearSession]);

  const register = useCallback(
    async (payload: RegisterPayload) => {
      if (!client) throw new SkaftinApiError("Skaftin is not configured");
      setAuthError(null);
      try {
        return await client.auth.register(payload);
      } catch (e) {
        const msg =
          e instanceof SkaftinApiError ? e.message : e instanceof Error ? e.message : "Registration failed";
        setAuthError(msg);
        throw e;
      }
    },
    [client]
  );

  const value = useMemo<SkaftinContextValue>(
    () => ({
      configured,
      config: envConfig,
      client,
      user,
      accessToken,
      isAuthenticated: Boolean(accessToken && user),
      login,
      logout,
      register,
      authError,
      clearAuthError,
    }),
    [configured, envConfig, client, user, accessToken, login, logout, register, authError, clearAuthError]
  );

  return <SkaftinContext.Provider value={value}>{children}</SkaftinContext.Provider>;
}

export function useSkaftin(): SkaftinContextValue {
  const ctx = useContext(SkaftinContext);
  if (!ctx) {
    throw new Error("useSkaftin must be used within SkaftinProvider");
  }
  return ctx;
}
