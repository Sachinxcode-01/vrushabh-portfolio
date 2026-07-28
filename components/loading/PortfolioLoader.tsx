'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { LoaderBackground } from './LoaderBackground';
import { LoaderLogo } from './LoaderLogo';
import { LoaderProgress } from './LoaderProgress';

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

  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Scroll lock while loader is active
    document.body.style.overflow = 'hidden';

    // Reduced Motion check
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Session storage check (optional: play once per session)
    const hasLoaded = sessionStorage.getItem('vb_portfolio_loaded');

    if (reduceMotion || hasLoaded === 'true') {
      document.body.style.overflow = '';
      setActive(false);
      if (onComplete) onComplete();
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
        },
      });

      // Step 1: Content Entrance
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

      // Step 2: Live Progress Animation (0% to 100%)
      tl.to(progressObj, {
        value: 100,
        duration: 1.3,
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

      // Step 3: Premium Split Exit Transition
      tl.to(logoRef.current, {
        scale: 1.08,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
      })
        .to(
          contentRef.current,
          { opacity: 0, duration: 0.3 },
          '-=0.3'
        )
        .to(
          topPanelRef.current,
          { y: '-100%', duration: 0.6, ease: 'expo.inOut' },
          '-=0.2'
        )
        .to(
          bottomPanelRef.current,
          { y: '100%', duration: 0.6, ease: 'expo.inOut' },
          '-=0.6'
        );
    });

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, [mounted, onComplete]);

  if (!mounted || !active) return null;

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      aria-label="Loading Vrushabh B Portfolio"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-auto select-none"
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
