<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import TextInput from "../lib/components/TextInput.svelte";
  import Highlight from "../lib/components/Highlight.svelte";
  import SummaryPanel from "../lib/components/SummaryPanel.svelte";
  import { generatePDF } from "../lib/pdf/PdfGenerator";

  let text = "";
  let analysis: any = null;
  let worker: Worker | undefined;
  let pending = 0;
  let debounceTimer: ReturnType<typeof setTimeout>;
  let downloadCount = 1;
  let isAnalyzing = false;

  onMount(async () => {
    if (typeof window !== "undefined") {
      const WorkerModule = await import("../workers/analysis.worker.ts?worker");
      worker = new WorkerModule.default();

      worker.onmessage = (e) => {
        if (e.data.ok && e.data.job === pending) {
          analysis = e.data.result;
        }
        isAnalyzing = false;
      };
    }
  });

  function handleText(e: CustomEvent<string>) {
    text = e.detail;
    analysis = null;
    clearTimeout(debounceTimer);

    if (!text.trim()) {
      isAnalyzing = false;
      return;
    }

    isAnalyzing = true;
    debounceTimer = setTimeout(() => {
      pending++;
      worker?.postMessage({ job: pending, text });
    }, 300);
  }

  async function copyText() {
    if (typeof window === "undefined" || !analysis?.sentences) return;

    const outputDiv = document.querySelector(".output-content") as HTMLDivElement;
    if (outputDiv) {
      try {
        await navigator.clipboard.writeText(outputDiv.innerText);
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy text:", err);
        alert("Failed to copy text. Please try again.");
      }
    }
  }

  async function downloadPDF() {
    if (typeof window === "undefined" || !analysis?.sentences) return;

    const outputDiv = document.querySelector(".output-content") as HTMLDivElement;
    if (outputDiv) {
      const pdfName = `hemingway-doc${downloadCount}.pdf`;
      await generatePDF(outputDiv.innerHTML, pdfName);
      downloadCount++;
    }
  }
</script>

