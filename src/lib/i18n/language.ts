import { franc } from "franc";

export function detectLanguage(text: string): string {
  if (!text || text.trim().length === 0) return "unknown";
  const lang = franc(text, { minLength: 5 });
  return lang === "und" ? "unknown" : lang;
}

export function needsTranslation(
  detected: string,
  userChoice: "keep" | "toEnglish" | "roundTrip"
): boolean {
  if (detected === "eng") return false; // ISO 639-3 code from franc
  return userChoice !== "keep";
}
