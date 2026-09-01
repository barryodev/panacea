import { languages } from "./languages";

/**
 * Builds a single Google Fonts CSS2 stylesheet URL that pulls in every
 * font family referenced in languages.ts, so we only make one <link> request.
 */
export function googleFontsHref(): string {
  const uniqueFamilies = Array.from(new Set(languages.map((l) => l.font)));
  const familyParams = uniqueFamilies
    .map((family) => `family=${family.trim().replace(/\s+/g, "+")}`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${familyParams}&display=swap`;
}
