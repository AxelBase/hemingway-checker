import { describe, it, expect } from "vitest";
import { splitSentences } from "../../src/lib/analysis/sentenceSplitter.js";
import { computeReadability } from "../../src/lib/analysis/readability.js";

describe("computeReadability", () => {
  it("calculates scores for simple text", () => {
    const sentences = splitSentences("This is a test. It should be simple.");
    const result = computeReadability(sentences);
    expect(result.fleschKincaid).toBeTypeOf("number");
    expect(result.ari).toBeTypeOf("number");
  });
});
