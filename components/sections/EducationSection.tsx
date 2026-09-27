'use client';

import { useRef } from 'react';
import { Calendar, MapPin, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { PremiumMotionCard } from '@/components/ui/PremiumMotionCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

export function EducationSection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#education-timeline',
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="education" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="hero-name-gradient font-extrabold">Milestones</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Formal collegiate engineering education, foundational computer science coursework, and academic excellence.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Vertical Animated Timeline */}
        <div id="education-timeline" className="relative max-w-4xl mx-auto pl-6 sm:pl-8 md:pl-0">
          {/* Animated Connecting Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full h-full bg-linear-to-b from-cyan-400 via-violet-500 to-blue-500 origin-top"
            />
          </div>

          {/* Education Timeline Items */}
          <div className="space-y-12">
            {portfolioData.education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#040711] border-2 border-cyan-400 flex items-center justify-center z-20 shadow-lg shadow-cyan-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-10 md:pl-0">
                    <PremiumMotionCard delay={index * 0.15}>
                      <div className="p-6 sm:p-8 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{item.period}</span>
                          </div>
                          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                            {item.status}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">
                            {item.institution}
                          </h3>
                          <p className="text-sm font-semibold text-violet-300 mt-1">
                            {item.degree}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/3 py-2 px-3 rounded-xl border border-white/8">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>

                        {/* Coursework Pills */}
                        <div>
                          <span className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Core Coursework:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/8 text-[11px] font-mono text-slate-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="pt-3 border-t border-white/8 space-y-1.5">
                          {item.achievements.map((ach, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </PremiumMotionCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
