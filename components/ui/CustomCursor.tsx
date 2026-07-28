'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea');
      const cardEl = target.closest('#projects .glass-panel');

      if (cardEl) {
        setIsHovered(true);
        setHoverText('View');
      } else if (interactiveEl) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice || prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-[1px] flex items-center justify-center text-[10px] font-mono text-cyan-200"
        animate={{
          x: position.x - (isHovered ? 30 : 18),
          y: position.y - (isHovered ? 30 : 18),
          width: isHovered ? 60 : 36,
          height: isHovered ? 60 : 36,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.2 }}
      >
        {hoverText}
      </motion.div>
    </div>
  );
}
