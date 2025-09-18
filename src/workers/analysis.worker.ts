/// <reference lib="webworker" />
import { analyze } from '../lib/analysis/index';

self.onmessage = (e: MessageEvent) => {
	const { text, job } = e.data as { text: string; job: number };
	try {
		const result = analyze(text);
		(self as DedicatedWorkerGlobalScope).postMessage({ ok: true, result, job });
	} catch (err) {
		(self as DedicatedWorkerGlobalScope).postMessage({ ok: false, error: String(err), job });
	}
};