<style>
  .spinner {
    width: 56px;
    height: 56px;
    border: 6px solid #334155;
    border-top: 6px solid var(--color-indigo-600);
    border-radius: 50%;
    animation: spin 0.8s ease-in-out infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .output-content[contenteditable]:focus {
    outline: none;
  }

  .button-group {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }
</style>

<div class="w-full flex flex-col items-center gap-6">
  <!-- 🔗 Home anchor -->
  <div id="home"></div>

  <!-- 🔗 Input field -->
  <div class="w-full" transition:fade={{ duration: 400 }}>
    <TextInput on:text={handleText} />
  </div>

  <br/>
  <br/>

  <!-- 🔍 Analysis states -->
  {#if isAnalyzing}
    <div class="flex flex-col items-center justify-center p-10 gap-5" transition:fade={{ duration: 300 }}>
      <div class="spinner"></div>
      <p class="text-slate-400 text-lg">Analyzing your text...</p>
    </div>
  {:else if analysis}
    <div class="w-full" in:fly={{ y: 30, duration: 500, delay: 100 }} out:fade={{ duration: 300 }}>
      <div class="card output">
        <div class="output-content" contenteditable="true">
          <Highlight
            sentences={analysis.sentences}
            passive={analysis.passiveVoice}
            adverbs={analysis.adverbs}
          />
        </div>
        <div class="button-group">
          <button class="copy-button" on:click={copyText}>Copy</button>
          <button class="copy-button" on:click={downloadPDF}>Download PDF</button>
        </div>
      </div>
    </div>

    <div class="w-full" in:fly={{ y: 30, duration: 500, delay: 200 }} out:fade={{ duration: 300 }}>
      <SummaryPanel
        readability={analysis.readability}
        passiveCount={analysis.passiveVoice.length}
        adverbCount={analysis.adverbs.length}
        adverbDensity={analysis.adverbDensity}
      />
    </div>
  {:else if !text}
    <div class="text-center text-slate-400 p-10 text-lg" transition:fade={{ duration: 400 }}>
      <p>Your analysis will appear here.</p>
    </div>
  {/if}

  <!-- 🔗 About section -->
  <div id="about" class="text-center text-slate-300 p-10 text-lg">
    <h2 class="text-yellow-400 text-xl mb-2">About Hemingway-Style Readability Checker</h2>
  </div>

  <!-- 📘 Utility description -->
  <div class="w-full" in:fly={{ y: 30, duration: 500, delay: 300 }} out:fade={{ duration: 300 }}>
    <div class="text-center text-slate-300 italic text-md px-4 py-6">
      <p>
        This web utility offers <em>instant, in-browser readability analysis</em> inspired by Hemingway’s principles of clarity and simplicity. Designed for <strong>writers, educators, editors</strong>, and <strong>privacy-conscious professionals</strong>, it flags passive voice, complex sentence structures, and adverb density while computing grade-level scores using standardized formulas like <em>Flesch-Kincaid</em> and <em>ARI</em>.<br/><br/>
        Unlike AI-driven tools that rely on server-side processing or opaque models, this checker runs entirely <strong>client-side</strong>—<em>no logins, no data retention, no external calls</em>. Your text never leaves your browser. It’s <strong>stateless by design</strong>, with modular components that ensure full transparency and reproducibility. Export annotated results as PDF <em>without compromising privacy</em>.<br/><br/>
        Ideal for those who <strong>distrust ChatGPT or AI-generated feedback</strong>, this tool offers deterministic, rule-based analysis with <em>no hidden logic</em> or learning algorithms. You see exactly how your writing is evaluated, and why.<br/><br/>
        Whether you're refining a blog post, preparing academic material, or auditing content for accessibility, this utility gives you <strong>actionable insights</strong> without surveillance or complexity. Built with <em>accessibility and compliance</em> in mind, it supports keyboard navigation, screen readers, and mobile-first layouts—making it usable for everyone, everywhere.<br/><br/>
        <strong>No accounts. No tracking. Just clean, honest feedback.</strong>
      </p>
    </div>
  </div>

  <!-- 🔗 How to Use section -->
  <div id="how-to-use" class="text-center text-slate-300 p-10 text-lg">
    <h2 class="text-yellow-400 text-xl mb-2">How to Use</h2>
    <p>Paste your work, wait for analysis, then review the highlighted feedback and summary panel. Use the copy or PDF export buttons to save your results.</p>
  </div>

  <!-- ❓ FAQ section -->
  <div id="faq" class="text-center text-slate-300 p-10 text-lg">
    <h2 class="text-yellow-400 text-xl mb-2">FAQ</h2>
    <div class="faq-section">
      <p><strong>1. What is “Hemingway-style” readability?</strong><br/>
      <em>Hemingway-style readability</em> emphasizes short, clear sentences, active voice, and minimal use of adverbs or jargon. Inspired by Ernest Hemingway’s writing, it helps you communicate with clarity and impact. Our tool flags dense or passive constructions and guides you toward simpler, stronger prose.</p>

      <p><strong>2. How does this differ from AI writing assistants like ChatGPT?</strong><br/>
      Unlike ChatGPT, our tool doesn’t generate or rewrite your text. It performs <em>deterministic, rule-based analysis</em> entirely in your browser. <strong>No server calls, no model inference, no data retention</strong>. You stay in control.</p>

      <p><strong>3. Is my text stored or sent anywhere?</strong><br/>
      <strong>No.</strong> The checker is <em>100% client-side</em>. Your text never leaves your device. There are <strong>no logins, no cloud sync, and no hidden analytics</strong>—just pure, stateless functionality.</p>

      <p><strong>4. What readability formulas are used?</strong><br/>
      We use standardized metrics like <em>Flesch-Kincaid</em>, <em>Automated Readability Index (ARI)</em>, and <em>Gunning Fog</em> to compute grade-level scores. These formulas are transparent and reproducible.</p>

      <p><strong>5. Who is this tool for?</strong><br/>
      <em>Writers, educators, editors, developers, accessibility auditors</em>, and anyone who wants clean, readable content without AI interference. It’s especially useful for <strong>privacy-first workflows</strong> and <strong>compliance-sensitive environments</strong>.</p>

      <p><strong>6. Can I use this tool offline?</strong><br/>
      <strong>Yes.</strong> Once loaded, the tool runs entirely in-browser. You can even bundle it into local workflows or static sites <em>without needing internet access</em>.</p>

      <p><strong>7. Does it support non-English text?</strong><br/>
      Currently, it’s optimized for <em>English readability metrics</em>. However, we’re exploring modular language detection and translation flows—always with <strong>user control and privacy</strong> in mind.</p>

      <p><strong>8. How does it help with accessibility?</strong><br/>
      By flagging complex sentences and passive voice, it helps ensure your content is easier to understand for <em>screen readers and neurodiverse users</em>. The UI also supports <strong>keyboard navigation</strong> and <strong>high-contrast themes</strong>.</p>

      <p><strong>9. Can I export the results?</strong><br/>
      <strong>Yes.</strong> You can export annotated feedback as <em>PDF</em>—without uploading anything. All exports are generated locally.</p>

      <p><strong>10. Why should I trust this over other readability tools?</strong><br/>
      Most readability tools rely on cloud APIs or opaque scoring systems. Ours is <strong>transparent, reproducible, and privacy-respecting</strong>. If you don’t trust AI, <em>this tool is built for you</em>.</p>
    </div>
  </div>
</div>