import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: false
    }),
    paths: {
      base: '/hemingway-checker'
    },
    prerender: {
      entries: ['*'],        // ✅ correct location
      handleHttpError: 'warn'
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
