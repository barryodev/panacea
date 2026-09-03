import { expect, test } from "@playwright/test";

test.describe("word cloud", () => {
  test("loads with its title and controls", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Hello World — 50 Languages");
    await expect(page.getByText("Hello World in 50 languages")).toBeVisible();
    await expect(page.getByRole("button", { name: "Shuffle" })).toBeVisible();
  });

  test("renders all 50 language words", async ({ page }) => {
    await page.goto("/");

    const words = page.locator("[title]");
    await expect(words).toHaveCount(50);
    await expect(page.getByTitle("English")).toBeVisible();
    await expect(page.getByTitle("Arabic")).toBeAttached();
    await expect(page.getByTitle("Chinese")).toBeAttached();
    await expect(page.getByTitle("Hindi")).toBeAttached();
  });

  test("shuffle changes word positions", async ({ page }) => {
    await page.goto("/");

    const getPositions = () =>
      page.locator("[title]").evaluateAll((elements) =>
        elements.map((element) => {
          const rect = element.getBoundingClientRect();
          return [rect.x, rect.y, rect.width, rect.height];
        }),
      );
    const before = await getPositions();

    await page.getByRole("button", { name: "Shuffle" }).click();
    const after = await getPositions();

    expect(after).not.toEqual(before);
    await expect(page.locator("[title]")).toHaveCount(50);
  });

  test("does not overlap word bounding boxes", async ({ page }) => {
    await page.goto("/");

    const overlaps = await page.locator("[title]").evaluateAll((elements) => {
      const rectangles = elements.map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom,
        };
      });
      const collisions: string[] = [];

      for (let first = 0; first < rectangles.length; first += 1) {
        for (let second = first + 1; second < rectangles.length; second += 1) {
          const a = rectangles[first];
          const b = rectangles[second];
          if (
            a.left < b.right &&
            a.right > b.left &&
            a.top < b.bottom &&
            a.bottom > b.top
          ) {
            collisions.push(`${first}:${second}`);
          }
        }
      }
      return collisions;
    });

    expect(overlaps).toEqual([]);
  });

  test("keeps the mobile controls visible without horizontal scrolling", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const caption = page.getByText("Hello World in 50 languages");
    const shuffle = page.getByRole("button", { name: "Shuffle" });
    await expect(caption).toBeVisible();
    await expect(shuffle).toBeVisible();

    const layout = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      shuffleBottom:
        document.querySelector("button")?.getBoundingClientRect().bottom ?? 0,
    }));
    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.viewportWidth);
    expect(layout.shuffleBottom).toBeGreaterThan(760);
  });
});
