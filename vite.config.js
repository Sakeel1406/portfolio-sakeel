import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This says: if we're on GitHub Pages, use the subfolder, otherwise use the root.
  base: process.env.NODE_ENV === 'production' ? '/portfolio-sakeel/' : '/',
  plugins: [react()],
});
