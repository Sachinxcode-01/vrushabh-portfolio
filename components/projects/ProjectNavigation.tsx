'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectNavigationProps {
  currentIndex: number;
  totalProjects: number;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectNavigation({
  currentIndex,
  totalProjects,
  onPrev,
  onNext,
}: ProjectNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-gray-400">
      <button
        onClick={onPrev}
        className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all flex items-center gap-1.5"
      >
        <ChevronLeft className="w-4 h-4 text-cyan-400" />
        <span>Previous</span>
      </button>

      <span>
        Project {currentIndex + 1} of {totalProjects}
      </span>

      <button
        onClick={onNext}
        className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all flex items-center gap-1.5"
      >
        <span>Next</span>
        <ChevronRight className="w-4 h-4 text-cyan-400" />
      </button>
    </div>
  );
}
