'use client';

import { portfolioData } from '@/data/portfolio';
import SkewCards from '@/components/ui/gradient-card-showcase';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';

const customCards = [
  {
    title: 'Full-Stack Web Development',
    desc: 'Building responsive Next.js App Router applications, RESTful APIs, and cloud database integrations.',
    gradientFrom: '#06b6d4',
    gradientTo: '#3b82f6',
    link: '#projects',
  },
  {
    title: 'UI / UX & Interactive Motion',
    desc: 'Crafting fluid web experiences with GSAP ScrollTrigger, Framer Motion, and 3D web graphics.',
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    link: '#skills',
  },
  {
    title: 'Software & Algorithm Engineering',
    desc: 'Applying solid data structures and object-oriented principles (C++, Python, Java) to solve complex computational problems.',
    gradientFrom: '#10b981',
    gradientTo: '#06b6d4',
    link: '#education',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="blue" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // 06. CORE FOCUS & SERVICES
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="text-gradient font-extrabold">Interests</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Domain areas where I apply software engineering principles, modern web tools, and algorithmic problem solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Gradient Skew Cards Showcase */}
        <SkewCards cards={customCards} />
      </div>
    </section>
  );
}
