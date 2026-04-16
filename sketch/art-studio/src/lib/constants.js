export const CANVAS_PRESETS = [
  { label: "32",  size: 32  },
  { label: "48",  size: 48  },
  { label: "64",  size: 64  },
  { label: "96",  size: 96  },
  { label: "128", size: 128 },
  { label: "256", size: 256 },
];

/** Logical canvas default — 64×64 gives chunky visible pixels. */
export const DEFAULT_CANVAS_SIZE = 64;

/** Fixed CSS display size in px — canvas always renders at this size on screen. */
export const DISPLAY_SIZE = 512;

/** Brush size limits (canvas pixels). */
export const BRUSH_SIZE_MIN = 1;
export const BRUSH_SIZE_MAX = 64;

/** Opacity range for painting tools (matches UI slider). */
export const BRUSH_OPACITY_MIN = 0.1;
export const BRUSH_OPACITY_MAX = 1;

/** Right word drawer width (px); user can drag the left edge to resize. */
export const RIGHT_DRAWER_WIDTH_DEFAULT = 352;
export const RIGHT_DRAWER_WIDTH_MIN = 220;
export const RIGHT_DRAWER_WIDTH_MAX = 720;

export const DEFAULT_LAYERS = [
  { id: 1, name: "Background", visible: true, locked: false },
  { id: 2, name: "Linework", visible: true, locked: false },
];

export const SWATCHES = [
  "#FFFFFF",
  "#000000",
  "#FACC15",
  "#EF4444",
  "#3B82F6",
  "#22C55E",
];
