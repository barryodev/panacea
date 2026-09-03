import type { LanguageWord } from "./languages";

export interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface PlacedWord extends LanguageWord {
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
  rotation: number;
}

const PADDING = 6;
const MIN_FONT_SIZE = 18;
const MAX_FONT_SIZE = 64;
type Placement = { x: number; y: number; w: number; h: number };

export interface LayoutConfig {
  centerX: number;
  centerY: number;
  bounds: Rect;
  minFontSize: number;
  maxFontSize: number;
}

export interface WordWithFontSize {
  word: LanguageWord;
  fontSize: number;
}

export function rectsOverlap(a: Rect, b: Rect, padding: number): boolean {
  return !(
    a.right + padding < b.left ||
    a.left - padding > b.right ||
    a.bottom + padding < b.top ||
    a.top - padding > b.bottom
  );
}

export function pickRotation(random: () => number = Math.random): number {
  const roll = random();
  if (roll < 0.65) return 0;
  return 90;
}

export function measure(
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

export function rotatedBounds(
  width: number,
  height: number,
  rotationDeg: number,
) {
  const rad = (rotationDeg * Math.PI) / 180;
  const w = Math.abs(width * Math.cos(rad)) + Math.abs(height * Math.sin(rad));
  const h = Math.abs(width * Math.sin(rad)) + Math.abs(height * Math.cos(rad));
  return { w, h };
}

export function findSpiralPlacement(
  ctx: CanvasRenderingContext2D,
  word: LanguageWord,
  size: number,
  rotation: number,
  centerX: number,
  centerY: number,
  placedRects: Rect[],
  startT: number,
  maxT: number,
  bounds?: Rect,
): Placement | null {
  const { width: textW, height: textH } = measure(
    ctx,
    word.text,
    word.font,
    size,
  );
  const { w, h } = rotatedBounds(textW, textH, rotation);

  let t = startT;
  while (t < maxT) {
    const angle = 0.15 * t;
    const radius = 0.85 * t;
    const x = centerX + radius * Math.cos(angle) - w / 2;
    const y = centerY + radius * Math.sin(angle) * 0.62 - h / 2;
    const rect: Rect = { left: x, top: y, right: x + w, bottom: y + h };
    const withinBounds =
      !bounds ||
      (rect.left >= bounds.left &&
        rect.top >= bounds.top &&
        rect.right <= bounds.right &&
        rect.bottom <= bounds.bottom);

    if (
      withinBounds &&
      !placedRects.some((placedRect) => rectsOverlap(rect, placedRect, PADDING))
    ) {
      return { x, y, w, h };
    }
    t += 0.6;
  }

  return null;
}

export function findOffscreenPlacement(
  width: number,
  centerY: number,
  placement: Placement,
  placedRects: Rect[],
): Placement {
  let x = width + PADDING;
  const { w, h } = placement;
  const y = centerY - h / 2;
  while (
    placedRects.some((placedRect) =>
      rectsOverlap(
        { left: x, top: y, right: x + w, bottom: y + h },
        placedRect,
        PADDING,
      ),
    )
  ) {
    x += w + PADDING;
  }
  return { x, y, w, h };
}

export function getLayoutConfig(width: number, height: number): LayoutConfig {
  const isMobile = width < 600;
  const topInset = isMobile ? 12 : 72;
  const bottomInset = isMobile ? 82 : 12;
  const cloudHeight = height - topInset - bottomInset;

  return {
    centerX: width / 2,
    centerY: topInset + cloudHeight * (isMobile ? 0.42 : 0.5),
    bounds: {
      left: isMobile ? 12 : 8,
      top: topInset,
      right: width - (isMobile ? 12 : 8),
      bottom: height - bottomInset,
    },
    minFontSize: isMobile ? 16 : MIN_FONT_SIZE,
    maxFontSize: isMobile ? 52 : MAX_FONT_SIZE,
  };
}

export function randomizeWordSizes(
  words: LanguageWord[],
  config: LayoutConfig,
  random: () => number = Math.random,
): WordWithFontSize[] {
  const sizedWords = words.map((word) => {
    const sizeRoll = Math.pow(random(), 1.7);
    const fontSize = Math.round(
      config.minFontSize + sizeRoll * (config.maxFontSize - config.minFontSize),
    );
    return { word, fontSize };
  });
  sizedWords.sort((a, b) => b.fontSize - a.fontSize);
  return sizedWords;
}

export function placeWord(
  word: LanguageWord,
  fontSize: number,
  config: LayoutConfig,
  ctx: CanvasRenderingContext2D,
  placedRects: Rect[],
  random: () => number = Math.random,
): PlacedWord {
  let rotation = pickRotation(random);
  let size = fontSize;
  let found: Placement | null = null;

  for (let attempt = 0; attempt < 3 && !found; attempt++) {
    found = findSpiralPlacement(
      ctx,
      word,
      size,
      rotation,
      config.centerX,
      config.centerY,
      placedRects,
      0,
      4200,
      config.bounds,
    );

    if (!found) {
      size = Math.round(size * 0.78);
      rotation = attempt === 1 ? 0 : rotation;
    }
  }

  if (!found) {
    found = findSpiralPlacement(
      ctx,
      word,
      size,
      0,
      config.centerX,
      config.centerY,
      placedRects,
      4200,
      8400,
    );

    if (!found) {
      const { width: textW, height: textH } = measure(
        ctx,
        word.text,
        word.font,
        size,
      );
      found = findOffscreenPlacement(
        config.bounds.right,
        config.centerY,
        { x: 0, y: 0, ...rotatedBounds(textW, textH, 0) },
        placedRects,
      );
    }
    rotation = 0;
  }

  return {
    ...word,
    x: found.x,
    y: found.y,
    width: found.w,
    height: found.h,
    fontSize: size,
    rotation,
  };
}

export function calculateLayout(
  words: LanguageWord[],
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D,
  random: () => number = Math.random,
): PlacedWord[] {
  const config = getLayoutConfig(width, height);
  const sizedWords = randomizeWordSizes(words, config, random);
  const placedRects: Rect[] = [];
  const placed: PlacedWord[] = [];

  for (const { word, fontSize } of sizedWords) {
    const placedWord = placeWord(
      word,
      fontSize,
      config,
      ctx,
      placedRects,
      random,
    );
    const rect: Rect = {
      left: placedWord.x,
      top: placedWord.y,
      right: placedWord.x + placedWord.width,
      bottom: placedWord.y + placedWord.height,
    };
    placedRects.push(rect);
    placed.push(placedWord);
  }

  return placed;
}
