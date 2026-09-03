import { describe, expect, it, vi } from "vitest";
import {
  measure,
  calculateLayout,
  findOffscreenPlacement,
  findSpiralPlacement,
  getFontUrl,
  getLayoutConfig,
  pickRotation,
  placeWord,
  randomizeWordSizes,
  rectsOverlap,
  rotatedBounds,
  truncateWithEllipsis,
  type Rect,
} from "./cloudUtils";

const box = (
  left: number,
  top: number,
  right: number,
  bottom: number,
): Rect => ({
  left,
  top,
  right,
  bottom,
});

describe("rectsOverlap", () => {
  it("treats boxes that just touch as overlapping when padding is zero", () => {
    expect(rectsOverlap(box(0, 0, 10, 10), box(10, 0, 20, 10), 0)).toBe(true);
  });

  it("detects fully overlapping boxes", () => {
    expect(rectsOverlap(box(2, 2, 8, 8), box(0, 0, 10, 10), 0)).toBe(true);
  });

  it("detects boxes separated beyond the padding", () => {
    expect(rectsOverlap(box(0, 0, 10, 10), box(17, 0, 27, 10), 6)).toBe(false);
  });

  it("treats padding as part of the collision gap", () => {
    expect(rectsOverlap(box(0, 0, 10, 10), box(15, 0, 25, 10), 6)).toBe(true);
  });

  it("detects boxes separated to the left", () => {
    expect(rectsOverlap(box(0, 0, 10, 10), box(17, 0, 27, 10), 0)).toBe(false);
  });

  it("detects boxes separated to the right", () => {
    expect(rectsOverlap(box(17, 0, 27, 10), box(0, 0, 10, 10), 0)).toBe(false);
  });

  it("detects boxes separated above", () => {
    expect(rectsOverlap(box(0, 0, 10, 10), box(0, 17, 10, 27), 0)).toBe(false);
  });

  it("detects boxes separated below", () => {
    expect(rectsOverlap(box(0, 17, 10, 27), box(0, 0, 10, 10), 0)).toBe(false);
  });
});

describe("getFontUrl", () => {
  it("returns the supplied font URL", () => {
    expect(
      getFontUrl("Playfair Display", "https://github.com/example/font"),
    ).toBe("https://github.com/example/font");
  });

  it("falls back to the Google Fonts specimen page", () => {
    expect(getFontUrl("UnifrakturMaguntia", null)).toBe(
      "https://fonts.google.com/specimen/UnifrakturMaguntia",
    );
  });

  it("encodes font names in fallback URLs", () => {
    expect(getFontUrl("Playfair Display", null)).toBe(
      "https://fonts.google.com/specimen/Playfair%20Display",
    );
  });
});

describe("truncateWithEllipsis", () => {
  it("leaves text at the limit unchanged", () => {
    expect(truncateWithEllipsis("Hello", 5)).toBe("Hello");
  });

  it("appends three periods without a preceding space", () => {
    expect(truncateWithEllipsis("Hello world", 8)).toBe("Hello...");
  });

  it("removes trailing whitespace before the ellipsis", () => {
    expect(truncateWithEllipsis("Hello  world", 8)).toBe("Hello...");
  });
});

describe("pickRotation", () => {
  it("returns 0 below the rotation threshold", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.64);

    expect(pickRotation()).toBe(0);

    vi.restoreAllMocks();
  });

  it("returns 90 at or above the rotation threshold", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.65);

    expect(pickRotation()).toBe(90);

    vi.restoreAllMocks();
  });
});

describe("rotatedBounds", () => {
  it("keeps width and height at zero degrees", () => {
    expect(rotatedBounds(120, 40, 0)).toEqual({ w: 120, h: 40 });
  });

  it("swaps width and height at 90 degrees", () => {
    expect(rotatedBounds(120, 40, 90).w).toBeCloseTo(40);
    expect(rotatedBounds(120, 40, 90).h).toBeCloseTo(120);
  });
});

const createFakeCtx = (metrics: Partial<TextMetrics> = {}) => {
  let assignedFont = "";
  const ctx = {
    set font(value: string) {
      assignedFont = value;
    },
    measureText: () => metrics,
  } as unknown as CanvasRenderingContext2D;

  return { ctx, getAssignedFont: () => assignedFont };
};

describe("measure", () => {
  it("assigns the requested font to the canvas context", () => {
    const { ctx, getAssignedFont } = createFakeCtx({ width: 85 });

    measure(ctx, "Hello", "Arial", 20);

    expect(getAssignedFont()).toBe('400 20px "Arial", sans-serif');
  });

  it("uses the measured ascent and descent when available", () => {
    const { ctx } = createFakeCtx({
      width: 85,
      actualBoundingBoxAscent: 15,
      actualBoundingBoxDescent: 5,
    });

    const result = measure(ctx, "Hello", "Arial", 20);

    expect(result).toEqual({ width: 85, height: 20 });
  });

  it("uses fallback fontSize calculations when bounding box metrics are unavailable", () => {
    const { ctx } = createFakeCtx({
      width: 85,
    });
    const result = measure(ctx, "Hello", "Arial", 20);
    expect(result.width).toBe(85);
    expect(result.height).toBe(20);
  });

  it("falls back for invalid ascent and descent metrics", () => {
    const { ctx } = createFakeCtx({
      width: 85,
      actualBoundingBoxAscent: Number.NaN,
      actualBoundingBoxDescent: Number.NaN,
    });

    const result = measure(ctx, "Hello", "Arial", 30);

    expect(result).toEqual({ width: 85, height: 30 });
  });

  it("uses the final height fallback when measured metrics sum to zero", () => {
    const { ctx } = createFakeCtx({
      width: 85,
      actualBoundingBoxAscent: 10,
      actualBoundingBoxDescent: -10,
    });

    const result = measure(ctx, "Hello", "Arial", 20);

    expect(result).toEqual({ width: 85, height: 23 });
  });
});

