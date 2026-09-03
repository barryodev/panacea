export interface Rect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export function rectsOverlap(a: Rect, b: Rect, padding: number): boolean {
  return !(
    a.right + padding < b.left ||
    a.left - padding > b.right ||
    a.bottom + padding < b.top ||
    a.top - padding > b.bottom
  );
}

export function pickRotation(): number {
  const roll = Math.random();
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
