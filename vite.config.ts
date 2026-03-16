import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          "three-stdlib": ["three-stdlib"],
          gsap: ["gsap"],
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
});
