'use client';

import { useState, useRef, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: 'cyan' | 'violet' | 'blue';
}

export function MotionCard({
  children,
  className = '',
  delay = 0,
  glowColor = 'cyan',
}: MotionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)'
  );
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Strict 3D tilt calculation within safe ±5 degree limits
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateY(-8px)`
    );

    // Spotlight cursor calculation in %
    setSpotlightPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0px)'
    );
    setSpotlightPos(prev => ({ ...prev, opacity: 0 }));
  };

  const glowStyles = {
    cyan: 'rgba(6, 182, 212, 0.15)',
    violet: 'rgba(139, 92, 246, 0.15)',
    blue: 'rgba(59, 130, 246, 0.15)',
  }[glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
          transformStyle: 'preserve-3d',
        }}
        className={`relative overflow-hidden rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-colors group focus-within:ring-2 focus-within:ring-cyan-400 ${className}`}
      >
        {/* Cursor Spotlight Effect */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity: spotlightPos.opacity,
            background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${glowStyles}, transparent 80%)`,
          }}
        />

        {/* Inner Card Content */}
        <div className="relative z-20 h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
