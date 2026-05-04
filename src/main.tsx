import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SkaftinProvider } from "./lib/skaftin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkaftinProvider>
      <App />
    </SkaftinProvider>
  </StrictMode>
);
