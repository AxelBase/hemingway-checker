<script lang="ts">
  import PDFUpload from "../../lib/components/PDFUpload.svelte";
  import PDFExport from "../../lib/components/PDFExport.svelte";
  import { parsePDF } from "../../lib/pdf/pdf-parser";
  import { rebuildPDF } from "../../lib/pdf/pdf-rebuilder";

  let pdfBlob: Blob | null = null;

  async function handlePDF(file: File) {
    const parsed = await parsePDF(file);
    const rephrased = parsed.map((p) => "[Rephrased] " + p.text);
    pdfBlob = await rebuildPDF(parsed, rephrased);
  }
</script>

<div class="p-6 space-y-4">
  <PDFUpload on:file={(e) => handlePDF(e.detail)} />
  <PDFExport {pdfBlob} />
</div>
