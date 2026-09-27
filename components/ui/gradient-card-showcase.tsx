'use client';

import React from 'react';
import { ArrowUpRight, Code2, Cpu, Sparkles, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export interface CardItem {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  link?: string;
  icon?: React.ReactNode;
}

const defaultCards: CardItem[] = [
  {
    title: 'Full-Stack Web Development',
    desc: 'Engineering high-performance Next.js App Router applications, secure RESTful APIs, and cloud database architectures.',
    gradientFrom: '#06b6d4',
    gradientTo: '#3b82f6',
    link: '#projects',
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: 'UI / UX & Interactive Motion',
    desc: 'Crafting fluid digital experiences with GSAP ScrollTrigger, Framer Motion, 3D WebGL graphics, and glassmorphic micro-interactions.',
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    link: '#skills',
    icon: <Sparkles className="w-6 h-6 text-violet-400" />,
  },
  {
    title: 'Software & Algorithm Engineering',
    desc: 'Applying core data structures and object-oriented principles (C++, Python, Java) to solve complex computational problems.',
    gradientFrom: '#10b981',
    gradientTo: '#06b6d4',
    link: '#education',
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
  },
];

interface SkewCardsProps {
  cards?: CardItem[];
}

export default function SkewCards({ cards = defaultCards }: SkewCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto py-6">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className="group relative rounded-2xl p-px transition-all duration-500 hover:-translate-y-2 h-full"
        >
          {/* Glowing Ambient Border */}
          <div
            className="absolute -inset-0.5 rounded-2xl opacity-40 group-hover:opacity-100 blur-sm transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
            }}
          />

          {/* Card Inner Container */}
          <div className="relative rounded-2xl bg-[#080d1a]/95 backdrop-blur-xl border border-white/8 p-7 sm:p-8 h-full flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Icon Container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${card.gradientFrom}20, ${card.gradientTo}10)`,
                  border: `1px solid ${card.gradientFrom}40`,
                }}
              >
                {card.icon || <Layers className="w-6 h-6 text-cyan-400" />}
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/8">
              <a
                href={card.link || '#contact'}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 group-hover:text-white transition-colors"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
