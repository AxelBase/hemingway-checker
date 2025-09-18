import { describe, it, expect } from "vitest";
import { splitSentences } from "../src/lib/analysis/sentenceSplitter";

describe("Fuzzing tests", () => {
  it("handles emoji gracefully", () => {
    const input = "Hello 😊 world!";
    const sentences = splitSentences(input);
    expect(sentences.length).toBeGreaterThan(0);
  });

  it("handles malformed input", () => {
    const input = "This <<<<<<>>>> is broken.";
    const sentences = splitSentences(input);
    expect(sentences[0].text).toContain("broken");
  });

  it("handles mixed language text", () => {
    const input = "Bonjour! This is English. こんにちは";
    const sentences = splitSentences(input);
    expect(sentences.length).toBeGreaterThan(1);
  });
});
