"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { languagesEnriched } from "@/lib/languages";
import {
  calculateLayout,
  getFontUrl,
  truncateWithEllipsis,
  type PlacedWord,
} from "@/lib/cloudUtils";
import type { EnrichedLanguageWord } from "@/lib/languages";

const DESCRIPTION_MAX_LENGTH = 180;

export default function WordCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [placedWords, setPlacedWords] = useState<PlacedWord[] | null>(null);
  const [selectedWord, setSelectedWord] = useState<EnrichedLanguageWord | null>(
    null,
  );
  const [seed, setSeed] = useState(0);

  const computeLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    setPlacedWords(
      calculateLayout(
        languagesEnriched,
        container.clientWidth,
        container.clientHeight,
        ctx,
      ),
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (typeof document !== "undefined" && "fonts" in document) {
        try {
          await document.fonts.ready;
        } catch {
          // fall through and lay out with whatever metrics are available
        }
      }
      if (!cancelled) computeLayout();
    };

    run();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(computeLayout, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeout);
    };
  }, [computeLayout, seed]);

  useEffect(() => {
    if (!selectedWord) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedWord(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedWord]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-svh w-full overflow-hidden bg-[#f5f5f4]"
    >
      <div className="pointer-events-none absolute left-6 top-[max(26px,env(safe-area-inset-top))] font-[Trebuchet_MS,sans-serif] text-sm font-semibold leading-[1.2] tracking-normal text-[#55534d] max-[600px]:bottom-[max(26px,env(safe-area-inset-bottom))] max-[600px]:left-4 max-[600px]:right-28 max-[600px]:top-auto max-[600px]:text-[13px]">
        Hello World in 50 languages
      </div>

      <button
        className="absolute right-5 top-[max(14px,env(safe-area-inset-top))] min-h-10 cursor-pointer rounded-md border border-[#cfcfca] bg-transparent px-3 py-1.5 font-[Trebuchet_MS,sans-serif] text-[13px] font-semibold tracking-normal text-[#55534d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4a4a46] max-[600px]:bottom-[max(12px,env(safe-area-inset-bottom))] max-[600px]:right-3 max-[600px]:top-auto max-[600px]:min-h-11 max-[600px]:px-3.5 max-[600px]:py-2"
        onClick={() => setSeed((s) => s + 1)}
      >
        Shuffle
      </button>

      {placedWords?.map((word) => {
        const details = languagesEnriched.find(
          (item) => item.lang === word.lang,
        );
        if (!details) return null;

        return (
          <button
            key={word.lang}
            type="button"
            title={word.lang}
            aria-label={`Show information about ${details.nativeName} (${details.lang})`}
            onClick={() => setSelectedWord(details)}
            className="absolute cursor-pointer border-0 bg-transparent p-0"
            style={{
              left: word.x,
              top: word.y,
              width: word.width,
              height: word.height,
              userSelect: "none",
            }}
          >
            <span
              className="absolute left-1/2 top-1/2 flex items-center justify-center whitespace-nowrap leading-none"
              style={{
                width: word.rotation === 90 ? word.height : word.width,
                height: word.rotation === 90 ? word.width : word.height,
                fontFamily: `"${word.font}", sans-serif`,
                fontSize: word.fontSize,
                color: "#000",
                transform: `translate(-50%, -50%) rotate(${word.rotation}deg)`,
                transformOrigin: "center center",
                pointerEvents: "none",
              }}
            >
              {word.text}
            </span>
          </button>
        );
      })}

      {selectedWord && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/25 p-5"
          role="presentation"
          onClick={() => setSelectedWord(null)}
        >
          <section
            className="relative z-20 w-full max-w-md rounded-[28px] bg-[#f5f5f4] p-7 text-[#22221f] shadow-2xl max-[600px]:rounded-3xl max-[600px]:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#55534d] hover:bg-black/5"
              aria-label="Close language information"
              onClick={() => setSelectedWord(null)}
            >
              x
            </button>
            <p
              className="mb-5 text-3xl leading-7 text-[#22221f]"
              style={{ fontFamily: `"${selectedWord.font}", sans-serif` }}
            >
              {selectedWord.text}
            </p>
            <div className="my-5 border-t border-[#cfcfca]" />
            <p className="mb-2 font-[Trebuchet_MS,sans-serif] text-xs font-semibold uppercase tracking-[0.12em] text-[#77746c]">
              Language
            </p>
            <h2
              id="language-dialog-title"
              className="pr-8 font-[Trebuchet_MS,sans-serif] text-2xl font-semibold leading-tight"
            >
              {selectedWord.nativeName} ({selectedWord.lang})
            </h2>

            <p className="mt-4 text-base leading-6 text-[#3f3e39]">
              {truncateWithEllipsis(
                selectedWord.wikiExtract ?? "No Wikipedia summary available.",
                DESCRIPTION_MAX_LENGTH,
              )}
            </p>
            {selectedWord.wikiUrl && (
              <a
                className="mt-2 inline-block font-[Trebuchet_MS,sans-serif] text-sm font-semibold text-[#55534d] underline underline-offset-4"
                href={selectedWord.wikiUrl}
                target="_blank"
                rel="noreferrer"
              >
                [Read More]
              </a>
            )}
            <div className="my-5 border-t border-[#cfcfca]" />
            <p className="mb-3 font-[Trebuchet_MS,sans-serif] text-xs font-semibold uppercase tracking-[0.12em] text-[#77746c]">
              Font
            </p>
            <dl className="space-y-2 text-sm leading-5">
              <div>
                <dt className="inline font-semibold uppercase">Font name: </dt>
                <dd className="inline">{selectedWord.font}</dd>
              </div>
              <div>
                <dt className="inline font-semibold uppercase">
                  Font author:{" "}
                </dt>
                <dd className="inline">
                  {selectedWord.fontAuthor ?? "Unknown designer"}
                </dd>
              </div>
              <div>
                <dt className="block font-semibold uppercase">
                  Font description:
                </dt>
                <dd className="mt-1 block leading-6">
                  {truncateWithEllipsis(
                    selectedWord.fontDescription ?? "No description available.",
                    DESCRIPTION_MAX_LENGTH,
                  )}
                </dd>
              </div>
            </dl>
            <a
              className="mt-3 inline-block font-[Trebuchet_MS,sans-serif] text-sm font-semibold text-[#55534d] underline underline-offset-4"
              href={getFontUrl(selectedWord.font, selectedWord.fontUrl)}
              target="_blank"
              rel="noreferrer"
            >
              [Read More]
            </a>
          </section>
        </div>
      )}
    </div>
  );
}
