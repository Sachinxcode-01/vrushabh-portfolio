'use client';

import { forwardRef } from 'react';

interface LoaderProgressProps {
  percentageRef: React.RefObject<HTMLSpanElement | null>;
  barRef: React.RefObject<HTMLDivElement | null>;
  statusRef?: React.RefObject<HTMLParagraphElement | null>;
}

export const LoaderProgress = forwardRef<HTMLDivElement, LoaderProgressProps>(
  ({ percentageRef, barRef, statusRef }, ref) => {
    return (
      <div ref={ref} className="w-full max-w-xs sm:max-w-sm px-4 space-y-4 relative z-10 text-center">
        {/* Large Elegant Percentage Counter */}
        <div className="flex items-baseline justify-center">
          <span
            ref={percentageRef}
            className="text-4xl sm:text-5xl font-light tracking-tight text-white tabular-nums drop-shadow-[0_0_24px_rgba(6,182,212,0.35)]"
          >
            1
          </span>
          <span className="text-xl sm:text-2xl font-light text-cyan-400/80 ml-1">
            %
          </span>
        </div>

        {/* Luxurious Progress Track */}
        <div className="w-full h-1.5 sm:h-2 bg-white/[0.07] border border-white/10 rounded-full overflow-hidden p-px shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] relative">
          <div
            ref={barRef}
            className="w-full h-full bg-linear-to-r from-cyan-400 via-violet-500 to-fuchsia-400 rounded-full origin-left transform scale-x-0 relative shadow-[0_0_12px_rgba(34,211,238,0.5)] transition-transform duration-75"
          >
            {/* Luminous Shimmer Traveling Beam */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[bar-shimmer_2s_infinite]" />
          </div>
        </div>


        {/* Elegant Status Milestones */}
        <div className="flex items-center justify-center gap-2 pt-0.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </span>
          <p
            ref={statusRef}
            className="text-xs uppercase tracking-[0.25em] font-medium text-slate-300/80 transition-all duration-300"
          >
            Curating Experience
          </p>
        </div>
      </div>
    );
  }
);

LoaderProgress.displayName = 'LoaderProgress';

