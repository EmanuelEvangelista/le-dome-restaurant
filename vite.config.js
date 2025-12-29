import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/le-dome-restaurant/",
  plugins: [react()],
  base: '/repo-restaurant-app/',
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
  esbuild: {
    legalComments: "none",
  },
  build: {
    sourcemap: false,
  },
});
