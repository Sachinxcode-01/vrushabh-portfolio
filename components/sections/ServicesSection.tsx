'use client';

import SkewCards from '@/components/ui/gradient-card-showcase';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { Sparkles, Code2, Cpu, Wrench } from 'lucide-react';

const customCards = [
  {
    title: 'Full-Stack Web Development',
    desc: 'Building responsive Next.js App Router applications, RESTful APIs, and cloud database integrations.',
    gradientFrom: '#06b6d4',
    gradientTo: '#3b82f6',
    link: '#projects',
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'UI / UX & Interactive Motion',
    desc: 'Crafting fluid web experiences with GSAP ScrollTrigger, Framer Motion, and 3D web graphics.',
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    link: '#skills',
    icon: <Sparkles className="w-6 h-6 text-violet-400" />,
  },
  {
    title: 'Software & Algorithm Engineering',
    desc: 'Applying solid data structures and object-oriented principles (C++, Python, Java) to solve complex computational problems.',
    gradientFrom: '#10b981',
    gradientTo: '#06b6d4',
    link: '#education',
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="blue" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>07. SPECIALIZATION & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="hero-name-gradient font-extrabold">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Technical areas where I engineer solutions using full-stack web frameworks and algorithmic thinking.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Gradient Cards Showcase */}
        <SkewCards cards={customCards} />
      </div>
    </section>
  );
}
