"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { languages } from "@/lib/languages";
import { calculateLayout, type PlacedWord } from "@/lib/cloudUtils";

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

    setPlacedWords(
      calculateLayout(
        languages,
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

      {placedWords?.map((word) => (
        <span
          key={word.lang}
          title={word.lang}
          style={{
            position: "absolute",
            left: word.x,
            top: word.y,
            width: word.width,
            height: word.height,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <span
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap leading-none"
            style={{
              width: word.rotation === 90 ? word.height : word.width,
              height: word.rotation === 90 ? word.width : word.height,
              fontFamily: `"${word.font}", sans-serif`,
              fontSize: word.fontSize,
              color: "#000",
              transform: `rotate(${word.rotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            {word.text}
          </span>
        </span>
      ))}
    </div>
  );
}
