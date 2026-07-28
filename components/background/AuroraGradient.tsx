'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function AuroraGradient() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Blob 1: Cyan Light
      gsap.to(blob1Ref.current, {
        x: '+=40',
        y: '+=30',
        scale: 1.08,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Blob 2: Violet Light
      gsap.to(blob2Ref.current, {
        x: '-=50',
        y: '+=40',
        scale: 1.1,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Blob 3: Indigo / Blue Light
      gsap.to(blob3Ref.current, {
        x: '+=35',
        y: '-=30',
        scale: 1.05,
        duration: 16,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cyan Light Blob (Upper Right) */}
      <div
        ref={blob1Ref}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-br from-cyan-500/20 via-cyan-400/10 to-transparent blur-[120px] opacity-70"
      />

      {/* Violet Light Blob (Lower Right / Center) */}
      <div
        ref={blob2Ref}
        className="absolute top-[20%] right-[15%] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-violet-600/20 via-purple-500/10 to-transparent blur-[130px] opacity-65"
      />

      {/* Indigo Light Blob (Left / Center) */}
      <div
        ref={blob3Ref}
        className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-r from-blue-600/15 via-indigo-500/10 to-transparent blur-[110px] opacity-60"
      />
    </div>
  );
}
