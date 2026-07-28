'use client';

import { Sparkles, Activity, BookOpen, Laptop, Rocket } from 'lucide-react';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function NowSection() {
  const currentActivities = [
    {
      icon: <Laptop className="w-5 h-5 text-cyan-400" />,
      title: 'Building Next.js 15 Web Apps',
      desc: 'Developing full-stack App Router web tools with TypeScript, MongoDB, and Tailwind CSS.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-violet-400" />,
      title: '3D & Motion UI Exploration',
      desc: 'Integrating GSAP ScrollTrigger and Three.js 3D web graphics into modern portfolio projects.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      title: '2nd Year CSE Coursework',
      desc: 'Mastering Data Structures, DBMS, Object-Oriented Programming, and Computer Architecture at REC Hulkoti.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
      title: 'Algorithmic Problem Solving',
      desc: 'Practicing C++ and Python data structure challenges on competitive programming platforms.',
    },
  ];

  return (
    <section id="now" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-500/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active Status • Updated 2026</span>
          </div>
        </div>

        {/* Section Heading */}
        <SectionHeading
          number="// CURRENT"
          subtitle="WHAT I’M DOING NOW"
          title="Active Projects &"
          gradientTitle="Learning Focus"
          description="A real-time snapshot of my active development pursuits, coursework, and computational exploration."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentActivities.map((act, idx) => (
            <PremiumMotionCard key={idx} delay={idx * 0.1} className="h-full">
              <div className="p-6 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {act.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {act.title}
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-cyan-400 font-semibold">
                  // IN_PROGRESS
                </div>
              </div>
            </PremiumMotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
