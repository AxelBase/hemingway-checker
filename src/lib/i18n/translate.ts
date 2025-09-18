export interface TranslationOptions {
  direction: "toEnglish" | "fromEnglish";
  targetLang: string;
}

// Mocked async translator (replace with real API or local model)
async function callTranslatorAPI(text: string, opts: TranslationOptions): Promise<string> {
  // Example: here you’d call a secure API or WASM model
  if (opts.direction === "toEnglish") {
    return `[EN] ${text}`;
  }
  return `[${opts.targetLang}] ${text}`;
}

// Split into chunks (approx sentence-level)
function chunkText(text: string, maxLen = 500): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];
  let buffer = "";
  for (const s of sentences) {
    if ((buffer + s).length > maxLen) {
      chunks.push(buffer.trim());
      buffer = s;
    } else {
      buffer += " " + s;
    }
  }
  if (buffer.trim()) chunks.push(buffer.trim());
  return chunks;
}

export async function translateText(
  text: string,
  opts: TranslationOptions
): Promise<string> {
  const chunks = chunkText(text);
  const translated: string[] = [];
  for (const c of chunks) {
    translated.push(await callTranslatorAPI(c, opts));
  }
  return translated.join(" ");
}
