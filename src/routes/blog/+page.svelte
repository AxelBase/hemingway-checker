<script>
  import { base } from '$app/paths';
  export const prerender = true;
</script>

<svelte:head>
  <title>AxelBase Blog: Hemingway-Inspired Writing Tips</title> <!-- 53 chars, added "Hemingway-Inspired" -->
  <meta name="description" content="Articles on rule-based readability analysis, passive voice, grade-level scores, and accessible tools for privacy-conscious writers and educators." /> <!-- 152 chars, added "rule-based" and "privacy-conscious" -->

  <!-- Open Graph -->
  <meta property="og:title" content="AxelBase Blog: Hemingway-Inspired Writing Tips" />
  <meta property="og:description" content="Guides on Hemingway-inspired readability without AI. Privacy-first, rule-based tips for writers." /> <!-- 97 chars, added "Hemingway-inspired" -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://axelbase.github.io/hemingway-checker/blog" />
  <meta property="og:image" content="https://sorenaxel.github.io/readability-checker/og-preview.png" /> <!-- Verify 1200x630px -->

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AxelBase Blog: Hemingway-Inspired Writing Tips" />
  <meta name="twitter:description" content="Hemingway-inspired readability tips with privacy-first focus." /> <!-- 60 chars, added "Hemingway-inspired" -->
  <meta name="twitter:image" content="https://sorenaxel.github.io/readability-checker/og-preview.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://axelbase.github.io/hemingway-checker/blog" />

  <!-- Schema.org for Blog (CollectionPage) -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "AxelBase Blog",
      "description": "Articles on Hemingway-inspired, privacy-first readability tools and writing best practices.",
      "url": "https://axelbase.github.io/hemingway-checker/blog"
    }
  </script>
</svelte:head>

<div class="w-full flex flex-col items-center gap-6 p-4 sm:p-8">
  <h1 class="text-3xl font-bold text-yellow-400 mb-6">Blog: Hemingway-Inspired Clarity & Privacy</h1>
  
  <p class="text-slate-300 text-lg mb-8 text-center">
    Explore cornerstone articles inspired by Hemingway’s principles for privacy-conscious writers and educators. Get rule-based tips, examples, and links to our <a href="{base}/" class="text-yellow-400 hover:underline">readability checker</a> and <a href="https://github.com/axelbase/hemingway-checker" class="text-yellow-400 hover:underline">GitHub repo</a>.
  </p>

  <div class="w-full max-w-2xl flex flex-col gap-4">
    <a href="{base}/blog/how-to-check-readability-offline" class="block card hover:transform hover:-translate-y-1 transition-transform">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2">Check Readability Offline: Privacy-First Guide</h2>
      <p class="text-slate-400">Analyze text without online tools or data sharing.</p>
    </a>

    <a href="{base}/blog/passive-voice-detection-without-ai" class="block card hover:transform hover:-translate-y-1 transition-transform">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2">Passive Voice Detection Without AI: Rule-Based</h2>
      <p class="text-slate-400">Spot and fix passive voice for clearer writing.</p>
    </a>

    <a href="{base}/blog/flesch-kincaid-vs-ari" class="block card hover:transform hover:-translate-y-1 transition-transform">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2">Flesch-Kincaid vs ARI: Grade-Level Scores</h2>
      <p class="text-slate-400">Compare readability formulas for better insights.</p>
    </a>

    <a href="{base}/blog/accessible-writing-tools" class="block card hover:transform hover:-translate-y-1 transition-transform">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2">Accessible Writing Tools: Keyboard & Screen Safe</h2>
      <p class="text-slate-400">Create content usable for all audiences.</p>
    </a>

    <a href="{base}/blog/why-client-side-editing-matters" class="block card hover:transform hover:-translate-y-1 transition-transform">
      <h2 class="text-xl font-semibold text-yellow-400 mb-2">Client-Side Editing: Why It Matters for Writers</h2>
      <p class="text-slate-400">Benefits of local processing for privacy.</p>
    </a>
  </div>
</div>