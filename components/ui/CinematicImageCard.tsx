'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';

export interface CinematicImageCardProps {
  id: string;
  title: string;
  categoryOrYear: string;
  metadata: string | string[];
  image: string;
  actionText?: string;
  onClick?: () => void;
  priority?: boolean;
  className?: string;
}

export function CinematicImageCard({
  title,
  categoryOrYear,
  metadata,
  image,
  actionText = 'View Project',
  onClick,
  priority = false,
  className = '',
}: CinematicImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    const cta = ctaRef.current;
    const arrow = arrowRef.current;
    const sweep = lightSweepRef.current;

    if (!card || !img || !cta || !arrow) return;

    // Check touch screen or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const handleMouseEnter = () => {
        gsap.to(img, {
          scale: 1.1,
          y: -6,
          duration: 0.7,
          ease: 'power3.out',
        });

        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.25)',
          borderColor: 'rgba(6, 182, 212, 0.4)',
          duration: 0.45,
          ease: 'power3.out',
        });

        gsap.to(arrow, {
          x: 6,
          y: -2,
          duration: 0.35,
          ease: 'power2.out',
        });

        gsap.to(cta, {
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          y: -2,
          duration: 0.35,
          ease: 'power2.out',
        });

        if (sweep) {
          gsap.fromTo(
            sweep,
            { x: '-100%' },
            { x: '100%', duration: 0.8, ease: 'power2.inOut' }
          );
        }
      };

      const handleMouseLeave = () => {
        gsap.to(img, {
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        });

        gsap.to(card, {
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          duration: 0.45,
          ease: 'power3.out',
        });

        gsap.to(arrow, {
          x: 0,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
        });

        gsap.to(cta, {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
        });
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (isTouch) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / (rect.height / 2)) * 4; // Max ±4 deg
        const rotateY = (x / (rect.width / 2)) * 5; // Max ±5 deg

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: 'power1.out',
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mousemove', handleMouseMove);
    }, card);

    return () => ctx.revert();
  }, []);

  const metaItems = Array.isArray(metadata) ? metadata : [metadata];

  return (
    <article
      ref={cardRef}
      onClick={onClick}
      className={`group relative w-full h-[480px] sm:h-[520px] rounded-[24px] overflow-hidden border border-white/10 bg-[#05070f] cursor-pointer shadow-xl transition-colors duration-300 transform-gpu ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Background Image Container */}
      <div ref={imageRef} className="absolute inset-0 w-full h-full transform-gpu">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Transparent Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(to top, rgba(5, 8, 18, 0.98) 0%, rgba(5, 8, 18, 0.76) 35%, rgba(5, 8, 18, 0.15) 70%, transparent 100%)',
        }}
      />

      {/* Top Badge Category */}
      <div className="absolute top-5 left-5 z-20">
        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-semibold bg-[#05070f]/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-lg">
          {categoryOrYear}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 flex flex-col justify-end space-y-4">
        <div>
          {/* Title */}
          <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Tech Stack / Metadata Line */}
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {metaItems.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-[11px] font-mono text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Integrated Glass CTA Panel */}
        <div
          ref={ctaRef}
          className="relative overflow-hidden w-full py-3.5 px-4 rounded-xl bg-white/5 border border-white/15 backdrop-blur-md flex items-center justify-between transition-colors"
        >
          {/* Light Sweep Effect */}
          <div
            ref={lightSweepRef}
            className="absolute top-0 bottom-0 width-full w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -translate-x-full"
          />

          <span className="text-xs font-semibold font-mono text-cyan-300 group-hover:text-white transition-colors">
            {actionText}
          </span>

          <ArrowUpRight
            ref={arrowRef}
            className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors"
          />
        </div>
      </div>
    </article>
  );
}
