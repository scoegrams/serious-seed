import seedsRaw from "../../../../seeds.md?raw";
import { parseSeedsMarkdown } from "./parseSeedsMd.js";

let _cached = null;

export function buildWords() {
  if (_cached) return _cached;
  _cached = parseSeedsMarkdown(seedsRaw);
  if (_cached.length !== 2048) {
    console.warn(
      `[words] Expected 2048 seeds from seeds.md, parsed ${_cached.length}`,
    );
  }
  return _cached;
}

/** First letter -> count (lowercase a–z). */
export function letterCountsFromWords(words) {
  /** @type {Record<string, number>} */
  const counts = {};
  for (const w of words) {
    const ch = w.text.charAt(0).toLowerCase();
    if (ch >= "a" && ch <= "z") counts[ch] = (counts[ch] || 0) + 1;
  }
  return counts;
}
