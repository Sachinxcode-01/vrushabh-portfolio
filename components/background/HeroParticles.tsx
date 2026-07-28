'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate deterministic particles on client mount to eliminate hydration mismatch
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 14 : 32;

    const generated: Particle[] = Array.from({ length: count }, (_, i) => {
      // Deterministic math using sine formula
      const seed1 = Math.abs(Math.sin(i * 12.9898 + 78.233));
      const seed2 = Math.abs(Math.cos(i * 4.1414 + 12.515));
      const seed3 = Math.abs(Math.sin(i * 99.1 + 45.2));

      return {
        id: i,
        x: seed1 * 100,
        y: seed2 * 100,
        size: 1.5 + seed3 * 2,
        duration: 12 + seed1 * 12,
        delay: seed2 * 5,
        opacity: 0.2 + seed3 * 0.4,
      };
    });

    setParticles(generated);
  }, []);

  if (!particles.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-cyan-300 animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.15); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
