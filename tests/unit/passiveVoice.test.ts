import { describe, it, expect } from "vitest";
import { splitSentences } from "../../src/lib/analysis/sentenceSplitter.js";
import { detectPassiveVoice } from "../../src/lib/analysis/passiveVoice.js";

describe("detectPassiveVoice", () => {
  it("flags passive voice sentences", () => {
    const sents = splitSentences("The ball was kicked by John.");
    const results = detectPassiveVoice(sents);
    expect(results.length).toBeGreaterThan(0);
  });

  it("does not flag active voice", () => {
    const sents = splitSentences("John kicked the ball.");
    const results = detectPassiveVoice(sents);
    expect(results.length).toBe(0);
  });
});
