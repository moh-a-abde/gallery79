import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Only use the componentTagger in development mode if it's actually needed
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
