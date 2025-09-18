import jsPDF from 'jspdf';

export async function generatePDF(htmlContent: string, fileName: string) {
  // Initialize jsPDF with A4 size
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Set margins (20mm on all sides)
  const margin = 20;
  const pageWidth = 210 - 2 * margin; // A4 width (210mm) minus margins
  const pageHeight = 297 - 2 * margin; // A4 height (297mm) minus margins
  let yPosition = margin;

  // Parse HTML content
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  console.log('Parsed HTML:', doc.body.innerHTML); // Debug log

  // Define text styles
  pdf.setFont('times', 'normal');
  pdf.setFontSize(12);
  pdf.setLineHeightFactor(1.5);

  // Process each paragraph (sentence block from Highlight.svelte)
  const paragraphs = doc.getElementsByTagName('p');
  for (let p of paragraphs) {
    let lineText = '';
    const words = Array.from(p.childNodes).map((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent?.trim() || '';
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as HTMLElement;
        if (el.tagName === 'MARK') {
          const text = el.textContent?.trim() || '';
          if (el.className.includes('bg-red-200')) {
            return `{red}${text}{/red}`;
          } else if (el.className.includes('bg-yellow-200')) {
            return `{yellow}${text}{/yellow}`;
          }
        }
      }
      return '';
    }).filter(Boolean).join(' ');

    if (words) {
      console.log('Processing sentence:', words); // Debug log
      const lines = pdf.splitTextToSize(words, pageWidth);
      lines.forEach((line) => {
        if (yPosition > pageHeight + margin) {
          pdf.addPage();
          yPosition = margin;
        }
        let xPosition = margin;
        let yOffset = 0;
        line.split(/({red}|{yellow}|{\/red}|{\/yellow})/).forEach((segment, index) => {
          if (segment === '{red}') {
            pdf.setTextColor(255, 0, 0); // Red for passive
          } else if (segment === '{yellow}') {
            pdf.setTextColor(255, 255, 0); // Yellow for adverbs
          } else if (segment === '{/red}' || segment === '{/yellow}') {
            pdf.setTextColor(0, 0, 0); // Reset to black
          } else if (segment.trim()) {
            const wordWidth = pdf.getTextWidth(segment.trim());
            if (xPosition + wordWidth > margin + pageWidth) {
              yPosition += 6; // Move to next line
              xPosition = margin;
            }
            pdf.text(segment.trim(), xPosition, yPosition + yOffset);
            xPosition += wordWidth + 2; // Add small space between words
          }
        });
        yPosition += 6; // Move to next line after processing
      });
    }
  }

  // Download the PDF
  pdf.save(fileName);
}