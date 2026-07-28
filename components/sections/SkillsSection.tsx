'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechIcon } from '@/components/ui/TechIcon';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { Sparkles, Cpu, Orbit, Layers } from 'lucide-react';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  const displayedCategories = portfolioData.skillCategories.filter(
    c => activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="// 02."
          subtitle="TECHNICAL STACK"
          title="Skills &"
          gradientTitle="Technologies"
          description="Official programming languages, web frameworks, database engines, and software tools presented in a modern 3D glass architecture."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Currently Learning Banner Card */}
        {(activeCategory === 'All' || activeCategory === 'Currently Learning') && (
          <div className="mb-12">
            <PremiumMotionCard glowColor="violet">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#080d1a]/90 via-[#0a1124]/90 to-[#080d1a]/90 border border-violet-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[11px] font-mono">
                    <Orbit className="w-3.5 h-3.5 text-violet-400 animate-spin" />
                    <span>Technology Orbit & Active Learning</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Mastering Next.js 15 & 3D Web Graphics
                  </h4>
                  <p className="text-xs text-gray-300 max-w-2xl leading-relaxed">
                    Expanding my computer science stack with WebGL 3D canvas rendering, GSAP timeline animations, and high-throughput backend APIs.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <TechIcon name="Three.js" className="w-6 h-6" />
                    <span>Three.js</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-violet-300">
                    <TechIcon name="GSAP" className="w-6 h-6" />
                    <span>GSAP</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-blue-300">
                    <TechIcon name="Next.js" className="w-6 h-6" />
                    <span>Next.js 15</span>
                  </div>
                </div>
              </div>
            </PremiumMotionCard>
          </div>
        )}

        {/* Categorized Skills Grid */}
        <div className="space-y-14">
          {displayedCategories.map((category) => (
            <div key={category.category} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {category.category}
                </h4>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-transparent" />
              </div>

              {/* Bento Grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {category.skills.map((skill) => (
                  <PremiumMotionCard key={skill.name} className="h-full">
                    <div className="p-6 rounded-2xl bg-[#080d1a]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between h-full group space-y-4 shadow-xl">
                      {/* Top Bar: Icon & Level Tag */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all shadow-md">
                          <TechIcon name={skill.name} className="w-7 h-7" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                          {skill.level}
                        </span>
                      </div>

                      {/* Details: Name & Category */}
                      <div className="space-y-1">
                        <h5 className="text-base font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h5>
                        <p className="text-[11px] font-mono text-gray-400">
                          {category.category} Stack
                        </p>
                      </div>

                      {/* Footer Glow Line */}
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                        <span>Official Icon</span>
                        <Cpu className="w-3.5 h-3.5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>
                  </PremiumMotionCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
