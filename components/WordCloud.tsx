"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { languages, LanguageWord } from "@/lib/languages";

interface PlacedWord extends LanguageWord {
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  rotation: number;
}

interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const PADDING = 6; // min gap enforced between words, in px
const MIN_FONT_SIZE = 18;
const MAX_FONT_SIZE = 64;

function rectsOverlap(a: Rect, b: Rect, padding: number): boolean {
  return !(
    a.right + padding < b.left ||
    a.left - padding > b.right ||
    a.bottom + padding < b.top ||
    a.top - padding > b.bottom
  );
}

function pickRotation(): number {
  const roll = Math.random();
  if (roll < 0.65) return 0;
  return 90;
}

function measure(
  ctx: CanvasRenderingContext2D,
  text: string,
  font: string,
  fontSize: number,
): { width: number; height: number } {
  ctx.font = `400 ${fontSize}px "${font}", sans-serif`;
  const metrics = ctx.measureText(text);
  const width = metrics.width;
  const ascent =
    metrics.actualBoundingBoxAscent &&
    !Number.isNaN(metrics.actualBoundingBoxAscent)
      ? metrics.actualBoundingBoxAscent
      : fontSize * 0.8;
  const descent =
    metrics.actualBoundingBoxDescent &&
    !Number.isNaN(metrics.actualBoundingBoxDescent)
      ? metrics.actualBoundingBoxDescent
      : fontSize * 0.2;
  const height = ascent + descent || fontSize * 1.15;
  return { width, height };
}

function rotatedBounds(width: number, height: number, rotationDeg: number) {
  const rad = (rotationDeg * Math.PI) / 180;
  const w = Math.abs(width * Math.cos(rad)) + Math.abs(height * Math.sin(rad));
  const h = Math.abs(width * Math.sin(rad)) + Math.abs(height * Math.cos(rad));
  return { w, h };
}

export default function WordCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [placedWords, setPlacedWords] = useState<PlacedWord[] | null>(null);
  const [seed, setSeed] = useState(0);

  const computeLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
    }
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    const cx = width / 2;
    const isMobile = width < 600;
    const topInset = isMobile ? 12 : 72;
    const bottomInset = isMobile ? 82 : 12;
    const cloudHeight = height - topInset - bottomInset;
    const cloudCenter = isMobile ? 0.42 : 0.5;
    const adjustedCy = topInset + cloudHeight * cloudCenter;
    const bounds: Rect = {
      left: isMobile ? 12 : 8,
      top: topInset,
      right: width - (isMobile ? 12 : 8),
      bottom: height - bottomInset,
    };
    const minFontSize = isMobile ? 16 : MIN_FONT_SIZE;
    const maxFontSize = isMobile ? 52 : MAX_FONT_SIZE;

    // Randomize size (biased toward mid-range, occasional standouts) and
    // place the biggest words first so they claim the center of the cloud.
    const withRandomSize = languages.map((word) => {
      const sizeRoll = Math.pow(Math.random(), 1.7);
      const fontSize = Math.round(
        minFontSize + sizeRoll * (maxFontSize - minFontSize),
      );
      return { word, fontSize };
    });
    withRandomSize.sort((a, b) => b.fontSize - a.fontSize);

    const placed: PlacedWord[] = [];
    const placedRects: Rect[] = [];

    for (const { word, fontSize } of withRandomSize) {
      let rotation = pickRotation();
      let size = fontSize;
      let found: { x: number; y: number; w: number; h: number } | null = null;

      // Try the word at full size, then progressively smaller, until it fits.
      for (let attempt = 0; attempt < 3 && !found; attempt++) {
        const { width: textW, height: textH } = measure(
          ctx,
          word.text,
          word.font,
          size,
        );
        const { w, h } = rotatedBounds(textW, textH, rotation);

        let t = 0;
        const dt = 0.6;
        const maxT = 4200;
        while (t < maxT) {
          const angle = 0.15 * t;
          const radius = 0.85 * t;
          const x = cx + radius * Math.cos(angle) - w / 2;
          const y = adjustedCy + radius * Math.sin(angle) * 0.62 - h / 2;
          const rect: Rect = { left: x, top: y, right: x + w, bottom: y + h };

          const withinBounds =
            rect.left >= bounds.left &&
            rect.top >= bounds.top &&
            rect.right <= bounds.right &&
            rect.bottom <= bounds.bottom;

          if (
            withinBounds &&
            !placedRects.some((r) => rectsOverlap(rect, r, PADDING))
          ) {
            found = { x, y, w, h };
            break;
          }
          t += dt;
        }

        if (!found) {
          size = Math.round(size * 0.78); // shrink and retry
          rotation = attempt === 1 ? 0 : rotation; // straighten up on the last try
        }
      }

      if (!found) {
        // Continue the spiral beyond the viewport rather than forcing an overlap.
        const { width: textW, height: textH } = measure(
          ctx,
          word.text,
          word.font,
          size,
        );
        const { w, h } = rotatedBounds(textW, textH, 0);
        let t = 4200;
        while (t < 8400) {
          const angle = 0.15 * t;
          const radius = 0.85 * t;
          const x = cx + radius * Math.cos(angle) - w / 2;
          const y = adjustedCy + radius * Math.sin(angle) * 0.62 - h / 2;
          const rect: Rect = { left: x, top: y, right: x + w, bottom: y + h };

          if (!placedRects.some((r) => rectsOverlap(rect, r, PADDING))) {
            found = { x, y, w, h };
            break;
          }
          t += 0.6;
        }

        if (!found) {
          let x = width + PADDING;
          const y = adjustedCy - h / 2;
          while (
            placedRects.some((r) =>
              rectsOverlap(
                { left: x, top: y, right: x + w, bottom: y + h },
                r,
                PADDING,
              ),
            )
          ) {
            x += w + PADDING;
          }
          found = { x, y, w, h };
        }
        rotation = 0;
      }

      const rect: Rect = {
        left: found.x,
        top: found.y,
        right: found.x + found.w,
        bottom: found.y + found.h,
      };
      placedRects.push(rect);
      placed.push({
        ...word,
        x: found.x,
        y: found.y,
        width: found.w,
        height: found.h,
        fontSize: size,
        rotation,
      });
    }

    setPlacedWords(placed);
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

  return (
    <div
      ref={containerRef}
      className="word-cloud"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f4",
        overflow: "hidden",
      }}
    >
      <div
        className="word-cloud__label"
        style={{
          pointerEvents: "none",
        }}
      >
        Hello World in 50 languages
      </div>

      <button
        className="word-cloud__shuffle"
        onClick={() => setSeed((s) => s + 1)}
      >
        Shuffle
      </button>

      {placedWords?.map((w) => (
        <span
          key={w.lang}
          title={w.lang}
          style={{
            position: "absolute",
            left: w.x,
            top: w.y,
            width: w.width,
            height: w.height,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <span
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: `"${w.font}", sans-serif`,
              fontSize: w.fontSize,
              color: "#000",
              transform: `rotate(${w.rotation}deg)`,
              transformOrigin: "center center",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            {w.text}
          </span>
        </span>
      ))}
    </div>
  );
}
