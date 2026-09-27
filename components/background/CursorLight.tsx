'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const emptySubscribe = () => () => {};
function checkTouch(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
}

export function CursorLight() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const isTouch = useSyncExternalStore(emptySubscribe, checkTouch, () => false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined' || isTouch) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isTouch]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-150 h-150 rounded-full pointer-events-none z-0 transition-opacity duration-500 opacity-20"
      style={{
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)',
      }}
      animate={{
        x: pos.x - 300,
        y: pos.y - 300,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 0.1 }}
    />
  );
}
