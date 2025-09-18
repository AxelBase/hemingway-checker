<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{
    option: "keep" | "toEnglish" | "roundTrip";
  }>();

  export let detectedLanguage: string = "Unknown";
  let choice: "keep" | "toEnglish" | "roundTrip" = "keep";

  function apply() {
    dispatch("option", choice);
  }
</script>

<div class="border p-4 rounded space-y-2">
  <h2 class="font-bold">Language Settings</h2>
  <p>Detected language: <strong>{detectedLanguage}</strong></p>

  <label class="block">
    <input type="radio" bind:group={choice} value="keep" />
    Keep original language
  </label>

  <label class="block">
    <input type="radio" bind:group={choice} value="toEnglish" />
    Convert to English for analysis
  </label>

  <label class="block">
    <input type="radio" bind:group={choice} value="roundTrip" />
    Analyze in English, then translate results back
  </label>

  <button class="px-3 py-1 border rounded bg-blue-600 text-white" on:click={apply}>
    Apply
  </button>
</div>
