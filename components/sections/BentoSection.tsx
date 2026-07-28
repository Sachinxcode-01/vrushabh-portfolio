'use client';

import { Sparkles, Code2, Compass, Heart, GraduationCap, Users } from 'lucide-react';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function BentoSection() {
  return (
    <section id="bento" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="indigo" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="// BENTO"
          subtitle="BEYOND CODE"
          title="Personal Drive &"
          gradientTitle="Focus"
          description="A glimpse into my core values, current tech stack exploration, academic journey, and development philosophy."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Current Focus */}
          <PremiumMotionCard glowColor="cyan" className="md:col-span-2">
            <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Current Technology Focus
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Deepening my mastery of Next.js 15 App Router, TypeScript type safety, WebGL shaders with Three.js, and scalable REST API backend microservices.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300">
                  #Next.js15
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-violet-300">
                  #TypeScript
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-blue-300">
                  #Three.js
                </span>
              </div>
            </div>
          </PremiumMotionCard>

          {/* Card 2: Academic Milestone */}
          <PremiumMotionCard glowColor="violet">
            <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Academic Journey
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  2nd Year B.E. Computer Science Engineering student at Rural Engineering College, Hulkoti.
                </p>
              </div>
              <span className="text-[11px] font-mono text-violet-400 font-semibold block">
                Hulkoti, Karnataka • 588205
              </span>
            </div>
          </PremiumMotionCard>

          {/* Card 3: Development Philosophy */}
          <PremiumMotionCard glowColor="blue">
            <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Development Philosophy
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Clean modular architecture, user-centric motion design, and performance-first engineering.
                </p>
              </div>
              <span className="text-[11px] font-mono text-blue-400 font-semibold block">
                // CLEAN_CODE
              </span>
            </div>
          </PremiumMotionCard>

          {/* Card 4: Open to Collaboration */}
          <PremiumMotionCard glowColor="cyan" className="md:col-span-2">
            <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  Open to Collaboration & Hackathons
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Enthusiastic about partnering with fellow developers, student teams, and open-source contributors to build meaningful digital tools.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </PremiumMotionCard>
        </div>
      </div>
    </section>
  );
}
