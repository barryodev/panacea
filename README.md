# Hello World — 50 Languages

A Next.js word cloud of "Hello World" in 50 languages. Each word is set in a
different Google Font, chosen where possible to echo its script or
typographic tradition (Fraktur-style for German, brush strokes for Chinese,
a Roman-inscription face for Latin, etc.). Background is smoke white
(`#f5f5f4`), text is solid black.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How it works

- `lib/languages.ts` — the 50 `{ language, translation, font }` entries.
- `lib/fonts.ts` — builds one Google Fonts stylesheet URL covering every
  font referenced in `languages.ts`.
- `components/WordCloud.tsx` — the actual cloud. On mount (after
  `document.fonts.ready`, so measurements use the real webfonts) it:
  1. Gives each word a random font size (biased toward mid-range, with
     occasional large "standout" words) and a random rotation.
  2. Sorts biggest-first, then places each word with a spiral search
     outward from the center — measuring its real pixel footprint on an
     offscreen `<canvas>` — until it finds a spot that doesn't collide with
     an already-placed word.
  3. If a word can't find a clean spot, it shrinks and retries a couple of
     times, and as a last resort still gets placed (so no language is ever
     silently dropped).
  4. Re-lays-out on window resize (debounced), and there's a "Shuffle"
     button to re-randomize sizes/rotations/positions on demand.

No external word-cloud or layout libraries — the spiral-placement logic is
hand-rolled in `WordCloud.tsx`, so the only real dependency is Next.js/React.

## What to extend first

1. **Weight by something real.** Right now font size is random. Wire it to
   an actual metric — e.g. how many total speakers a language has, or how
   often a visitor's browser locale matches — so size carries meaning.
2. **Verify font/script coverage.** A few of the 50 fonts (especially for
   less common scripts) were picked from familiarity rather than pixel-
   checked glyph coverage. Load the app, glance for any boxes/tofu
   characters or silent fallback-to-system-font, and swap those entries.
3. **Click-to-learn.** Each word already has a `title` tooltip with the
   language name — turn a click into a small popover with a pronunciation
   guide or a fun fact, since the hover state is already half-built.
4. **Persist a layout.** Add a "seed" to the URL (e.g. `?seed=1234`) so a
   specific arrangement can be shared/bookmarked instead of re-randomizing
   every load.
5. **Mobile layout.** The spiral bounds already adapt to container size, but
   at very narrow widths words will shrink a lot to avoid collisions —
   worth tuning `MIN_FONT_SIZE`/`MAX_FONT_SIZE` per breakpoint.
