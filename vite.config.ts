import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const DEFAULT_SKAFTIN_TARGET = "https://skaftinplatform.bobosoftware.co.za";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const skaftinProxyTarget = env.VITE_SKAFTIN_PROXY_TARGET || DEFAULT_SKAFTIN_TARGET;

  return {
    plugins: [react()],
    server: {
      port: 5181,
      proxy: {
        "/tenderView": "http://localhost:4000",
        "/tender": "http://localhost:4000",
        "/tenders": "http://localhost:4000",
        "/app-api": {
          target: skaftinProxyTarget,
          changeOrigin: true,
          secure: true,
        },
        "/api": {
          target: skaftinProxyTarget,
          changeOrigin: true,
          secure: true,
        },
      },
    },
  };
});
