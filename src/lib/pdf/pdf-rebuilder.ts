import { jsPDF } from "jspdf";
import type { ParsedPage } from "./pdf-parser";

// Embed fallback font (assets/fonts/)
import fontData from "../../assets/fonts/TimesNewRoman-normal.ttf";

export async function rebuildPDF(
  pages: ParsedPage[],
  rephrasedTexts: string[]
): Promise<Blob> {
  const doc = new jsPDF();

  // Register embedded font
  doc.addFileToVFS("TimesNewRoman.ttf", fontData as unknown as string);
  doc.addFont("TimesNewRoman.ttf", "TimesNewRoman", "normal");
  doc.setFont("TimesNewRoman");

  pages.forEach((page, i) => {
    if (i > 0) doc.addPage();
    const items = page.items;
    const words = rephrasedTexts[i]?.split(/\s+/) ?? page.text.split(/\s+/);

    // Map words back to original positions (naive 1:1 mapping)
    items.forEach((it, idx) => {
      const word = words[idx] || it.str;
      doc.setFontSize(12);
      doc.text(word, it.x / 5, 297 - it.y / 5); // crude scale → adjust
    });
  });

  return doc.output("blob");
}
