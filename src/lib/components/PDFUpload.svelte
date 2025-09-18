<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ file: File }>();
  let file: File | null = null;
  let loading = false;

  function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      file = target.files[0];
      if (file.size > 10_000_000) {
        alert("Warning: Large PDF may be slow to process.");
      }
      loading = true;
      dispatch("file", file);
      loading = false;
    }
  }

  function onDrop(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer?.files?.length) {
      file = e.dataTransfer.files[0];
      dispatch("file", file);
    }
  }

  function allowDrop(e: DragEvent) {
    e.preventDefault();
  }
</script>

<div
  class="border-2 border-dashed p-6 text-center rounded"
  on:drop={onDrop}
  on:dragover={allowDrop}
>
  <p>Drag & drop a PDF here, or select below:</p>
  <input type="file" accept="application/pdf" on:change={onFileChange} />
  {#if file}
    <p class="mt-2">Selected: {file.name}</p>
    {#if loading}
      <p>Processing...</p>
    {/if}
  {/if}
</div>
