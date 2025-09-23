<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Passive Voice: Hemingway Rule-Based Detection</title> <!-- 53 chars, added "Hemingway" -->
  <meta name="description" content="Detect passive voice with our Hemingway-inspired, rule-based tool. Clearer writing for privacy-conscious writers—no AI, no data sent." /> <!-- 139 chars, added "Hemingway-inspired" -->

  <!-- Open Graph -->
  <meta property="og:title" content="Passive Voice: Hemingway Rule-Based Detection" />
  <meta property="og:description" content="Rule-based passive voice detection with Hemingway principles. Privacy-first for writers." /> <!-- 92 chars -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://axelbase.github.io/hemingway-checker/blog/passive-voice-detection-without-ai" />
  <meta property="og:image" content="https://sorenaxel.github.io/readability-checker/og-preview.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Passive Voice: Hemingway Rule-Based Detection" />
  <meta name="twitter:description" content="Hemingway-inspired passive voice detection. Privacy-first, no AI." /> <!-- 65 chars -->
  <meta name="twitter:image" content="https://sorenaxel.github.io/readability-checker/og-preview.png" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://axelbase.github.io/hemingway-checker/blog/passive-voice-detection-without-ai" />

  <!-- Schema.org for Article -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Passive Voice: Hemingway Rule-Based Detection",
      "description": "Techniques for detecting passive voice without AI.",
      "author": {
        "@type": "Person",
        "name": "AxelBase Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "AxelBase",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sorenaxel.github.io/readability-checker/og-preview.png"
        }
      },
      "datePublished": "2025-09-23",
      "dateModified": "2025-09-23",
      "image": "https://sorenaxel.github.io/readability-checker/og-preview.png",
      "url": "https://axelbase.github.io/hemingway-checker/blog/passive-voice-detection-without-ai",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://axelbase.github.io/hemingway-checker/blog/passive-voice-detection-without-ai"
      }
    }
  </script>

  <!-- Schema.org for FAQ -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why avoid passive voice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passive voice can make writing less direct and harder to read. Active voice improves clarity and engagement."
          }
        },
        {
          "@type": "Question",
          "name": "Is this tool free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Hemingway-style checker is completely free and open-source."
          }
        },
        {
          "@type": "Question",
          "name": "Why avoid AI-based readability tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI tools often rely on opaque models and server-side processing, risking data privacy. Our rule-based tool is transparent and local."
          }
        }
      ]
    }
  </script>
</svelte:head>

<article class="w-full max-w-3xl mx-auto p-4 sm:p-8 prose prose-invert prose-headings:text-yellow-400 prose-a:text-yellow-400">
  <h1>Passive Voice: Hemingway Rule-Based Detection</h1>
  
  <p class="text-slate-300">Published: September 23, 2025 | Last Updated: September 23, 2025</p>
  
  <p>Passive voice weakens writing, but you don’t need AI to fix it. Our <a href="{base}/" class="hover:underline">Hemingway-inspired checker</a> uses rule-based detection for privacy-conscious writers. See also our <a href="{base}/blog/flesch-kincaid-vs-ari" class="hover:underline">Flesch-Kincaid vs ARI</a> and <a href="{base}/blog/accessible-writing-tools" class="hover:underline">accessibility guide</a>.</p>
  
  <h2>What is Passive Voice?</h2>
  <p>Passive voice occurs when the subject receives the action (e.g., "The ball was thrown by John"). Active voice is direct: "John threw the ball."</p>
  
  <h3>Simple Rules to Detect It</h3>
  <ol class="list-decimal pl-6 text-slate-300">
    <li>Look for forms of "to be" (is, was, were) followed by a past participle.</li>
    <li>Check if the actor is omitted or introduced with "by."</li>
    <li>Use sentence parsing to identify structure.</li>
  </ol>
  
  <h3>Before/After Example</h3>
  <p>Before: "Mistakes were made by the committee." (Passive)</p>
  <p>After: "The committee made mistakes." (Active)</p>
  
  <img src="/passive-before-after.gif" alt="GIF of Hemingway-inspired passive voice rewrite in rule-based tool" loading="lazy" class="my-4 rounded-lg shadow-md" />
  
  <p>Implement these rules yourself or use our open-source code on <a href="https://github.com/axelbase/hemingway-checker" class="hover:underline">GitHub</a>.</p>
  
  <h2>FAQ</h2>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Why avoid passive voice?</summary>
    <p class="text-slate-300 pl-4">Passive voice can make writing less direct and harder to read. Active voice improves clarity and engagement.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Is this tool free?</summary>
    <p class="text-slate-300 pl-4">Yes, our Hemingway-style checker is completely free and open-source.</p>
  </details>
  <details class="mb-4">
    <summary class="cursor-pointer text-yellow-400">Why avoid AI-based readability tools?</summary>
    <p class="text-slate-300 pl-4">AI tools often rely on opaque models and server-side processing, risking data privacy. Our rule-based tool is transparent and local.</p>
  </details>
  
  <p class="text-slate-400 italic mt-8">This post will be updated quarterly with new detection rules and examples.</p>
</article>