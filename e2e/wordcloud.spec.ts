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

  test("keeps desktop words within the visible cloud area", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const bounds = await page.locator("main > div").evaluate((cloud) => {
      const cloudRect = cloud.getBoundingClientRect();
      const words = Array.from(cloud.querySelectorAll("[title]"));
      return {
        left: cloudRect.left,
        top: cloudRect.top,
        right: cloudRect.right,
        bottom: cloudRect.bottom,
        words: words.map((word) => {
          const rect = word.getBoundingClientRect();
          return {
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          };
        }),
      };
    });

    const visibleWords = bounds.words.filter(
      (word) => word.right > bounds.left && word.left < bounds.right,
    );
    expect(visibleWords.length).toBeGreaterThan(0);
    for (const word of visibleWords) {
      expect(word.top).toBeGreaterThanOrEqual(bounds.top);
      expect(word.bottom).toBeLessThanOrEqual(bounds.bottom);
    }
  });

  test("recalculates the layout when the viewport changes", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    const button = page.getByRole("button", { name: "Shuffle" });
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS("top", /\d+px/);

    await page.setViewportSize({ width: 390, height: 844 });
    await expect
      .poll(async () => (await button.boundingBox())?.y ?? 0)
      .toBeGreaterThan(760);
  });

  test("waits for fonts and renders words with dimensions", async ({
    page,
  }) => {
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);

    const english = page.getByTitle("English").locator(":scope > span");
    const details = await english.evaluate((element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return {
        fontFamily: style.fontFamily,
        width: rect.width,
        height: rect.height,
      };
    });

    expect(details.fontFamily).toContain("Permanent Marker");
    expect(details.width).toBeGreaterThan(0);
    expect(details.height).toBeGreaterThan(0);
  });

  test("supports keyboard shuffle and exposes language tooltips", async ({
    page,
  }) => {
    await page.goto("/");
    const button = page.getByRole("button", { name: "Shuffle" });

    await button.focus();
    await expect(button).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("[title]")).toHaveCount(50);

    await expect(page.getByTitle("English")).toHaveAttribute(
      "title",
      "English",
    );
  });

  test("opens language information when a word is clicked", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByTitle("French").click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: "Français (French)" }),
    ).toBeVisible();
    await expect(dialog.locator("p").first()).toHaveText("Bonjour le monde");
    await expect(dialog.locator("p").first()).toHaveCSS(
      "font-family",
      /Playfair Display/,
    );
    const summary = dialog.locator("p").nth(2);
    await expect(summary).toBeVisible();
    await expect(summary).not.toBeEmpty();
    await expect(dialog.getByText("Font", { exact: true })).toBeVisible();
    const fontRows = dialog.locator("dl > div");
    await expect(fontRows.nth(0)).toContainText("Font name: Playfair Display");
    await expect(fontRows.nth(1)).toContainText("Font author:");
    await expect(fontRows.nth(2)).toContainText("Font description:");
    await expect(fontRows.nth(2).locator("dd")).toContainText("...");
    const readMoreLinks = dialog.getByRole("link", { name: "[Read More]" });
    await expect(readMoreLinks).toHaveCount(2);
    await expect(readMoreLinks.nth(0)).toHaveAttribute("href", /wikipedia.org/);
    await expect(readMoreLinks.nth(1)).toHaveAttribute("href", /github.com/);

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("provides a Google Fonts link when font repository data is unavailable", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByTitle("German").click();

    const links = page.getByRole("dialog").getByRole("link", {
      name: "[Read More]",
    });
    await expect(links).toHaveCount(2);
    await expect(links.nth(1)).toHaveAttribute(
      "href",
      "https://fonts.google.com/specimen/UnifrakturMaguntia",
    );
  });
});
