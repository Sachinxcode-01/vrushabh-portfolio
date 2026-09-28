'use client';

import { Sparkles, Code2, GraduationCap, Users, ArrowUpRight, Compass } from 'lucide-react';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { DeveloperTerminal } from '@/components/ui/DeveloperTerminal';

export function BentoSection() {
  return (
    <section id="bento" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="indigo" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>04. PERSPECTIVE & FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Personal Drive & <span className="hero-name-gradient font-extrabold">Philosophy</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            A glimpse into core engineering values, technology exploration, and development philosophy.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Current Focus */}
          <PremiumMotionCard glowColor="cyan" className="md:col-span-2">
            <div className="p-6 sm:p-8 space-y-5 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Active Architecture
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  High-Performance Web & Systems Engineering
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Focusing on Next.js 15 App Router, TypeScript strict typing, WebGL shaders with React Three Fiber, and robust RESTful API backend microservices with MongoDB and PostgreSQL.
                </p>
              </div>

              {/* Interactive Code Pill Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs font-mono text-cyan-300">
                  #Next.js15
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs font-mono text-violet-300">
                  #TypeScript
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs font-mono text-blue-300">
                  #Three.js
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/8 text-xs font-mono text-emerald-300">
                  #C++_Algorithms
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
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Academic Journey
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  1st Year B.E. Computer Science Engineering student (2025–2029 Batch) at Rural Engineering College, Hulkoti.
                </p>
              </div>

              <div className="pt-2 border-t border-white/8 flex items-center justify-between text-[11px] font-mono text-violet-400 font-semibold">
                <span>Hulkoti, Karnataka</span>
                <span>PIN: 588205</span>
              </div>
            </div>
          </PremiumMotionCard>

          {/* Card 3: Interactive Developer CLI Terminal */}
          <div className="md:col-span-2">
            <DeveloperTerminal />
          </div>

          {/* Card 4: Open to Collaboration */}
          <PremiumMotionCard glowColor="cyan" className="md:col-span-1">
            <div className="p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open for Teams
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Hackathons & Open Source
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Enthusiastic about teaming up with fellow engineers and designers to build products and compete in hackathons.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-102 transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </PremiumMotionCard>

        </div>
      </div>
    </section>
  );
}
