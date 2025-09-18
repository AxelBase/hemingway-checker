<script lang="ts">
  export let sentences: { text: string }[] = [];
  export let passive: { index: number }[] = [];
  export let adverbs: { word: string; sentenceIndex: number }[] = [];

  function isPassive(index: number) {
    return passive.some((p) => p.index === index);
  }

  function adverbsInSentence(index: number) {
    return adverbs.filter((a) => a.sentenceIndex === index).map((a) => a.word.toLowerCase());
  }
</script>

<div class="prose max-w-none text-gray-800">
  {#each sentences as s, i}
    <p>
      {#each s.text.split(/\s+/) as word}
        {#if adverbsInSentence(i).includes(word.toLowerCase())}
          <mark class="bg-yellow-200 rounded px-1" aria-label="Adverb">{word}</mark>
        {:else if isPassive(i)}
          <mark class="bg-red-200 rounded px-1" aria-label="Passive voice">{word}</mark>
        {:else}
          {word}
        {/if}
        {' '}
      {/each}
    </p>
  {/each}
</div>
