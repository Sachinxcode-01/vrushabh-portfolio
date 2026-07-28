'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface SectionHeadingProps {
  number: string;
  subtitle: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  number,
  subtitle,
  title,
  gradientTitle,
  description,
  className = '',
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`text-center mb-16 ${className}`}>
      {/* Small uppercase label & Section Number */}
      <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
        {number} — {subtitle}
      </h2>

      {/* Main Heading */}
      <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
        {title} {gradientTitle && <span className="text-gradient font-extrabold">{gradientTitle}</span>}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          {description}
        </p>
      )}

      {/* Animated Accent Line */}
      <div className="relative w-20 h-1 mx-auto mt-4 overflow-hidden rounded-full bg-white/10">
        <div
          ref={lineRef}
          className="w-full h-full bg-gradient-to-r from-cyan-400 via-violet-600 to-blue-500 origin-left"
        />
      </div>
    </div>
  );
}
