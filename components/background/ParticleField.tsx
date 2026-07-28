'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

export function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{
            y: [`${p.y}vh`, `${(p.y - 20 + 100) % 100}vh`],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className="absolute rounded-full bg-cyan-400/50 shadow-sm shadow-cyan-400/80"
        />
      ))}
    </div>
  );
}
