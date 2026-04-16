/**
 * Shaky drawing engine.
 *
 * Each stroke has its own animation loop — 3 pre-hashed offset "cells"
 * cycled at ~10fps. Different strokes land on different phases, so they
 * wobble independently. That's what makes it look like each LINE is
 * alive instead of the whole canvas vibrating.
 */

const SHAKE = {
  pencil: 0.7,
  marker: 0.5,
  wiggle: 2.5,
  spray:  1.0,
  stamp:  0.9,
  eraser: 0.35,
};

const ANIM_FRAMES = 3;
const ANIM_FPS    = 10;

let frameCounter = 0;
let lastTick = 0;

export function renderFrame(ctx, width, height, { theme, strokes, layers }) {
  const now = performance.now();
  if (now - lastTick > 1000 / ANIM_FPS) {
    frameCounter++;
    lastTick = now;
  }

  const bg = theme === "dark" ? "#111" : "#fff";
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  let strokeIdx = 0;
  for (const layer of layers) {
    if (!layer.visible) continue;
    for (const s of strokes) {
      if (s.layerId !== layer.id || !s.points?.length) {
        strokeIdx++;
        continue;
      }
      ctx.save();
      draw(ctx, s, bg, strokeIdx);
      ctx.restore();
      strokeIdx++;
    }
  }
}

/**
 * Cheap deterministic hash → float in [-1, 1].
 * Same (a, b, c) → same result every time.
 */
function hash(a, b, c) {
  const s = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453;
  return (s - Math.floor(s)) * 2 - 1;
}

function jitter(strokeIdx, pointIdx, axis, mag) {
  const cell = (frameCounter + strokeIdx * 7) % ANIM_FRAMES;
  return hash(strokeIdx + pointIdx * 13, cell, axis) * mag;
}

function draw(ctx, s, bg, si) {
  const kind  = s.type ?? "pencil";
  const shake = SHAKE[kind] ?? 0.7;
  const color = kind === "eraser" ? bg : s.color;
  const size  = s.size;
  const alpha = kind === "eraser" ? 1 : (s.opacity ?? 1);

  ctx.globalAlpha = alpha;

  // ── Spray ──────────────────────────────────────────────────────────
  if (kind === "spray") {
    ctx.fillStyle = color;
    for (let pi = 0; pi < s.points.length; pi++) {
      const p = s.points[pi];
      const offs = s.sprayOffsets?.[pi];
      if (!offs) continue;
      for (let oi = 0; oi < offs.length; oi++) {
        const off = offs[oi];
        const dx = jitter(si, pi * 100 + oi, 0, shake);
        const dy = jitter(si, pi * 100 + oi, 1, shake);
        ctx.fillRect(
          Math.floor(p.x + off.x + dx),
          Math.floor(p.y + off.y + dy),
          1, 1,
        );
      }
    }
    return;
  }

  // ── Stamp ──────────────────────────────────────────────────────────
  if (kind === "stamp") {
    const p = s.points[0];
    if (!p) return;
    const stampSize = size * 2.5;
    const half = stampSize / 2;
    const grid = 6;
    const cell = stampSize / grid;
    const sx = jitter(si, 999, 0, shake);
    const sy = jitter(si, 999, 1, shake);
    ctx.fillStyle = color;
    let val = s.seed * 999;
    for (let gy = 0; gy < grid; gy++) {
      for (let gx = 0; gx < grid; gx++) {
        val = (val * 16807) % 2147483647;
        if (val % 7 > 3) {
          ctx.fillRect(
            Math.floor(p.x - half + gx * cell + sx),
            Math.floor(p.y - half + gy * cell + sy),
            Math.ceil(cell),
            Math.ceil(cell),
          );
        }
      }
    }
    return;
  }

  // ── Lines (pen, marker, wiggle, eraser) ────────────────────────────
  ctx.strokeStyle = color;
  ctx.fillStyle   = color;
  ctx.lineWidth   = Math.max(1, size);
  ctx.lineCap     = kind === "marker" || kind === "eraser" ? "square" : "round";
  ctx.lineJoin    = "round";

  const pts = s.points;

  if (pts.length === 1) {
    const r = Math.max(0.5, size * 0.5);
    const dx = jitter(si, 0, 0, shake);
    const dy = jitter(si, 0, 1, shake);
    ctx.beginPath();
    ctx.arc(pts[0].x + dx, pts[0].y + dy, r, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  ctx.beginPath();
  for (let i = 0; i < pts.length; i++) {
    const x = pts[i].x + jitter(si, i, 0, shake);
    const y = pts[i].y + jitter(si, i, 1, shake);
    if (i === 0) ctx.moveTo(x, y);
    else         ctx.lineTo(x, y);
  }
  ctx.stroke();
}
