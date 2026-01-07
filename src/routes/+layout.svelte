<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import "../global.css";

  const currentYear = 2026;

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<nav class="navbar" align="center">
  <div class="nav-left">
    <a href="{base}/" class="brand">Hemingway Checker</a>

    <!-- Enhanced Buy Me a Coffee Button -->
    <div class="coffee-dropdown position-relative" use:clickOutside on:click_outside={closeDropdown}>
      <button
        class="bmac-button"
        on:click={toggleDropdown}
        aria-label="Support the project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
        </svg>
        <span>Buy me a Coffee</span>
        <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7,10L12,15L17,10H7Z"/>
        </svg>
      </button>

      {#if isDropdownOpen}
        <div class="bmac-dropdown" transition:fly={{ y: -12, duration: 300 }}>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
            <span class="amount">$3</span> One Coffee
          </a>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
            <span class="amount">$5</span> Two Coffees
          </a>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
            <span class="amount">$10</span> Three Coffees
          </a>
          <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
            Custom Amount
          </a>
          <a
            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=HemingwayChecker&message=Support"
            on:click={closeDropdown}
            class="custom-amount"
          >
            Buy via Bitcoin
          </a>
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
      <p>© {currentYear} Hemingway Checker</p>
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
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .navbar {
    width: 100%;
    max-width: 60rem;
    display: flex;
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

  .nav-left, .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .brand {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--color-accent);
    text-decoration: none;
    transition: transform 0.3s var(--transition-ease);
  }

  .brand:hover {
    transform: scale(1.05);
  }

  .nav-link {
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0;
    transition: color 0.3s var(--transition-ease), transform 0.3s var(--transition-ease);
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

  /* Enhanced Buy Me a Coffee Button */
  .bmac-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, var(--color-accent), #eab308);
    color: #0f172a;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
    border-radius: 9999px;
    border: none;
    box-shadow: 0 4px 14px rgba(250, 204, 21, 0.3);
    cursor: pointer;
    transition: all 0.3s var(--transition-ease);
  }

  .bmac-button:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 8px 20px rgba(250, 204, 21, 0.4);
  }

  .bmac-button:active {
    transform: translateY(0);
  }

  .dropdown-arrow {
    transition: transform 0.3s ease;
  }

  .bmac-dropdown {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    width: 260px;
    background: #1e293b;
    border: 1px solid var(--color-gray-300);
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    color: var(--color-text-primary);
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.25s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(250, 204, 21, 0.15);
    color: var(--color-accent);
    padding-left: 1.75rem;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--color-accent);
    font-size: 1.15rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--color-accent);
    border-top: 1px solid var(--color-gray-300);
    justify-content: center !important;
  }

  @media (max-width: 640px) {
    .nav-left, .nav-right {
      flex-direction: column;
      gap: 1rem;
    }
    .bmac-button span {
      display: none;
    }
    .bmac-button {
      padding: 0.75rem;
    }
  }
</style>