'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LoaderBackground } from './LoaderBackground';
import { LoaderLogo } from './LoaderLogo';
import { LoaderProgress } from './LoaderProgress';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PortfolioLoaderProps {
  onComplete?: () => void;
}

export function PortfolioLoader({ onComplete }: PortfolioLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  const [active, setActive] = useState(true);

  useEffect(() => {
    // Lock scroll immediately on mount
    document.body.style.overflow = 'hidden';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      document.body.style.overflow = '';
      const raf = requestAnimationFrame(() => {
        setActive(false);
        if (onComplete) onComplete();
        ScrollTrigger.refresh();
      });
      return () => cancelAnimationFrame(raf);
    }

    const progressObj = { value: 1 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          setActive(false);
          if (onComplete) onComplete();
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        },
      });

      // Step 1: Luxurious Content Fade & Gentle Rise
      tl.fromTo(
        logoRef.current,
        { scale: 0.9, opacity: 0, filter: 'blur(12px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power3.out' }
      ).fromTo(
        progressContainerRef.current,
        { y: 20, opacity: 0, filter: 'blur(6px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      );

      // Step 2: Ultra-Smooth Progress Counter (1 to 100)
      tl.to(progressObj, {
        value: 100,
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: () => {
          const val = Math.max(1, Math.min(100, Math.round(progressObj.value)));
          if (percentageRef.current) {
            percentageRef.current.textContent = `${val}`;
          }
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${val / 100})`;
          }
          if (statusRef.current) {
            if (val < 35) {
              statusRef.current.textContent = 'Curating Experience';
            } else if (val < 75) {
              statusRef.current.textContent = 'Loading Visuals & Atmosphere';
            } else if (val < 98) {
              statusRef.current.textContent = 'Harmonizing Interface';
            } else {
              statusRef.current.textContent = 'Welcome';
            }
          }
        },
      });

      // Short Golden Pause at 100% for satisfaction
      tl.to({}, { duration: 0.2 });

      // Step 3: Cinematic Luxury Reveal Curtain
      tl.to(contentRef.current, {
        scale: 1.04,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.45,
        ease: 'power3.inOut',
      })
        .to(
          topPanelRef.current,
          { y: '-100%', duration: 0.85, ease: 'expo.inOut' },
          '-=0.15'
        )
        .to(
          bottomPanelRef.current,
          { y: '100%', duration: 0.85, ease: 'expo.inOut' },
          '-=0.85'
        )
        .to(
          containerRef.current,
          { opacity: 0, duration: 0.35, ease: 'power2.out' },
          '-=0.35'
        );
    });

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, [onComplete]);

  if (!active) return null;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label="Loading Vrushabh B Portfolio"
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center pointer-events-auto select-none bg-[#040711]"
    >
      {/* Top Split Panel with Soft Gradient Rim Shadow */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#040711] z-10 border-b border-cyan-500/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
      />

      {/* Bottom Split Panel with Soft Gradient Rim Shadow */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#040711] z-10 border-t border-cyan-500/10 shadow-[0_-12px_40px_rgba(0,0,0,0.8)]"
      />

      {/* Background Environment */}
      <LoaderBackground />

      {/* Center Loader Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center space-y-9"
      >
        <LoaderLogo ref={logoRef} />
        <LoaderProgress
          ref={progressContainerRef}
          percentageRef={percentageRef}
          barRef={barRef}
          statusRef={statusRef}
        />
      </div>
    </div>
  );
}

