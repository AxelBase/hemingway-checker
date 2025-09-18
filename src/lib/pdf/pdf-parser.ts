import { getDocument } from "pdfjs-dist/legacy/build/pdf";

export interface ParsedItem {
  str: string;
  x: number;
  y: number;
  fontName: string;
}

export interface ParsedPage {
  text: string;
  items: ParsedItem[];
}

export async function parsePDF(file: File): Promise<ParsedPage[]> {
  const buffer = await file.arrayBuffer();
const pdf = await getDocument({ data: buffer }).promise;

  const pages: ParsedPage[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();

    const items: ParsedItem[] = textContent.items.map((it: any) => ({
      str: "str" in it ? it.str : "",
      x: it.transform[4],
      y: it.transform[5],
      fontName: it.fontName
    }));

    pages.push({
      text: items.map((i) => i.str).join(" "),
      items
    });

    // Stream parse: yield/await per page → avoids big memory spike
  }

  return pages;
}
