<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Getting Started with Text Analysis | Clear Writing Blog</title>
  <meta name="description" content="A step-by-step guide to pasting text, uploading files, and viewing instant feedback in the client-side readability checker." />
  <meta property="og:title" content="Getting Started with Text Analysis | Clear Writing Blog" />
  <meta property="og:description" content="A step-by-step guide to pasting text, uploading files, and viewing instant feedback in the client-side readability checker." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Getting Started with Text Analysis</p>
  </div>

  <article class="prose">
    <h1>Getting Started with Text Analysis</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>Getting started with the Client-Side Readability Checker is simple and requires no setup. Open the web app in any modern browser—desktop or mobile—and begin analyzing text immediately.</p>
   
    <p>The main interface features a large text input area. Start by typing directly or pasting content from your clipboard. As soon as text appears, analysis begins automatically with no need to click "analyze."</p>
   
    <h2>Uploading Files</h2>
    <p>For existing files, use the upload feature. Supported formats include plain text (.txt) and Markdown (.md). The tool parses the content while preserving formatting for accurate sentence detection.</p>
   
    <p>Markdown support is particularly useful for bloggers and technical writers. Headings, lists, and code blocks are handled intelligently—analysis focuses on prose paragraphs.</p>
   
    <h2>Viewing Results</h2>
    <p>Once text is loaded, results appear in two places: interactive highlights overlay the input and a summary panel on the side or below on mobile.</p>
   
    <ul>
      <li>Color-coded highlights for complex sentences, passive voice, adverbs, and more</li>
      <li>Clickable tooltips with explanations and suggestions</li>
      <li>Summary statistics including word count, grade levels, and issue breakdown</li>
      <li>Instant updates with every change</li>
    </ul>
   
    <p>Highlights use intuitive colors. Very complex sentences appear in red, complex in yellow, passive voice in blue, adverbs in purple. Click any highlight for detailed feedback.</p>
   
    <p>Navigation is fully keyboard-accessible. Tab through controls, use arrow keys in the text area, and activate exports via shortcuts.</p>
   
    <p>For longer texts up to 10,000 words, performance remains smooth thanks to background processing.</p>
   
    <h2>Exporting and Clearing</h2>
    <p>Export your results anytime. Choose annotated HTML to preserve highlights, PDF for sharing, PNG for quick screenshots, or JSON for programmatic use.</p>
   
    <p>To start fresh, use the "New Analysis" button or simply delete all text.</p>
   
    <p>The mobile experience is optimized with touch-friendly controls and adaptive layouts.</p>
   
    <p>Experiment freely: analyze famous speeches, news articles, or your own drafts. Compare before-and-after versions after applying suggestions.</p>
   
    <p>Privacy remains paramount—nothing is stored or transmitted. Close the tab and everything disappears.</p>
   
    <p>No learning curve required. Within minutes, you'll gain insights into your writing habits and start making clearer, more impactful prose.</p>
   
    <p class="italic-note">Practice regularly to develop a stronger sense of clear writing.</p>
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