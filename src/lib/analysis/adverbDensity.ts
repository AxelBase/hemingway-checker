import type { Sentence } from './sentenceSplitter';

export interface AdverbFlag {
	word: string;
	sentenceIndex: number;
}

export function detectAdverbs(sentences: Sentence[]): AdverbFlag[] {
	const results: AdverbFlag[] = [];

	sentences.forEach((s, i) => {
		s.words.forEach((w) => {
			const lower = w.toLowerCase();
			if (lower.endsWith('ly') && !/(family|supply|reply|apply)$/.test(lower)) {
				results.push({ word: w, sentenceIndex: i });
			}
		});
	});

	return results;
}

export function adverbDensity(sentences: Sentence[]): number {
	const words = sentences.flatMap((s) => s.words);
	if (words.length === 0) return 0;
	const adverbs = detectAdverbs(sentences);
	return adverbs.length / words.length;
}
