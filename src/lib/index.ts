import { analyze } from "../lib/analysis/index";
import { detectLanguage, needsTranslation } from "../lib/i18n/language";
import { translateText } from "../lib/i18n/translate";

export interface AnalysisResult {
  sentences: any[];
  readability: { fleschKincaid: number; ari: number };
  passiveVoice: any[];
  adverbs: any[];
  adverbDensity: number;
}

export async function processText(
  text: string,
  choice: "keep" | "toEnglish" | "roundTrip"
): Promise<{ lang: string; analysis: AnalysisResult | string }> {
  const lang = detectLanguage(text);

  let workingText = text;
  if (needsTranslation(lang, choice)) {
    workingText = await translateText(text, {
      direction: "toEnglish",
      targetLang: lang
    });
  }

  const analysis = analyze(workingText);

  if (choice === "roundTrip" && lang !== "eng") {
    // Only translate human-readable strings, not numbers
    const back = await translateText(
      `Readability: FK=${analysis.readability.fleschKincaid}, ARI=${analysis.readability.ari}`,
      { direction: "fromEnglish", targetLang: lang }
    );
    return { lang, analysis: back };
  }

  return { lang, analysis };
}
