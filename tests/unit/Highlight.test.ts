/// <reference types="vitest" />
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/svelte";
import Highlight from "../../src/lib/components/Highlight.svelte";

// Stub global document for jsdom compatibility
vi.stubGlobal("document", globalThis.document);

describe("Highlight component", () => {
  it("renders text with adverb highlight", () => {
    const { getByText } = render(Highlight, {
      props: {
        text: "She quickly ran home",
        passiveIndices: [],
        adverbs: [{ word: "quickly", sentenceIndex: 0 }]
      }
    });
    const el = getByText("quickly");
    expect(el).toBeTruthy();
  });

  it("renders plain words without highlights", () => {
    const { getByText } = render(Highlight, {
      props: {
        text: "John kicked the ball",
        passiveIndices: [],
        adverbs: []
      }
    });
    const el = getByText("John");
    expect(el).toBeTruthy();
  });
});
