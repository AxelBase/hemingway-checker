import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Optional: fallback page for SPA routing
      pages: 'docs',
      assets: 'docs',
      fallback: 'index.html'
    }),
    paths: {
      // Set this to your repo name if deploying to a subfolder
      base: '/hemingway-checker'
    },
    alias: {
      "@lib": "src/lib",
      "@components": "src/lib/components",
      "@analysis": "src/lib/analysis",
      "@utils": "src/lib/utils",
      "@workers": "src/lib/workers"
    }
  }
};

export default config;
