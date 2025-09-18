<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ text: string }>();
  let text = "";

  function onInput(e: Event) {
    text = (e.target as HTMLTextAreaElement).value;
    dispatch("text", text);
  }
  
  function clearText() {
    text = "";
    dispatch("text", text);
  }
</script>

<div class="card relative">
  <textarea
    class="w-full"
    bind:value={text}
    on:input={onInput}
    placeholder="Paste or type your text here..."
  ></textarea>

  <br/>

  {#if text}
    <button 
      on:click={clearText} 
      class="absolute top-4 right-4 mt-2 ml-2 text-slate-500 hover:text-slate-800 transition-all duration-200 transform hover:scale-110"
      title="Clear text"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    </button>
  {/if}
</div>
