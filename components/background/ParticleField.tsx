'use client';

import { motion } from 'framer-motion';
import { useMounted } from '@/hooks/useMounted';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  initialOpacity: number;
}

const PARTICLES: Particle[] = Array.from({ length: 24 }, (_, i) => {
  const seed1 = Math.abs(Math.sin(i * 12.9898 + 78.233));
  const seed2 = Math.abs(Math.cos(i * 4.1414 + 12.515));
  const seed3 = Math.abs(Math.sin(i * 99.1 + 45.2));
  return {
    id: i,
    x: seed1 * 100,
    y: seed2 * 100,
    size: seed3 * 3 + 1,
    duration: seed1 * 15 + 15,
    delay: seed2 * 5,
    initialOpacity: seed3 * 0.4 + 0.1,
  };
});

export function ParticleField() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
            opacity: p.initialOpacity,
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
