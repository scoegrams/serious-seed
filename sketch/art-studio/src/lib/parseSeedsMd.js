/**
 * Parses seeds.md: alternating "N." lines and word lines (BIP39-style list).
 * @param {string} raw
 * @returns {{ id: number; text: string; seed: number }[]}
 */
export function parseSeedsMarkdown(raw) {
  const lines = raw.split(/\r?\n/).map((l) => l.trim());
  /** @type {{ id: number; text: string; seed: number }[]} */
  const words = [];
  let pendingId = null;

  for (const line of lines) {
    if (!line) continue;
    if (/^\d+\.$/.test(line)) {
      pendingId = parseInt(line.replace(/\.$/, ""), 10);
      continue;
    }
    if (pendingId != null && /^[a-z]+$/.test(line)) {
      words.push({
        id: pendingId,
        text: line,
        seed: pendingId - 1,
      });
      pendingId = null;
    }
  }

  words.sort((a, b) => a.id - b.id);
  return words;
}
