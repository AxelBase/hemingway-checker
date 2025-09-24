<script>
  import { base } from '$app/paths';
  import "../global.css";
  import { onMount } from "svelte";

  const PAYPAL_ME_NAME = "AxelLab427";
  let dropdownOpen = false;
  let dropdownRef = null;
  let mouseLeaveTimeout = null;

  function pay(amount) {
    const url = `https://paypal.me/${encodeURIComponent(PAYPAL_ME_NAME)}/${amount}USD`;
    window.open(url, "_blank", "noopener");
    dropdownOpen = false;
  }

  function toggleDropdown(event) {
    event?.stopPropagation?.();
    dropdownOpen = !dropdownOpen;
    if (dropdownOpen && mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
    }
  }

  function closeDropdown() {
    mouseLeaveTimeout = setTimeout(() => {
      dropdownOpen = false;
    }, 200); // 200ms delay to allow mouse movement to menu
  }

  function handleMenuMouseEnter() {
    if (mouseLeaveTimeout) {
      clearTimeout(mouseLeaveTimeout);
    }
  }

  function handleDocumentClick(e) {
    if (dropdownRef && !dropdownRef.contains(e.target)) {
      dropdownOpen = false;
    }
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("click", handleDocumentClick);
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }
  });
</script>

<nav class="navbar" align="center">
  <div class="nav-left">
    <a href="{base}/" class="brand">AxelLab</a>

    <!-- Coffee dropdown (integrated) -->
    <div class="coffee-dropdown" bind:this={dropdownRef} on:mouseleave={closeDropdown} role="group">
      <button
        class="coffee-button"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        on:click={toggleDropdown}
      >
        ☕ Buy me a coffee
      </button>

      {#if dropdownOpen}
        <div class="coffee-menu" role="menu" aria-label="Buy me a coffee" on:mouseenter={handleMenuMouseEnter} tabindex="-1">
          <button role="menuitem" on:click={() => pay(1)}>$1</button>
          <button role="menuitem" on:click={() => pay(3)}>$3</button>
          <button role="menuitem" on:click={() => pay(5)}>$5</button>
          <button role="menuitem" on:click={() => pay(10)}>$10</button>
        </div>
      {/if}
    </div>
  </div>

  <div class="nav-right">
    <a href="{base}/" class="nav-link">Home</a>
    <a href="{base}/blog" class="nav-link">Blog</a>
    <a href="{base}#about" class="nav-link">About</a>
    <a href="{base}#how-to-use" class="nav-link">How to Use</a>
    <a href="{base}#faq" class="nav-link">FAQ</a>
  </div>
</nav>

<main class="min-h-screen flex justify-center items-center p-4 sm:p-8">
  <div class="w-full max-w-4xl flex flex-col items-center text-center">
    <header class="mb-8 animate-fade-in">
      <h1 class="text-4xl sm:text-5xl font-extrabold text-yellow-400 tracking-tight">
        Hemingway-Style Readability Checker
      </h1>
      <p class="text-slate-300 mt-3 text-lg">
        Refine your writing with clarity and precision.
      </p>
    </header>

    <slot />

    <footer class="mt-10 text-center text-sm text-slate-400 py-6 w-full border-t border-slate-700">
      <p>© 2025 Hemingway Checker</p>
      <div class="footer-links mt-2 flex justify-center gap-4">
        <a href="{base}/privacy">Privacy Policy</a>
        <a href="{base}/terms">Terms</a>
      </div>
    </footer>
  </div>
</main>

<style>
  .animate-fade-in {
    animation: fadeIn 1s var(--transition-ease);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .navbar {
    width: 100%;
    max-width: 60rem;
    display: flex;
    align-self: center;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1e293b;
    box-shadow: var(--shadow-md);
    border-radius: var(--radius-lg);
    margin-bottom: 2rem;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .brand {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-accent);
    text-decoration: none;
    transition: transform 0.3s var(--transition-ease);
  }

  .brand:hover {
    transform: scale(1.05);
    text-decoration: underline;
  }

  .coffee-dropdown {
    position: relative;
    display: inline-block;
  }

  .coffee-button {
    background-color: var(--color-indigo-600);
    color: white;
    border: none;
    border-radius: var(--radius-md);
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s var(--transition-ease), transform 0.2s var(--transition-ease);
  }

  .coffee-button:hover {
    background-color: var(--color-indigo-800);
    transform: scale(1.05);
  }

  .coffee-menu {
    position: absolute;
    top: 100%; /* Places menu directly below button */
    left: 0;
    background-color: #2d3748;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    z-index: 10;
    min-width: 100px;
    margin-top: 0; /* Remove any gap */
  }

  .coffee-menu button {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    background: none;
    border: none;
    color: #e2e8f0;
    text-align: left;
    cursor: pointer;
    font-size: 0.875rem;
  }

  .coffee-menu button:hover {
    background-color: var(--color-indigo-600);
  }

  .nav-right {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s var(--transition-ease), transform 0.2s var(--transition-ease);
  }

  .nav-link:hover {
    color: var(--color-accent);
    transform: translateY(-2px);
  }

  .footer-links a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }
</style>