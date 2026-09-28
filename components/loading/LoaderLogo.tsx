'use client';

import { forwardRef } from 'react';
import Image from 'next/image';

export const LoaderLogo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-4 relative z-10">
      {/* Luxurious Monogram Glass Medallion & Luminous Halo */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        {/* Soft Ambient Radial Light Behind Logo */}
        <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/30 via-violet-600/30 to-blue-500/30 rounded-full blur-xl animate-pulse duration-3000" />

        {/* Silky Continuous Conic Halo (Smooth Luxury Rotation) */}
        <div
          className="absolute -inset-1.5 rounded-full opacity-60 blur-[3px] animate-[spin_8s_linear_infinite]"
          style={{
            background:
              'conic-gradient(from 0deg, #06b6d4, #8b5cf6, #3b82f6, #ec4899, #06b6d4)',
          }}
        />

        {/* Outer Hairline Glass Ring */}
        <div className="absolute -inset-2.5 rounded-full border border-white/10" />

        {/* Circular Frame with VB.png */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-tr from-cyan-500/80 via-violet-500/80 to-blue-500/80 p-0.5 shadow-2xl shadow-cyan-500/30 overflow-hidden">
          <div className="relative w-full h-full bg-[#060919] rounded-full overflow-hidden flex items-center justify-center p-2.5 backdrop-blur-xl">
            {/* Subtle Inner Glass Highlight */}
            <div className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent pointer-events-none rounded-full" />

            
            <Image
              src="/VB.png"
              alt="Vrushabh B"
              fill
              sizes="96px"
              priority
              className="object-cover rounded-full p-0.5"
            />
          </div>
        </div>
      </div>

      {/* Brand Identity / Name & Subtitle */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider">
          <span className="hero-name-gradient">Vrushabh B</span>
        </h2>
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-slate-400/90">
          Portfolio Experience
        </p>
      </div>
    </div>
  );
});

LoaderLogo.displayName = 'LoaderLogo';

