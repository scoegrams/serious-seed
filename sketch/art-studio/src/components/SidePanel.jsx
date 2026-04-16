import { useCallback, useRef } from "react";
import {
  RIGHT_DRAWER_WIDTH_MAX,
  RIGHT_DRAWER_WIDTH_MIN,
} from "../lib/constants.js";
import { WordBrowser } from "./WordBrowser.jsx";

export function SidePanel(props) {
  const {
    drawerWidth,
    onDrawerWidthChange,
    wordFilter,
    onWordFilterChange,
    letterFilter,
    onLetterFilterChange,
    letterCounts,
    filteredWords,
    currentWord,
    onSelectWord,
    checkedIds,
    onToggleWordChecked,
    checklistProgress,
  } = props;

  const dragRef = useRef(null);

  const onResizePointerDown = useCallback(
    (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      const startX = e.clientX;
      const startW = drawerWidth;
      const capMax = Math.min(
        RIGHT_DRAWER_WIDTH_MAX,
        Math.floor(window.innerWidth * 0.55),
      );
      dragRef.current = { startX, startW, capMax };

      const onMove = (ev) => {
        const d = dragRef.current;
        if (!d) return;
        const dx = ev.clientX - d.startX;
        const next = Math.min(
          d.capMax,
          Math.max(RIGHT_DRAWER_WIDTH_MIN, d.startW + dx),
        );
        onDrawerWidthChange(next);
      };
      const onUp = () => {
        dragRef.current = null;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
      };
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    },
    [drawerWidth, onDrawerWidthChange],
  );

  return (
    <>
      <div
        className="side-panel-resizer shrink-0"
        onPointerDown={onResizePointerDown}
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize word panel"
        title="Drag to resize"
      />
      <aside
        className="side-panel-drawer flex min-h-0 shrink-0 flex-col border-l-theme bg-theme-secondary"
        style={{ width: drawerWidth, minWidth: RIGHT_DRAWER_WIDTH_MIN }}
      >
        <WordBrowser
          filter={wordFilter}
          onFilterChange={onWordFilterChange}
          words={filteredWords}
          currentWord={currentWord}
          onSelectWord={onSelectWord}
          letterFilter={letterFilter}
          onLetterFilterChange={onLetterFilterChange}
          letterCounts={letterCounts}
          checkedIds={checkedIds}
          onToggleWordChecked={onToggleWordChecked}
          checklistProgress={checklistProgress}
        />
      </aside>
    </>
  );
}
