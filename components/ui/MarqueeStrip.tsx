'use client';

import { Sparkles, GraduationCap, Code2, Cpu } from 'lucide-react';

const marqueeItems = [
  { text: 'Rural Engineering College, Hulkoti', icon: <GraduationCap className="w-4 h-4 text-cyan-400" /> },
  { text: '2nd Year B.E. Computer Science', icon: <Code2 className="w-4 h-4 text-violet-400" /> },
  { text: 'Full-Stack Web Development', icon: <Sparkles className="w-4 h-4 text-blue-400" /> },
  { text: 'Smart Attendance & IoT Systems', icon: <Cpu className="w-4 h-4 text-cyan-300" /> },
  { text: 'Hulkoti, Karnataka, India', icon: <GraduationCap className="w-4 h-4 text-violet-300" /> },
];

export function MarqueeStrip() {
  return (
    <div className="relative py-4 bg-[#05070f]/90 border-y border-white/10 overflow-hidden select-none">
      {/* Edge Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#05070f] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#05070f] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 mx-6 text-xs font-mono font-semibold text-gray-300 tracking-wide"
          >
            {item.icon}
            <span>{item.text}</span>
            <span className="text-cyan-500/40 ml-4">•</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