describe("layout helpers", () => {
  const word = { lang: "English", text: "Hello World", font: "Arial" };
  const fakeCtx = createFakeCtx({
    width: 80,
    actualBoundingBoxAscent: 15,
    actualBoundingBoxDescent: 5,
  }).ctx;

  it("uses desktop layout settings for wide containers", () => {
    const config = getLayoutConfig(1000, 800);

    expect(config).toEqual({
      centerX: 500,
      centerY: 430,
      bounds: { left: 8, top: 72, right: 992, bottom: 788 },
      minFontSize: 18,
      maxFontSize: 64,
    });
  });

  it("reserves the mobile control rail and uses mobile font limits", () => {
    const config = getLayoutConfig(390, 844);

    expect(config).toEqual({
      centerX: 195,
      centerY: 327,
      bounds: { left: 12, top: 12, right: 378, bottom: 762 },
      minFontSize: 16,
      maxFontSize: 52,
    });
  });

  it("sorts randomized words from largest to smallest", () => {
    const words = [word, { lang: "French", text: "Bonjour", font: "Arial" }];
    let roll = 0;
    const random = () => (roll++ === 0 ? 0 : 1);

    const sizedWords = randomizeWordSizes(
      words,
      getLayoutConfig(1000, 800),
      random,
    );

    expect(sizedWords.map(({ fontSize }) => fontSize)).toEqual([64, 18]);
  });

  it("places a word using the supplied layout configuration", () => {
    const config = getLayoutConfig(1000, 800);
    const placed = placeWord(word, 24, config, fakeCtx, [], () => 0);

    expect(placed.lang).toBe("English");
    expect(placed.fontSize).toBe(24);
    expect(placed.rotation).toBe(0);
    expect(placed.x).toBeGreaterThanOrEqual(config.bounds.left);
    expect(placed.y).toBeGreaterThanOrEqual(config.bounds.top);
  });

  it("returns null when the spiral search range is empty", () => {
    const config = getLayoutConfig(1000, 800);

    expect(
      findSpiralPlacement(
        fakeCtx,
        word,
        24,
        0,
        config.centerX,
        config.centerY,
        [],
        0,
        0,
      ),
    ).toBeNull();
  });

  it("finds the first available offscreen position", () => {
    const placement = findOffscreenPlacement(
      390,
      327,
      { x: 0, y: 0, w: 30, h: 20 },
      [],
    );

    expect(placement).toEqual({ x: 396, y: 317, w: 30, h: 20 });
  });

  it("shrinks after bounded attempts before using the overflow spiral", () => {
    const config = getLayoutConfig(1000, 800);
    const impossibleBounds = { ...config.bounds, right: 0 };

    const placed = placeWord(
      word,
      24,
      { ...config, bounds: impossibleBounds },
      fakeCtx,
      [],
      () => 0,
    );

    expect(placed.fontSize).toBe(12);
    expect(placed.rotation).toBe(0);
  });

  it("uses the final offscreen escape when the overflow spiral is full", () => {
    const config = getLayoutConfig(1000, 800);
    const impossibleBounds = { ...config.bounds, right: 0 };
    const blockingRect = {
      left: -100000,
      top: -100000,
      right: 100000,
      bottom: 100000,
    };

    const placed = placeWord(
      word,
      24,
      { ...config, bounds: impossibleBounds },
      fakeCtx,
      [blockingRect],
      () => 0,
    );

    expect(placed.x).toBeGreaterThan(100000);
    expect(placed.rotation).toBe(0);
  });
});

describe("calculateLayout", () => {
  const words = [
    { lang: "One", text: "One", font: "Arial" },
    { lang: "Two", text: "Two", font: "Arial" },
    { lang: "Three", text: "Three", font: "Arial" },
  ];
  const fakeCtx = createFakeCtx({
    width: 30,
    actualBoundingBoxAscent: 15,
    actualBoundingBoxDescent: 5,
  }).ctx;
  const fixedRandom = () => 0;

  it("places every word without overlapping rectangles", () => {
    const placed = calculateLayout(words, 1000, 800, fakeCtx, fixedRandom);

    expect(placed).toHaveLength(words.length);
    for (let index = 0; index < placed.length; index += 1) {
      const current = placed[index];
      const currentRect = {
        left: current.x,
        top: current.y,
        right: current.x + current.width,
        bottom: current.y + current.height,
      };
      for (const next of placed.slice(index + 1)) {
        expect(
          rectsOverlap(
            currentRect,
            {
              left: next.x,
              top: next.y,
              right: next.x + next.width,
              bottom: next.y + next.height,
            },
            6,
          ),
        ).toBe(false);
      }
    }
  });

  it("keeps mobile placements inside the cloud bounds", () => {
    const placed = calculateLayout(words, 390, 844, fakeCtx, fixedRandom);

    expect(placed).toHaveLength(words.length);
    for (const word of placed) {
      expect(word.x).toBeGreaterThanOrEqual(12);
      expect(word.y).toBeGreaterThanOrEqual(12);
      expect(word.x + word.width).toBeLessThanOrEqual(378);
      expect(word.y + word.height).toBeLessThanOrEqual(762);
    }
  });
});
