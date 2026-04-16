import { useMemo } from "react";
import { WordIcon } from "./WordIcon.jsx";

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

export function WordBrowser({
  filter,
  onFilterChange,
  words,
  currentWord,
  onSelectWord,
  letterFilter,
  onLetterFilterChange,
  letterCounts,
  checkedIds,
  onToggleWordChecked,
  checklistProgress,
}) {
  const checkedSet = useMemo(() => new Set(checkedIds), [checkedIds]);

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="border-b-theme bg-theme-primary p-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="SEARCH 2048 SEEDS..."
          className="w-full border-theme bg-theme-secondary px-3 py-2 text-xl uppercase placeholder:opacity-30 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        />
        <div className="mt-2 flex items-center justify-between text-sm uppercase opacity-80">
          <span>Checklist</span>
          <span className="font-bold text-accent">
            {checklistProgress.done}/{checklistProgress.total}
          </span>
        </div>
      </div>

      <div className="scroll-container min-h-0 flex-1 space-y-1 overflow-y-auto p-2">
        {words.length === 0 ? (
          <p className="text-theme-secondary px-2 py-4 text-center text-lg uppercase">
            No seeds match
          </p>
        ) : (
          words.map((word) => (
            <div
              key={word.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectWord(word)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectWord(word);
                }
              }}
              className={`word-item flex w-full cursor-pointer items-center gap-2 rounded border-theme p-2 text-left ${currentWord.id === word.id ? "selected" : ""}`}
            >
              <input
                type="checkbox"
                checked={checkedSet.has(word.id)}
                onChange={(e) => onToggleWordChecked(word.id, e)}
                onClick={(e) => e.stopPropagation()}
                className="seed-checkbox h-4 w-4 shrink-0 cursor-pointer accent-[var(--accent)]"
                aria-label={`Mark ${word.text} done`}
              />
              <span className="w-9 shrink-0 text-sm opacity-40">
                {String(word.id).padStart(4, "0")}
              </span>
              <WordIcon seed={word.seed} />
              <span className="min-w-0 flex-1 text-lg font-bold uppercase tracking-wide">
                {word.text}
              </span>
            </div>
          ))
        )}
      </div>

      <div className="border-t-theme bg-theme-primary px-2 py-2">
        <p className="mb-1 text-center text-[10px] uppercase tracking-widest opacity-60">
          By letter
        </p>
        <div className="seed-letter-strip scroll-container flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden pb-1">
          <button
            type="button"
            onClick={() => onLetterFilterChange(null)}
            className={`seed-letter-btn shrink-0 ${letterFilter === null ? "seed-letter-btn--active" : ""}`}
          >
            All
          </button>
          {LETTERS.map((L) => {
            const count = letterCounts[L] ?? 0;
            const active = letterFilter === L;
            return (
              <button
                key={L}
                type="button"
                disabled={count === 0}
                title={`${count} seed${count === 1 ? "" : "s"}`}
                onClick={() => onLetterFilterChange(active ? null : L)}
                className={`seed-letter-btn shrink-0 ${active ? "seed-letter-btn--active" : ""} ${count === 0 ? "seed-letter-btn--empty" : ""}`}
              >
                {L.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t-theme bg-theme-primary p-4">
        <div className="text-lg uppercase">
          Active seed:{" "}
          <span className="text-accent font-bold">
            {currentWord.text.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
