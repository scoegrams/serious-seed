import { useCallback, useEffect, useRef, useState } from "react";
import { LayerStrip } from "./LayerStrip.jsx";
import {
  BRUSH_SIZE_MAX,
  BRUSH_SIZE_MIN,
  DISPLAY_SIZE,
} from "../lib/constants.js";
import {
  EraserIcon,
  MarkerIcon,
  PencilIcon,
  SprayIcon,
  StampIcon,
  WiggleIcon,
} from "./icons/ToolIcons.jsx";

const BRUSH_MIN = BRUSH_SIZE_MIN;
const BRUSH_MAX = BRUSH_SIZE_MAX;
/** >1: more of the slider width is for small sizes (fine control where it matters). */
const BRUSH_SLIDER_CURVE = 2.35;
const BRUSH_SLIDER_STEPS = 1000;

const TOOLS = [
  { id: "pencil", label: "Pen", Icon: PencilIcon },
  { id: "marker", label: "Mkr", Icon: MarkerIcon },
  { id: "wiggle", label: "Wgl", Icon: WiggleIcon },
  { id: "spray",  label: "Spr", Icon: SprayIcon },
  { id: "stamp",  label: "Stp", Icon: StampIcon },
  { id: "eraser", label: "Ers", Icon: EraserIcon },
];

function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, Math.round(n)));
}

function brushSizeToSliderValue(size) {
  const t = (clamp(size, BRUSH_MIN, BRUSH_MAX) - BRUSH_MIN) / (BRUSH_MAX - BRUSH_MIN);
  return Math.round(Math.pow(Math.max(0, Math.min(1, t)), 1 / BRUSH_SLIDER_CURVE) * BRUSH_SLIDER_STEPS);
}

function sliderValueToBrushSize(v) {
  const u = Math.max(0, Math.min(1, Number(v) / BRUSH_SLIDER_STEPS));
  return clamp(BRUSH_MIN + (BRUSH_MAX - BRUSH_MIN) * Math.pow(u, BRUSH_SLIDER_CURVE), BRUSH_MIN, BRUSH_MAX);
}

function BrushSizeBlock({ brushSize, onBrushSizeChange, previewPx }) {
  return (
    <div className="brush-size-block flex flex-col items-center gap-1">
      <div className="brush-size-handle" title="Matches stroke on canvas">
        <div
          className="brush-size-dot"
          style={{ width: previewPx, height: previewPx }}
        />
      </div>
      <input
        type="range"
        className="brush-size-range"
        min={0}
        max={BRUSH_SLIDER_STEPS}
        step={1}
        value={brushSizeToSliderValue(brushSize)}
        onChange={(e) => onBrushSizeChange(sliderValueToBrushSize(e.target.value))}
        aria-label="Brush size"
      />
      <span className="text-sm font-bold tabular-nums leading-none">{brushSize}px</span>
    </div>
  );
}

