import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { viteRequire } from "vite-require";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  base: "./",
  plugins: [react(), svgr(), viteRequire()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
