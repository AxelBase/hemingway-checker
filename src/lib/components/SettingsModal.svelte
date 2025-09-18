<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ settings: any }>();

  let show = false;
  let thresholds = { longSentence: 25, adverbLimit: 0.1 };

  function apply() {
    dispatch("settings", thresholds);
    show = false;
  }
</script>

<div>
  <button class="border px-2 py-1" on:click={() => (show = true)}>Settings</button>

  {#if show}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-4 rounded w-80">
        <h2 class="font-bold mb-2">Settings</h2>
        <label class="block mb-2">
          Long sentence threshold:
          <input type="number" bind:value={thresholds.longSentence} class="border ml-2 w-16" />
        </label>
        <label class="block mb-2">
          Adverb density limit:
          <input type="number" step="0.01" bind:value={thresholds.adverbLimit} class="border ml-2 w-16" />
        </label>
        <div class="flex gap-2 justify-end">
          <button on:click={() => (show = false)}>Cancel</button>
          <button class="bg-blue-600 text-white px-2" on:click={apply}>Apply</button>
        </div>
      </div>
    </div>
  {/if}
</div>
