import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    fs: {
      // The dashboard inventory JSON remains the single maintained source.
      allow: [".."]
    }
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true
  }
});