import type { Sentence } from "./sentenceSplitter.js";

export interface PassiveVoiceFlag {
  sentence: string;
  index: number;
}

const beForms = /\b(am|is|are|was|were|be|been|being)\b/i;
const pastParticiple = /\b\w+(ed|en)\b/i;

export function detectPassiveVoice(sentences: Sentence[]): PassiveVoiceFlag[] {
  const results: PassiveVoiceFlag[] = [];

  sentences.forEach((s, i) => {
    if (beForms.test(s.text) && pastParticiple.test(s.text)) {
      results.push({ sentence: s.text, index: i });
    }
  });

  return results;
}
