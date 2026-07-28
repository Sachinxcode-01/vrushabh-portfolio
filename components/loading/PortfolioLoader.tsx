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

  const [active, setActive] = useState(true);

  useEffect(() => {
    // Lock scroll immediately on mount
    document.body.style.overflow = 'hidden';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasLoaded = sessionStorage.getItem('vb_portfolio_loaded');

    if (reduceMotion || hasLoaded === 'true') {
      document.body.style.overflow = '';
      setActive(false);
      if (onComplete) onComplete();
      ScrollTrigger.refresh();
      return;
    }

    const progressObj = { value: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('vb_portfolio_loaded', 'true');
          document.body.style.overflow = '';
          setActive(false);
          if (onComplete) onComplete();
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        },
      });

      // Step 1: Content Fade In
      tl.fromTo(
        logoRef.current,
        { scale: 0.85, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }
      ).fromTo(
        progressContainerRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.2'
      );

      // Step 2: Progress Counter (0% to 100%)
      tl.to(progressObj, {
        value: 100,
        duration: 1.2,
        ease: 'power2.inOut',
        onUpdate: () => {
          const val = Math.round(progressObj.value);
          if (percentageRef.current) {
            percentageRef.current.textContent = `${val}%`;
          }
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${val / 100})`;
          }
        },
      });

      // Step 3: Smooth Split Exit Curtain
      tl.to(logoRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 0.35,
        ease: 'power3.inOut',
      })
        .to(contentRef.current, { opacity: 0, duration: 0.25 }, '-=0.25')
        .to(topPanelRef.current, { y: '-100%', duration: 0.6, ease: 'expo.inOut' }, '-=0.15')
        .to(bottomPanelRef.current, { y: '100%', duration: 0.6, ease: 'expo.inOut' }, '-=0.6');
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
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center pointer-events-auto select-none bg-[#05070f]"
    >
      {/* Top Split Panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#05070f] z-10 border-b border-white/5"
      />

      {/* Bottom Split Panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#05070f] z-10 border-t border-white/5"
      />

      {/* Background Environment */}
      <LoaderBackground />

      {/* Center Loader Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center space-y-8"
      >
        <LoaderLogo ref={logoRef} />
        <LoaderProgress
          ref={progressContainerRef}
          percentageRef={percentageRef}
          barRef={barRef}
        />
      </div>
    </div>
  );
}
