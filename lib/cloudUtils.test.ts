import { describe, expect, it } from "vitest";
import { rectsOverlap, rotatedBounds, measure, type Rect } from "./cloudUtils";

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
});
