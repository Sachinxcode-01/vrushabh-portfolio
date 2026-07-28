import React from 'react';

export interface CardItem {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  link?: string;
}

const defaultCards: CardItem[] = [
  {
    title: 'Full-Stack Development',
    desc: 'Building responsive Next.js App Router applications, RESTful APIs, and cloud database integrations.',
    gradientFrom: '#06b6d4',
    gradientTo: '#3b82f6',
    link: '#projects',
  },
  {
    title: 'Interactive Motion UI',
    desc: 'Crafting fluid web experiences with GSAP ScrollTrigger, Framer Motion, and glassmorphism styling.',
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    link: '#skills',
  },
  {
    title: 'Algorithmic Problem Solving',
    desc: 'Applying core data structures and object-oriented principles in C++, Python, and Java.',
    gradientFrom: '#10b981',
    gradientTo: '#06b6d4',
    link: '#education',
  },
];

interface SkewCardsProps {
  cards?: CardItem[];
}

export default function SkewCards({ cards = defaultCards }: SkewCardsProps) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap py-10 bg-transparent min-h-[420px]">
        {cards.map(({ title, desc, gradientFrom, gradientTo, link = '#' }, idx) => (
          <div
            key={idx}
            className="group relative w-[320px] h-[400px] m-[30px_20px] transition-all duration-500"
          >
            {/* Skewed gradient panels */}
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />
            <span
              className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
              style={{
                background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
              }}
            />

            {/* Animated blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            </span>

            {/* Content */}
            <div className="relative z-20 left-0 p-[20px_35px] bg-[#05070f]/90 border border-white/10 backdrop-blur-[12px] shadow-2xl rounded-xl text-white transition-all duration-500 group-hover:left-[-20px] group-hover:p-[45px_35px] h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                  {title}
                </h2>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {desc}
                </p>
              </div>

              <a
                href={link}
                className="inline-block text-xs font-bold text-white bg-white/10 border border-white/20 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 hover:border-transparent px-4 py-2.5 rounded-lg transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind custom utilities for animation */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
