import axios, { type AxiosInstance } from "axios";

export function createSkaftinAxios(
  baseUrl: string,
  apiKey: string,
  getAccessToken: () => string | null
): AxiosInstance {
  const instance = axios.create({
    baseURL: baseUrl === "" ? undefined : baseUrl.replace(/\/$/, ""),
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((config) => {
    config.headers["x-api-key"] = apiKey;
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
}
