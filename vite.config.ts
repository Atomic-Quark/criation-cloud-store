import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@criation/ui/styles.css": path.resolve(__dirname, "./packages/criation-ui/dist/styles.css"),
      "@criation/ui": path.resolve(__dirname, "./packages/criation-ui/dist/index.js"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
