'use client';

import { Sparkles, Activity, BookOpen, Laptop, Rocket } from 'lucide-react';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';

export function NowSection() {
  const currentActivities = [
    {
      icon: <Laptop className="w-5 h-5 text-cyan-400" />,
      title: 'Building Next.js 15 Web Apps',
      desc: 'Developing full-stack App Router web tools with TypeScript, MongoDB, and modern Tailwind CSS.',
      status: 'IN PROGRESS',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-violet-400" />,
      title: '3D & Motion UI Exploration',
      desc: 'Integrating GSAP ScrollTrigger and React Three Fiber 3D web graphics into high-end web experiences.',
      status: 'EXPLORING',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      title: '1st Year CSE Coursework',
      desc: 'Mastering C/C++ Programming, Applied Mathematics, and Computer Fundamentals at REC Hulkoti.',
      status: 'ACTIVE BATCH',
    },
    {
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      title: 'Algorithmic Problem Solving',
      desc: 'Practicing C++ and Python data structure challenges on competitive programming platforms.',
      status: 'DAILY SPRINT',
    },
  ];

  return (
    <section id="now" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active Status • 1st Year (2025–2029 Batch)</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>08. REAL-TIME SNAPSHOT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I’m <span className="hero-name-gradient font-extrabold">Doing Now</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            A real-time snapshot of my active development pursuits, coursework, and computational exploration.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {currentActivities.map((act, idx) => (
            <PremiumMotionCard key={idx} delay={idx * 0.08} className="h-full">
              <div className="p-6 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center">
                    {act.icon}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/8 flex items-center justify-between text-[10px] font-mono text-cyan-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {act.status}
                  </span>
                </div>
              </div>
            </PremiumMotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
