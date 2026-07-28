'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface TypingHeadingProps {
  onComplete?: () => void;
}

export function TypingHeading({ onComplete }: TypingHeadingProps) {
  const introRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const introText = "Hi, I’m ";
    const nameText = "Vrushabh B";
    const introEl = introRef.current;
    const nameEl = nameRef.current;

    if (!introEl || !nameEl) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      introEl.textContent = introText;
      nameEl.textContent = nameText;
      if (onComplete) onComplete();
      return;
    }

    introEl.textContent = "";
    nameEl.textContent = "";

    const introState = { length: 0 };
    const nameState = { length: 0 };

    const ctx = gsap.context(() => {
      // Fade in & blur-to-clear container entrance
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.6, ease: 'power2.out' }
      );

      // Blinking cursor
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Typing timeline
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Step 1: Type "Hi, I'm "
      tl.to(introState, {
        length: introText.length,
        duration: 0.8,
        ease: "none",
        onUpdate: () => {
          introEl.textContent = introText.slice(0, Math.round(introState.length));
        },
      })
      // Step 2: Type "Vrushabh B"
      .to(nameState, {
        length: nameText.length,
        duration: 1.0,
        ease: "none",
        onUpdate: () => {
          nameEl.textContent = nameText.slice(0, Math.round(nameState.length));
        },
      });
    });

    return () => ctx.revert();
  }, [mounted, onComplete]);

  return (
    <h1
      ref={containerRef}
      className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
    >
      <span ref={introRef} />
      <span
        ref={nameRef}
        className="name-gradient drop-shadow-[0_0_25px_rgba(34,211,238,0.3)] inline-block"
      />
      <span
        ref={cursorRef}
        aria-hidden="true"
        className="ml-1 inline-block text-cyan-400 font-mono font-normal"
      >
        |
      </span>
    </h1>
  );
}
