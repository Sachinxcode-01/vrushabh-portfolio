'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CursorLight() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isTouch, setIsTouch] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-opacity duration-500 opacity-20"
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
