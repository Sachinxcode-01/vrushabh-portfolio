'use client';

import { forwardRef } from 'react';
import Image from 'next/image';

export const LoaderLogo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-4 relative z-10">
      {/* Monogram Circle & Orbiting Rings */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        {/* Rotating Circular Outer Borders */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/40 border-dashed animate-[spin_12s_linear_infinite]" />
        <div className="absolute -inset-2.5 rounded-full border border-violet-500/30 border-dashed animate-[spin_18s_linear_infinite_reverse]" />

        {/* Circular Frame with VB.png */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-500 via-violet-600 to-blue-500 p-[2px] shadow-2xl shadow-cyan-500/40 overflow-hidden">
          <div className="relative w-full h-full bg-[#05070f] rounded-full overflow-hidden flex items-center justify-center p-2">
            <Image
              src="/VB.png"
              alt="VB Logo"
              fill
              sizes="96px"
              priority
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Vrushabh B Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        Vrushabh B
      </h2>
    </div>
  );
});

LoaderLogo.displayName = 'LoaderLogo';
