export function drawStamp(ctx, x, y, seed, size, color) {
  const stampTotalSize = size * 2.5;
  const half = stampTotalSize / 2;
  let val = seed * 999;
  const grid = 6;
  const pSize = stampTotalSize / grid;
  ctx.fillStyle = color;
  for (let gy = 0; gy < grid; gy++) {
    for (let gx = 0; gx < grid; gx++) {
      val = (val * 16807) % 2147483647;
      if (val % 7 > 3) {
        ctx.fillRect(
          Math.floor(x - half + gx * pSize),
          Math.floor(y - half + gy * pSize),
          Math.ceil(pSize),
          Math.ceil(pSize),
        );
      }
    }
  }
}
