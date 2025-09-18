/// <reference lib="webworker" />
import { translateText } from "../lib/i18n/translate";

self.onmessage = async (e: MessageEvent) => {
  const { text, opts, job } = e.data as { text: string; opts: any; job: number };
  try {
    const result = await translateText(text, opts);
    (self as DedicatedWorkerGlobalScope).postMessage({ ok: true, result, job });
  } catch (err) {
    (self as DedicatedWorkerGlobalScope).postMessage({
      ok: false,
      error: String(err),
      job
    });
  }
};
