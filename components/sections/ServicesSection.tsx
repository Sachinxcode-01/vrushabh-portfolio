'use client';

import { Code2, Layout, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-7 h-7 text-cyan-400" />,
  Layout: <Layout className="w-7 h-7 text-violet-400" />,
  Cpu: <Cpu className="w-7 h-7 text-blue-400" />,
  Sparkles: <Sparkles className="w-7 h-7 text-cyan-300" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="blue" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // 06. CORE FOCUS & SERVICES
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & <span className="text-gradient">Interests</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Domain areas where I apply software engineering principles, modern web tools, and algorithmic problem solving.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.services.map((service, idx) => (
            <PremiumMotionCard key={service.id} delay={idx * 0.15} className="h-full">
              <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all shadow-lg">
                    {iconMap[service.icon] || <Sparkles className="w-7 h-7 text-cyan-400" />}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5">
                    {service.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span>Explore Expertise</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </PremiumMotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
