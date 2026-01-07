<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is the Client-Side Readability Checker?', description: 'An introduction to this privacy-focused, browser-based tool that analyzes text clarity and simplicity in real-time.' },
    { href: '/blog/posts/post2', title: 'How Readability Scores Work', description: 'Explore the Flesch-Kincaid and Automated Readability Index formulas used to calculate grade-level scores.' },
    { href: '/blog/posts/post3', title: 'Getting Started with Text Analysis', description: 'A step-by-step guide to pasting text, uploading files, and viewing instant feedback.' },
    { href: '/blog/posts/post4', title: 'Understanding Complex and Hard-to-Read Sentences', description: 'Learn how the tool identifies long or dense sentences and why simplifying them improves clarity.' },
    { href: '/blog/posts/post5', title: 'Detecting and Reducing Passive Voice', description: 'Discover the heuristics behind passive voice highlighting and tips for switching to active voice.' },
    { href: '/blog/posts/post6', title: 'Managing Adverb Density', description: 'How adverb usage is measured and strategies to replace weak adverbs with stronger verbs.' },
    { href: '/blog/posts/post7', title: 'Exporting Results and Reports', description: 'Options for saving annotated text as HTML, PDF, PNG, or JSON while keeping everything client-side.' },
  ];
</script>

<svelte:head>
  <title>Blog | Hemingway-Style Readability Checker</title>
  <meta name="description" content="Insights, guides, and tips on clear writing, readability analysis, and using the client-side Hemingway-style tool." />
</svelte:head>

<div class="blog-page max-w-6xl mx-auto px-6 py-12">
  <header class="text-center mb-16">
    <h1 class="text-5xl font-extrabold text-var(--color-accent) mb-6">
      Blog: Clear Writing Insights
    </h1>
    <p class="text-xl text-var(--color-text-secondary) max-w-3xl mx-auto leading-relaxed">
      Dive into guides on readability metrics, style improvements, and best practices for bold, clear prose. All analysis happens in your browser—no data leaves your device.
    </p>
  </header>

  <section class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="post-card">
        <div class="card-inner">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">
            Read Article <span class="arrow">&rarr;</span>
          </span>
        </div>
      </a>
    {/each}
  </section>
</div>

<style>
  .blog-page {
    min-height: 100vh;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
  }

  .post-card {
    display: block;
    background: #1e293b;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--color-gray-300);
    transition: all 0.4s var(--transition-ease);
    height: 100%;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-accent);
  }

  .card-inner {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .post-description {
    color: var(--color-text-secondary);
    flex-grow: 1;
    margin-bottom: 1.5rem;
    line-height: 1.7;
    font-size: 1.05rem;
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 600;
    font-size: 1.05rem;
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .post-card:hover .read-more {
    gap: 0.75rem;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .post-card:hover .arrow {
    transform: translateX(8px);
  }

  @media (max-width: 640px) {
    .posts-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .card-inner {
      padding: 1.5rem;
    }

    .post-title {
      font-size: 1.35rem;
    }
  }
</style>