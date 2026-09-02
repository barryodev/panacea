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
  if (roll < 0.55) return 0;
  if (roll < 0.7) return 90;
  if (roll < 0.85) return -90;
  return Math.random() * 50 - 25; // gentle diagonal, -25..25deg
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
    const cy = height / 2;
    const bounds: Rect = {
      left: 8,
      top: 8,
      right: width - 8,
      bottom: height - 8,
    };

    // Randomize size (biased toward mid-range, occasional standouts) and
    // place the biggest words first so they claim the center of the cloud.
    const withRandomSize = languages.map((word) => {
      const sizeRoll = Math.pow(Math.random(), 1.7);
      const fontSize = Math.round(
        MIN_FONT_SIZE + sizeRoll * (MAX_FONT_SIZE - MIN_FONT_SIZE),
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
          const y = cy + radius * Math.sin(angle) * 0.62 - h / 2;
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
        // Last resort so every language still appears: place at a random
        // in-bounds spot even if it slightly overlaps a neighbor.
        const { width: textW, height: textH } = measure(
          ctx,
          word.text,
          word.font,
          size,
        );
        const { w, h } = rotatedBounds(textW, textH, 0);
        const x = Math.max(bounds.left, Math.random() * (width - w));
        const y = Math.max(bounds.top, Math.random() * (height - h));
        found = { x, y, w, h };
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
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f4",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 24,
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          color: "#8a8a86",
          letterSpacing: 0.2,
          pointerEvents: "none",
        }}
      >
        Hello World, in 50 languages
      </div>

      <button
        onClick={() => setSeed((s) => s + 1)}
        style={{
          position: "absolute",
          top: 16,
          right: 20,
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          color: "#4a4a46",
          background: "transparent",
          border: "1px solid #cfcfca",
          borderRadius: 6,
          padding: "6px 12px",
          cursor: "pointer",
        }}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: `"${w.font}", sans-serif`,
            fontSize: w.fontSize,
            color: "#000",
            transform: `rotate(${w.rotation}deg)`,
            transformOrigin: "center center",
            whiteSpace: "nowrap",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {w.text}
        </span>
      ))}
    </div>
  );
}
