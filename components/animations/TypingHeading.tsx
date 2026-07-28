'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TypingHeadingProps {
  loadingComplete?: boolean;
  onComplete?: () => void;
}

export function TypingHeading({ loadingComplete = true, onComplete }: TypingHeadingProps) {
  const greetingRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!loadingComplete || hasAnimatedRef.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const greetingText = "Hi, I’m ";
    const nameText = " Vrushabh B";

    if (reduceMotion) {
      if (greetingRef.current) greetingRef.current.textContent = greetingText;
      if (nameRef.current) nameRef.current.textContent = nameText;
      if (cursorRef.current) cursorRef.current.style.opacity = '0.3';
      hasAnimatedRef.current = true;
      if (onComplete) onComplete();
      return;
    }

    const greetingState = { length: 0 };
    const nameState = { length: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.3,
        onComplete: () => {
          hasAnimatedRef.current = true;
          // Fade cursor slightly after typing finishes
          if (cursorRef.current) {
            gsap.to(cursorRef.current, { opacity: 0.3, duration: 0.5 });
          }
          if (onComplete) onComplete();
        },
      });

      // 1. Type "Hi, I’m "
      tl.to(greetingState, {
        length: greetingText.length,
        duration: 1.25,
        ease: 'none',
        onUpdate: () => {
          if (greetingRef.current) {
            greetingRef.current.textContent = greetingText.slice(
              0,
              Math.round(greetingState.length)
            );
          }
        },
      });

      // 2. Type "Vrushabh B" with electric animated gradient styling
      tl.to(nameState, {
        length: nameText.length,
        duration: 1.8,
        ease: 'none',
        onUpdate: () => {
          if (nameRef.current) {
            nameRef.current.textContent = nameText.slice(
              0,
              Math.round(nameState.length)
            );
          }
        },
      });
    });

    return () => ctx.revert();
  }, [loadingComplete, onComplete]);

  return (
    <h1
      aria-label="Hi, I’m Vrushabh B"
      className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
    >
      <span ref={greetingRef} aria-hidden="true" className="inline whitespace-pre" />
      <span
        ref={nameRef}
        aria-hidden="true"
        className="hero-name-gradient inline font-extrabold"
      />
      <span
        ref={cursorRef}
        aria-hidden="true"
        className="typing-cursor animate-pulse text-cyan-400 font-normal ml-1"
      >
        |
      </span>
    </h1>
  );
}
