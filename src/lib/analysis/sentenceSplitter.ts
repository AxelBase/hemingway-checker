export interface Sentence {
  text: string;
  start: number;
  end: number;
  words: string[];
}

const ABBREVIATIONS = /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|St)\.$/;

export function splitSentences(text: string): Sentence[] {
  const results: Sentence[] = [];
  let start = 0;

  const tokens = text.split(/(\s+)/); // preserve spaces
  let buffer = "";

  tokens.forEach((tok) => {
    buffer += tok;
    if (/[.!?]$/.test(tok) && !ABBREVIATIONS.test(buffer.trim())) {
      const trimmed = buffer.trim();
      const words = trimmed.split(/\s+/).filter(Boolean);
      results.push({
        text: trimmed,
        start,
        end: start + trimmed.length,
        words
      });
      start += buffer.length;
      buffer = "";
    }
  });

  if (buffer.trim().length > 0) {
    const trimmed = buffer.trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    results.push({
      text: trimmed,
      start,
      end: start + trimmed.length,
      words
    });
  }

  return results;
}
