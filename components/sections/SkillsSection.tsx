'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { TechIcon } from '@/components/ui/TechIcon';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { Layers, Orbit } from 'lucide-react';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  const displayedCategories = portfolioData.skillCategories.filter(
    c => activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>02. TECHNICAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="hero-name-gradient font-extrabold">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Languages, frameworks, databases, and developer toolchains utilized in engineering robust software.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white glass-panel hover:border-cyan-500/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Active Orbit Learning Banner */}
        <div className="mb-10">
          <PremiumMotionCard glowColor="violet">
            <div className="p-4 sm:p-5 rounded-2xl bg-linear-to-r from-[#0a0f1d]/90 via-[#0e162d]/90 to-[#0a0f1d]/90 border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-[10px] font-mono">
                  <Orbit className="w-3 h-3 text-violet-400 animate-spin" />
                  <span>Current Exploration Horizon</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Next.js 15 App Router, React Three Fiber & Algorithm Optimization
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/8 flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <TechIcon name="Three.js" className="w-4 h-4" />
                  <span>Three.js</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/8 flex items-center gap-2 text-xs font-mono text-violet-300">
                  <TechIcon name="GSAP" className="w-4 h-4" />
                  <span>GSAP</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/4 border border-white/8 flex items-center gap-2 text-xs font-mono text-blue-300">
                  <TechIcon name="Next.js" className="w-4 h-4" />
                  <span>Next.js 15</span>
                </div>
              </div>
            </div>
          </PremiumMotionCard>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10">
          {displayedCategories.map(category => (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.description}
                  </span>
                </div>
                <div className="h-px flex-1 bg-linear-to-r from-cyan-500/20 via-violet-500/15 to-transparent ml-2" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, sIdx) => {
                  const isExperienced = skill.level === 'Experienced';
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sIdx * 0.04 }}
                    >
                      <div className="p-3 sm:p-3.5 rounded-xl bg-[#090d1a]/85 backdrop-blur-md border border-white/8 hover:border-cyan-400/40 hover:bg-[#0d1426] transition-all duration-300 flex items-center gap-3 group shadow-md hover:-translate-y-1">
                        {/* Icon */}
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/40 transition-all">
                          <TechIcon name={skill.name} className="w-5 h-5" />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 overflow-hidden flex-1">
                          <h4 className="text-xs font-bold text-white truncate group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isExperienced ? 'bg-cyan-400' : 'bg-violet-400 animate-pulse'
                              }`}
                            />
                            <span className="text-[10px] font-mono text-slate-400 truncate">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
