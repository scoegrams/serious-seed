import { CANVAS_PRESETS, DISPLAY_SIZE, SWATCHES } from "../lib/constants.js";

export function CanvasStage({
  canvasRef,
  containerRef,
  brushPreviewRef,
  isRecording,
  status,
  canvasSize,
  onChangeCanvasSize,
  paintColor,
  onPaintColorChange,
}) {
  const scale = Math.round(DISPLAY_SIZE / canvasSize);

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center overflow-auto bg-theme-canvas p-6 gap-4">
      <div
        ref={containerRef}
        className="relative"
        onPointerDown={() => {
          canvasRef.current?.focus({ preventScroll: true });
        }}
      >
        <div
          className="studio-overlay studio-overlay--rec recording"
          style={{ display: isRecording ? "block" : "none" }}
        >
          REC • CAPTURING...
        </div>
        <div
          className="studio-overlay studio-overlay--status"
          style={{
            display: status.visible ? "block" : "none",
            background: status.error ? "#ef4444" : "#22c55e",
          }}
        >
          {status.text}
        </div>
        <div ref={brushPreviewRef} className="brush-preview" />
        <canvas
          ref={canvasRef}
          id="mainCanvas"
          tabIndex={0}
          aria-label="Drawing canvas"
          className="bitmap-canvas"
          style={{ width: DISPLAY_SIZE, height: DISPLAY_SIZE }}
        />
      </div>

      <div className="canvas-bar flex max-w-full flex-wrap items-end justify-center gap-6 px-2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
            Canvas
          </span>
          <div className="flex flex-wrap justify-center gap-1">
            {CANVAS_PRESETS.map(({ label, size }) => (
              <button
                key={size}
                type="button"
                onClick={() => onChangeCanvasSize(size)}
                className={`canvas-size-btn ${canvasSize === size ? "canvas-size-btn--active" : ""}`}
                title={`${size}×${size} px`}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-widest opacity-40">
            {canvasSize}×{canvasSize}px · {scale}× zoom
          </span>
        </div>

        <div className="border-l-theme hidden h-14 w-px shrink-0 sm:block" aria-hidden />

        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
            Color
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="group relative">
              <input
                type="color"
                value={paintColor}
                onChange={(e) => onPaintColorChange(e.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
                aria-label="Pick color"
              />
              <div
                className="h-11 w-11 cursor-pointer border-2 border-[var(--border-color)] shadow-inner"
                style={{ backgroundColor: paintColor }}
                title="Custom color"
              />
            </div>
            <div className="grid grid-cols-3 gap-1">
              {SWATCHES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="swatch h-5 w-5"
                  style={{ background: c }}
                  aria-label={`Color ${c}`}
                  onClick={() => onPaintColorChange(c)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
