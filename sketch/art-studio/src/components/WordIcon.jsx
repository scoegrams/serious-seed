import { useEffect, useRef } from "react";

export function WordIcon({ seed }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 8, 8);
    let val = seed * 12345;
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        val = (val * 16807) % 2147483647;
        ctx.fillStyle = val % 5 > 2 ? "#fff" : "#000";
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, [seed]);

  return <canvas ref={ref} width={8} height={8} className="pixel-icon" />;
}
