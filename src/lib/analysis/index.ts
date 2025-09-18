import { splitSentences } from "./sentenceSplitter.js";
import { computeReadability } from "./readability.js";
import { detectPassiveVoice } from "./passiveVoice.js";
import { detectAdverbs, adverbDensity } from "./adverbDensity.js";

export function analyze(text: string) {
  const sentences = splitSentences(text);
  const readability = computeReadability(sentences);
  const passiveFlags = detectPassiveVoice(sentences);
  const adverbs = detectAdverbs(sentences);
  const density = adverbDensity(sentences);

  return {
    sentences,
    readability,
    passiveVoice: passiveFlags,
    adverbs,
    adverbDensity: density,
  };
}