export function ToolRail({
  currentTool,
  onToolChange,
  brushSize,
  onBrushSizeChange,
  brushOpacity,
  onBrushOpacityChange,
  layers,
  activeLayerId,
  onSelectLayer,
  onToggleLayerVisible,
  onDeleteLayer,
  onRenameLayer,
  onAddLayer,
  canvasSize,
}) {
  const panelRef = useRef(null);
  const [pos, setPos] = useState({ x: 12, y: 80 });
  const [docked, setDocked] = useState(true);

  // ── Drag the whole toolbar (only when floating) ─────────────
  const posRef = useRef(pos);
  useEffect(() => { posRef.current = pos; }, [pos]);

  const onGripDown = useCallback((e) => {
    if (docked) return;
    e.preventDefault();
    const startX = (e.touches ? e.touches[0].clientX : e.clientX) - posRef.current.x;
    const startY = (e.touches ? e.touches[0].clientY : e.clientY) - posRef.current.y;

    const move = (ev) => {
      const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
      const cy = ev.touches ? ev.touches[0].clientY : ev.clientY;
      setPos({ x: cx - startX, y: cy - startY });
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
  }, [docked]);

  const scale = DISPLAY_SIZE / (canvasSize || 64);
  const previewPx = Math.max(4, Math.min(56, brushSize * scale));

  // ── Layout: docked = vertical sidebar, floating = horizontal bar ──
  if (docked) {
    return (
      <aside className="toolbar-docked scroll-container flex flex-col items-center gap-2 overflow-y-auto py-3">
        {/* Undock button */}
        <button
          type="button"
          className="toolbar-dock-btn"
          title="Undock — float toolbar"
          onClick={() => setDocked(false)}
        >
          ⇱
        </button>

        <div className="toolbar-sep-h" />

        {/* Tools */}
        {TOOLS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            title={label}
            onClick={() => onToolChange(id)}
            className={`tool-btn flex h-10 w-10 items-center justify-center rounded-sm ${currentTool === id ? "active" : ""}`}
          >
            <Icon />
          </button>
        ))}

        <div className="toolbar-sep-h" />

        <BrushSizeBlock
          brushSize={brushSize}
          onBrushSizeChange={onBrushSizeChange}
          previewPx={previewPx}
        />

        <div className="toolbar-sep-h" />

        {/* Opacity */}
        <div className="flex flex-col items-center gap-1">
          <label className="text-[9px] uppercase opacity-50">Op</label>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={brushOpacity}
            onChange={(e) => onBrushOpacityChange(Number(e.target.value))}
            className="toolbar-v-slider"
            orient="vertical"
          />
          <span className="text-[11px] font-bold tabular-nums">{Math.round(brushOpacity * 100)}%</span>
        </div>

        <div className="toolbar-sep-h" />

        {/* Layers */}
        <LayerStrip
          layers={layers}
          activeLayerId={activeLayerId}
          onSelectLayer={onSelectLayer}
          onToggleVisible={onToggleLayerVisible}
          onDeleteLayer={onDeleteLayer}
          onRenameLayer={onRenameLayer}
          onAddLayer={onAddLayer}
        />
      </aside>
    );
  }

  // ── Floating mode ──────────────────────────────────────────
  return (
    <div
      ref={panelRef}
      className="toolbar-float"
      style={{ left: pos.x, top: pos.y }}
    >
      {/* Drag grip */}
      <div
        className="toolbar-grip"
        onMouseDown={onGripDown}
        onTouchStart={onGripDown}
      >
        <span className="toolbar-grip-dots">⠿</span>
      </div>

      {/* Dock button */}
      <button
        type="button"
        className="toolbar-dock-btn"
        title="Dock to left side"
        onClick={() => setDocked(true)}
      >
        ⇲
      </button>

      <div className="toolbar-divider" />

      {/* Tools row */}
      <div className="flex gap-1">
        {TOOLS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            title={label}
            onClick={() => onToolChange(id)}
            className={`tool-btn flex h-10 w-10 items-center justify-center rounded-sm ${currentTool === id ? "active" : ""}`}
          >
            <Icon />
          </button>
        ))}
      </div>

      <div className="toolbar-divider" />

      <BrushSizeBlock
        brushSize={brushSize}
        onBrushSizeChange={onBrushSizeChange}
        previewPx={previewPx}
      />

      <div className="toolbar-divider" />

      {/* Opacity */}
      <div className="flex items-center gap-2 px-1">
        <label className="text-[10px] uppercase opacity-60">Op</label>
        <input
          type="range"
          min={0.1}
          max={1}
          step={0.05}
          value={brushOpacity}
          onChange={(e) => onBrushOpacityChange(Number(e.target.value))}
          className="w-16"
        />
        <span className="text-sm font-bold tabular-nums">{Math.round(brushOpacity * 100)}%</span>
      </div>

      <div className="toolbar-divider" />

      {/* Layers mini-strip */}
      <LayerStrip
        layers={layers}
        activeLayerId={activeLayerId}
        onSelectLayer={onSelectLayer}
        onToggleVisible={onToggleLayerVisible}
        onDeleteLayer={onDeleteLayer}
        onRenameLayer={onRenameLayer}
        onAddLayer={onAddLayer}
        horizontal
      />
    </div>
  );
}
