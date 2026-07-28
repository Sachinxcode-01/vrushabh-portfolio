'use client';

import { useEffect, useRef, useState } from 'react';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none bg-white/5">
      <div
        ref={barRef}
        className="w-full h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 origin-left transform scale-x-0 transition-transform duration-75"
      />
    </div>
  );
}
