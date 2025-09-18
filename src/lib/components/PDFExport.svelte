<script lang="ts">
  export let pdfBlob: Blob | null = null;

  function download() {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rephrased.pdf";
    a.click();
    URL.revokeObjectURL(url);
  }
</script>

<div class="space-y-2">
  <button
    class="px-3 py-1 border rounded bg-green-600 text-white disabled:opacity-50"
    on:click={download}
    disabled={!pdfBlob}
  >
    Download Rephrased PDF
  </button>
</div>
