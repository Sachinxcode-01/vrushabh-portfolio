"use client";

import { useEffect, useRef } from "react";

interface InteractiveGridProps {
  dotDistance?: number;
  dotRadius?: number;
  minProximity?: number;
}

export function InteractiveGrid({
  dotDistance = 34,
  dotRadius = 1.2,
  minProximity = 160,
}: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const minProxSq = minProximity * minProximity;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let x = dotDistance / 2; x < width; x += dotDistance) {
        for (let y = dotDistance / 2; y < height; y += dotDistance) {
          const dx = x - mx;
          const dy = y - my;
          const distSq = dx * dx + dy * dy;

          if (distSq < minProxSq) {
            const factor = 1 - distSq / minProxSq; // 0 to 1
            const r = dotRadius + factor * 1.2;
            const alpha = 0.15 + factor * 0.65;

            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.shadowColor = "rgba(56, 189, 248, 0.4)";
            ctx.shadowBlur = factor * 6;
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
            ctx.fill();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [dotDistance, dotRadius, minProximity]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-60"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
