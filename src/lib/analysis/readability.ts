import type { Sentence } from './sentenceSplitter';

export interface ReadabilityScores {
	fleschKincaid: number;
	ari: number;
}

function countSyllables(word: string): number {
	const cleaned = word.toLowerCase().replace(/[^a-z]/g, '');
	if (!cleaned) return 0;

	// quick dictionary exceptions
	const exceptions: Record<string, number> = {
		the: 1,
		apple: 2,
		people: 2,
		queue: 1
	};
	if (exceptions[cleaned]) return exceptions[cleaned];

	const matches = cleaned.match(/[aeiouy]+/g);
	return matches ? matches.length : 1;
}

export function computeReadability(sentences: Sentence[]): ReadabilityScores {
	const words = sentences.flatMap((s) => s.words);
	const wordCount = words.length || 1;
	const sentenceCount = sentences.length || 1;
	const syllableCount = words.reduce((acc, w) => acc + countSyllables(w), 0);

	const fleschKincaid =
		206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllableCount / wordCount);

	const ari =
		4.71 * (words.join('').length / wordCount) + 0.5 * (wordCount / sentenceCount) - 21.43;

	return { fleschKincaid, ari };
}
