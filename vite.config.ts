import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // use root in dev, repo subpath in production build
  base: mode === "development" ? "/" : "/Portfolio-Website/",
  server: {
    // use 0.0.0.0 if you want to test from other devices on LAN,
    // or "localhost" to keep it local-only
    host: "localhost",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
