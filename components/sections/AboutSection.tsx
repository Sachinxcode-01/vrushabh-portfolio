'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { User, GraduationCap, Target, Lightbulb, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { CountUp } from '@/components/animations/CountUp';
import { MotionCard } from '@/components/animations/MotionCard';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-[#05070f] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // Personal Profile
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Vrushabh B</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* About Profile Image Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <MotionCard className="w-full max-w-md">
              <div className="relative p-2 rounded-3xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-blue-500 shadow-2xl">
                
                {/* Scroll-Triggered Reveal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.12, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#0a0d18] rounded-[22px] p-6 text-center border border-white/10 relative overflow-hidden"
                >
                  {/* Portrait Image using /Vrushabh.jpeg */}
                  <div className="relative w-44 h-44 mx-auto mb-6 rounded-2xl border-2 border-cyan-500/40 overflow-hidden shadow-xl shadow-cyan-500/20 group">
                    <Image
                      src="/Vrushabh.jpeg"
                      alt="Vrushabh B - Professional Profile Portrait"
                      fill
                      sizes="176px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-1">
                    {portfolioData.personal.name}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400 mb-4">
                    {portfolioData.personal.academicYear}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-300 mb-6 bg-white/5 py-2 px-3 rounded-xl border border-white/10">
                    <GraduationCap className="w-4 h-4 text-violet-400 shrink-0" />
                    <span className="truncate">{portfolioData.personal.college}</span>
                  </div>

                  {/* Personal Qualities Grid */}
                  <div className="grid grid-cols-2 gap-2 text-left text-xs font-medium">
                    {portfolioData.personal.personalQualities.map((quality, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-gray-300 bg-white/5 p-2 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{quality}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </div>
            </MotionCard>
          </div>

          {/* Detailed Biography & Learning Goals */}
          <div className="lg:col-span-7 space-y-6">
            <MotionCard>
              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-cyan-400" />
                  <span>Biography & Academic Background</span>
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I am a 2nd Year Computer Science Engineering student studying at Rural Engineering College, Hulkoti (588205). My journey into computer science is driven by a deep fascination with how computational algorithms and modern web software can transform abstract ideas into intuitive, high-impact digital applications.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Focusing on full-stack architecture, web graphics, and algorithmic efficiency, I aim to master modern web frameworks like Next.js and React while establishing strong foundations in C, C++, and Python.
                </p>
              </div>
            </MotionCard>

            {/* Learning Goals & Interest Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MotionCard glowColor="cyan">
                <div className="p-6">
                  <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2 font-mono text-cyan-400">
                    <Target className="w-4 h-4 text-cyan-400" />
                    <span>Current Learning Goals</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {portfolioData.personal.learningGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionCard>

              <MotionCard glowColor="violet">
                <div className="p-6">
                  <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2 font-mono text-violet-400">
                    <Award className="w-4 h-4 text-violet-400" />
                    <span>Key Interest Areas</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {portfolioData.personal.interests.map((interest, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-violet-400 font-bold">•</span>
                        <span>{interest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionCard>
            </div>
          </div>

        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <MotionCard key={stat.id} delay={idx * 0.1}>
              <div className="p-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-mono mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
