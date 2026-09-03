import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { languages } from "../lib/languages";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const outputPath = path.join(projectRoot, "lib/languages_enriched.ts");
const fontLicenses = ["ofl", "ufl", "apache"] as const;
const requestHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "hello-world-cloud-language-scraper",
};
const requestIntervalMs = 2000;
const maxAttempts = 4;
let lastRequestAt = 0;

interface EnrichedLanguage {
  lang: string;
  text: string;
  font: string;
  fontAuthor: string | null;
  fontDescription: string | null;
  wikiEntry: string | null;
}

function normalizeName(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function wait(milliseconds: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchText(
  url: string,
  headers: HeadersInit = {},
): Promise<string | null> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const elapsed = Date.now() - lastRequestAt;
    if (elapsed < requestIntervalMs) await wait(requestIntervalMs - elapsed);

    try {
      lastRequestAt = Date.now();
      const response = await fetch(url, {
        headers: { ...requestHeaders, ...headers },
      });
      if (response.ok) return await response.text();

      const retryAfter = Number(response.headers.get("retry-after"));
      const retryDelay = Number.isFinite(retryAfter)
        ? retryAfter * 1000
        : 1000 * 2 ** (attempt - 1);
      console.warn(
        `Request failed (${response.status}), attempt ${attempt}/${maxAttempts}: ${url}`,
      );

      if (![429, 500, 502, 503, 504].includes(response.status)) return null;
      if (attempt < maxAttempts) await wait(retryDelay);
    } catch (error) {
      console.warn(`Request failed, attempt ${attempt}/${maxAttempts}: ${url}`, error);
      if (attempt < maxAttempts) await wait(1000 * 2 ** (attempt - 1));
    }
  }

  return null;
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function findWikiEntry(language: string): Promise<string | null> {
  const candidates = [
    `${language}_language`.replace(/\s+/g, "_"),
    language.replace(/\s+/g, "_"),
  ];

  for (const candidate of candidates) {
    const encodedCandidate = encodeURIComponent(candidate);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedCandidate}`;
    const responseText = await fetchText(url, {
      Accept: "application/json",
    });
    if (responseText) return candidate;
  }

  return null;
}

async function getFontDetails(
  font: string,
): Promise<Pick<EnrichedLanguage, "fontAuthor" | "fontDescription">> {
  const fontDir = normalizeName(font);

  for (const license of fontLicenses) {
    const baseUrl = `https://raw.githubusercontent.com/google/fonts/main/${license}/${fontDir}`;
    const metadataText = await fetchText(`${baseUrl}/METADATA.pb`);
    if (!metadataText) continue;

    const designerMatch = metadataText.match(/designer:\s*"([^"]+)"/);
    const descriptionHtml = await fetchText(`${baseUrl}/DESCRIPTION.en_us.html`);
    return {
      fontAuthor: designerMatch?.[1] ?? null,
      fontDescription: descriptionHtml ? stripHtml(descriptionHtml) : null,
    };
  }

  console.warn(`Font directory not found: ${font}`);
  return { fontAuthor: null, fontDescription: null };
}

async function enrichLanguages(): Promise<void> {
  const enriched: EnrichedLanguage[] = [];

  for (const item of languages) {
    console.log(`Processing: ${item.lang}...`);
    const wikiEntry = await findWikiEntry(item.lang);
    const fontDetails = await getFontDetails(item.font);

    enriched.push({ ...item, ...fontDetails, wikiEntry });
  }

  const fileContent = `import type { LanguageWord } from "./languages";

export interface EnrichedLanguageWord extends LanguageWord {
  fontAuthor: string | null;
  fontDescription: string | null;
  wikiEntry: string | null;
}

export const languagesEnriched: EnrichedLanguageWord[] = ${JSON.stringify(enriched, null, 2)};
`;

  await fs.writeFile(outputPath, fileContent, "utf8");
  console.log(`Data enrichment complete: ${outputPath}`);
}

enrichLanguages().catch((error) => {
  console.error("Data enrichment failed", error);
  process.exitCode = 1;
});