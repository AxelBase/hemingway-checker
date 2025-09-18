/// <reference types="vitest" />
import { describe, it, expect, beforeAll } from "vitest";
import { render } from "@testing-library/svelte";
import { configureAxe } from "jest-axe";
import TextInput from "../../src/lib/components/TextInput.svelte";

const axe = configureAxe();

beforeAll(() => {
  globalThis.document = document;
});

describe("Accessibility checks", () => {
  it("TextInput has no accessibility violations", async () => {
    const { container } = render(TextInput);
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });
});
