'use client';

import Image from 'next/image';
import { GraduationCap, Target, Lightbulb, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { CountUp } from '@/components/animations/CountUp';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="indigo" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. PERSONAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="hero-name-gradient font-extrabold">Vrushabh B</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Passionate software engineer and computer science student crafting scalable systems and interactive web architectures.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
          
          {/* Profile Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <PremiumMotionCard className="w-full max-w-md h-full" glowColor="cyan">
              <div className="p-6 sm:p-8 h-full flex flex-col justify-between text-center">
                <div>
                  {/* Portrait Frame with Ambient Ring */}
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl p-1 bg-linear-to-tr from-cyan-400/40 via-violet-500/30 to-blue-500/40 shadow-xl group">
                    <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                      <Image
                        src="/Vrushabh.jpeg"
                        alt="Vrushabh B - Profile"
                        fill
                        sizes="160px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                    {portfolioData.personal.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4 font-semibold">
                    {portfolioData.personal.academicYear}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-6 bg-white/4 py-2.5 px-3.5 rounded-xl border border-white/8">
                    <GraduationCap className="w-4 h-4 text-violet-400 shrink-0" />
                    <span className="truncate">{portfolioData.personal.college}</span>
                  </div>
                </div>

                {/* Personal Qualities Grid */}
                <div className="grid grid-cols-2 gap-2 text-left text-xs font-medium pt-2">
                  {portfolioData.personal.personalQualities.map((quality, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-300 bg-white/3 p-2.5 rounded-xl border border-white/6 hover:border-cyan-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{quality}</span>
                    </div>
                  ))}
                </div>

              </div>
            </PremiumMotionCard>
          </div>

          {/* Detailed Biography & Goals */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <PremiumMotionCard glowColor="violet">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Academic Background & Vision
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  I am a Computer Science Engineering student (2025–2029 Batch) at Rural Engineering College, Hulkoti. Driven by a deep curiosity for computer systems, I focus on transforming algorithmic concepts into responsive, high-performance web products.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  My development stack spans modern full-stack JavaScript/TypeScript frameworks (Next.js, React, Node.js) together with rigorous foundations in C, C++, and Python for data structures and algorithm design.
                </p>
              </div>
            </PremiumMotionCard>

            {/* Learning Goals & Interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PremiumMotionCard glowColor="cyan">
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                    <Target className="w-4 h-4" />
                    <span>Learning Horizons</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {portfolioData.personal.learningGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PremiumMotionCard>

              <PremiumMotionCard glowColor="violet">
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-semibold">
                    <Award className="w-4 h-4" />
                    <span>Key Interest Areas</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {portfolioData.personal.interests.map((interest, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-violet-400 font-bold">•</span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </PremiumMotionCard>
            </div>
          </div>

        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <PremiumMotionCard key={stat.id} delay={idx * 0.08}>
              <div className="p-5 sm:p-6 text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 font-mono">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">{stat.label}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{stat.description}</div>
              </div>
            </PremiumMotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
