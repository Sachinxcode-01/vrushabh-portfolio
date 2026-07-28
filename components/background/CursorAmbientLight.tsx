'use client';

import { useEffect, useState } from 'react';

export function CursorAmbientLight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices and reduced-motion mode
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || reduceMotion) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed pointer-events-none z-0 transition-transform duration-300 ease-out hidden md:block"
      style={{
        left: 0,
        top: 0,
        width: '600px',
        height: '600px',
        transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, rgba(139, 92, 246, 0.04) 45%, transparent 70%)',
      }}
    />
  );
}
