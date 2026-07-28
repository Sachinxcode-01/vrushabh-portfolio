'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench, Sparkles, CheckCircle, Clock } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-5 h-5 text-cyan-400" />,
  "Frontend Development": <Layout className="w-5 h-5 text-violet-400" />,
  "Backend & Databases": <Database className="w-5 h-5 text-blue-400" />,
  "Tools & Platforms": <Wrench className="w-5 h-5 text-cyan-300" />,
};

const levelBadgeStyles: Record<string, string> = {
  Experienced: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  Learning: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  Familiar: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...portfolioData.skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? portfolioData.skillCategories
    : portfolioData.skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="blue" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // 02. TECHNICAL STACK
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Core programming languages, frameworks, and developer tools classified by explicit practical experience level.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white border-transparent shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-gray-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group, idx) => (
            <PremiumMotionCard key={group.category} delay={idx * 0.1} className="h-full">
              <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        {categoryIcons[group.category] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {group.category}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-gray-400">
                      {group.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mb-6">
                    {group.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border text-xs transition-all ${
                          skill.featured
                            ? 'border-cyan-500/40 text-white shadow-sm shadow-cyan-500/10'
                            : 'border-white/10 text-gray-300'
                        }`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            levelBadgeStyles[skill.level]
                          }`}
                        >
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Legend */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Experienced
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> Learning
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" /> Familiar
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
