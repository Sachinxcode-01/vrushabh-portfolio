'use client';

import { useState, useEffect } from 'react';
import { PortfolioLoader } from './PortfolioLoader';

interface ClientLoaderWrapperProps {
  children: React.ReactNode;
}

export function ClientLoaderWrapper({ children }: ClientLoaderWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if session has already played loader
    const hasLoaded = sessionStorage.getItem('vb_portfolio_loaded');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasLoaded === 'true' || reduceMotion) {
      setIsLoaded(true);
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
