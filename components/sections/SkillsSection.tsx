'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechIcon } from '@/components/ui/TechIcon';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { Orbit, Layers } from 'lucide-react';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  const displayedCategories = portfolioData.skillCategories.filter(
    c => activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-20 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          number="// 02."
          subtitle="TECHNICAL STACK"
          title="Skills &"
          gradientTitle="Technologies"
          description="Official programming languages, web frameworks, database engines, and software tools presented in compact glass cards."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 text-white shadow-md shadow-cyan-500/20 scale-105'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Currently Learning Banner Card */}
        {(activeCategory === 'All' || activeCategory === 'Currently Learning') && (
          <div className="mb-8">
            <PremiumMotionCard glowColor="violet">
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#080d1a]/90 via-[#0a1124]/90 to-[#080d1a]/90 border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-left">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[10px] font-mono">
                    <Orbit className="w-3 h-3 text-violet-400 animate-spin" />
                    <span>Technology Orbit & Active Learning</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Mastering Next.js 15 & 3D Web Graphics
                  </h4>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <TechIcon name="Three.js" className="w-4 h-4" />
                    <span>Three.js</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-violet-300">
                    <TechIcon name="GSAP" className="w-4 h-4" />
                    <span>GSAP</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-blue-300">
                    <TechIcon name="Next.js" className="w-4 h-4" />
                    <span>Next.js 15</span>
                  </div>
                </div>
              </div>
            </PremiumMotionCard>
          </div>
        )}

        {/* Categorized Skills Grid - Compact 6-Column Grid */}
        <div className="space-y-10">
          {displayedCategories.map((category) => (
            <div key={category.category} className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  {category.category}
                </h4>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-transparent" />
              </div>

              {/* Compact Skill Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill) => (
                  <PremiumMotionCard key={skill.name} className="h-full">
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#080d1a]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-3 group shadow-md hover:scale-105">
                      {/* Compact Brand Icon Box */}
                      <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all">
                        <TechIcon name={skill.name} className="w-5 h-5" />
                      </div>

                      {/* Text Details */}
                      <div className="min-w-0 overflow-hidden">
                        <h5 className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h5>
                        <span className="text-[10px] font-mono text-cyan-400/80 block truncate">
                          {skill.level}
                        </span>
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
