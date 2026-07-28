'use client';

import { forwardRef } from 'react';

export const LoaderLogo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center space-y-4 relative z-10">
      {/* Monogram Box & Orbiting Ring */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        {/* Rotating Circular Border */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-[spin_12s_linear_infinite]" />
        <div className="absolute -inset-2 rounded-full border border-violet-500/20 border-dashed animate-[spin_18s_linear_infinite_reverse]" />

        {/* Monogram Box */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-blue-500 p-[1px] shadow-2xl shadow-cyan-500/30">
          <div className="w-full h-full bg-[#05070f] rounded-[15px] flex items-center justify-center font-mono font-extrabold text-cyan-300 text-3xl sm:text-4xl tracking-wider">
            VB
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
