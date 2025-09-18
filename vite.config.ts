import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    target: "esnext"
  },
  optimizeDeps: {
    include: [
      "@testing-library/svelte",
      "axe-core",
      "franc",
      "pdfjs-dist",
      "jspdf",
      "pdf-lib"
    ]
  },
  worker: {
    format: "es"
  }
});
