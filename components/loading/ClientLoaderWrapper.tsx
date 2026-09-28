'use client';

import { useState, useEffect } from 'react';
import { PortfolioLoader } from './PortfolioLoader';

interface ClientLoaderWrapperProps {
  children: React.ReactNode;
}

export function ClientLoaderWrapper({ children }: ClientLoaderWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      const raf = requestAnimationFrame(() => setIsLoaded(true));
      return () => cancelAnimationFrame(raf);
    }
  }, []);


  return (
    <>
      <PortfolioLoader onComplete={() => setIsLoaded(true)} />
      <div
        className={`transition-opacity duration-700 ease-out ${
          isLoaded
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {children}
      </div>
    </>
  );
}
