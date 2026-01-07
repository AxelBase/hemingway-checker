<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Exporting Results and Reports | Clear Writing Blog</title>
  <meta name="description" content="Options for saving annotated text as HTML, PDF, PNG, or JSON while keeping everything client-side in the readability checker." />
  <meta property="og:title" content="Exporting Results and Reports | Clear Writing Blog" />
  <meta property="og:description" content="Options for saving annotated text as HTML, PDF, PNG, or JSON while keeping everything client-side in the readability checker." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Exporting Results and Reports</p>
  </div>

  <article class="prose">
    <h1>Exporting Results and Reports</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>Once analysis is complete, sharing or preserving results is essential. The Client-Side Readability Checker offers multiple export formats, all generated entirely in your browser with full privacy.</p>
   
    <p>Four options cover common needs: annotated HTML, PDF documents, PNG images, and structured JSON data. Each preserves different aspects of the analysis.</p>
   
    <p>Exports happen instantly—no servers involved. Your text and highlights remain on your device throughout the process.</p>
   
    <h2>Available Export Formats</h2>
    <ul>
      <li>HTML: Fully styled with color-coded highlights preserved</li>
      <li>PDF: Professional layout suitable for printing or sharing</li>
      <li>PNG: Visual snapshot of the current view</li>
      <li>JSON: Structured data for developers or further processing</li>
    </ul>
   
    <h2>Annotated HTML Export</h2>
    <p>The HTML option creates a complete webpage with your original text and all interactive-style highlights intact. Colors, tooltips, and formatting match the live analyzer exactly.</p>
   
    <p>Use this for archiving drafts with feedback or sharing detailed reviews with collaborators. The file opens in any browser without dependencies.</p>
   
    <h2>PDF for Professional Sharing</h2>
    <p>PDF exports produce clean, printable documents. Highlights appear as colored backgrounds or underlines, with the summary panel included as a header or footer.</p>
   
    <p>Ideal for formal reports, editing passes, or submitting revised work with evidence of improvements.</p>
   
    <h2>PNG for Quick Visuals</h2>
    <p>The PNG capture saves the current screen as an image. Perfect for quick social media posts, presentations, or embedding in notes.</p>
   
    <p>Scroll position and zoom level affect the capture, allowing focus on specific sections.</p>
   
    <h2>JSON for Developers</h2>
    <p>JSON export provides structured output: full text, sentence array, readability scores, and detailed issue lists. Developers can integrate results into workflows or build custom visualizations.</p>
   
    <p>All exports include timestamps and basic metadata. File names suggest content for easy organization.</p>
   
    <p>Privacy remains absolute—nothing leaves your browser. Even temporary processing happens locally.</p>
   
    <p>Combine exports for comprehensive records: HTML for review, PDF for archive, JSON for automation.</p>
   
    <p>Exporting closes the loop on analysis. Turn insights into actionable, shareable artifacts while maintaining complete control over your writing.</p>
   
    <p class="italic-note">Capture clarity. Share progress confidently.</p>
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