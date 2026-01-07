<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How Meta Tag Validation Works | AxelBase Blog</title>
  <meta name="description" content="Learn how the Markdown Meta Tag Tester processes and validates meta tags in your Markdown files with precision." />
  <meta property="og:title" content="How Meta Tag Validation Works | AxelBase Blog" />
  <meta property="og:description" content="Learn how the Markdown Meta Tag Tester processes and validates meta tags in your Markdown files with precision." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How Meta Tag Validation Works</p>
  </div>

  <article class="prose">
    <h1>How Meta Tag Validation Works</h1>

    <p class="post-meta">Published: October 15, 2025 | Last Updated: October 15, 2025</p>

    <p>The Markdown Meta Tag Tester analyzes your Markdown files to ensure meta tags are correctly formatted and functional. Here’s how it works step-by-step.</p>

    <h2>The Validation Process</h2>
    <p>It parses YAML front matter, checks for required fields, and validates content against best practices.</p>

    <h3>Key Steps</h3>
    <ul>
      <li>Extracts meta tags from Markdown</li>
      <li>Verifies syntax and completeness</li>
      <li>Flags errors with line numbers</li>
    </ul>

    <h3>Output</h3>
    <p>Receive a detailed report with errors and suggestions directly in the interface.</p>

    <h2>FAQ</h2>
    <details>
      <summary>What happens if a tag is missing?</summary>
      <p>The tool highlights the missing tag and suggests a fix.</p>
    </details>
    <details>
      <summary>Can it handle custom tags?</summary>
      <p>Yes, with configurable rules for custom meta data.</p>
    </details>
    <details>
      <summary>Is real-time validation available?</summary>
      <p>Yes, as you type or upload files.</p>
    </details>

    <p class="italic-note">More advanced validation techniques coming soon.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>