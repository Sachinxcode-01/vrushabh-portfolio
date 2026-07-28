'use client';

import { forwardRef } from 'react';

interface LoaderProgressProps {
  percentageRef: React.RefObject<HTMLSpanElement | null>;
  barRef: React.RefObject<HTMLDivElement | null>;
}

export const LoaderProgress = forwardRef<HTMLDivElement, LoaderProgressProps>(
  ({ percentageRef, barRef }, ref) => {
    return (
      <div ref={ref} className="w-full max-w-xs sm:max-w-sm px-4 space-y-3 relative z-10 text-center">
        {/* Status Text */}
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
          Initializing Portfolio Experience
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div
            ref={barRef}
            className="w-full h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 rounded-full origin-left transform scale-x-0"
          />
        </div>

        {/* Percentage Counter & Decorative Marks */}
        <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 px-1">
          <span>// SYS_LOAD</span>
          <span ref={percentageRef} className="text-cyan-300 font-bold">
            0%
          </span>
          <span>588205</span>
        </div>
      </div>
    );
  }
);

LoaderProgress.displayName = 'LoaderProgress';
