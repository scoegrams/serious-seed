export function generateSprayPattern(size) {
  const offsets = [];
  const density = Math.min(size, 25);
  for (let i = 0; i < density; i++) {
    const r = Math.random() * size * 0.5;
    const angle = Math.random() * Math.PI * 2;
    offsets.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r });
  }
  return offsets;
}
