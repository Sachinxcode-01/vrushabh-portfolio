'use client';

import { useRef } from 'react';
import { Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
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
    <section id="education" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // 04. ACADEMIC JOURNEY
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Timeline</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Academic milestones, foundational computer science coursework, and educational highlights.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Animated Timeline */}
        <div id="education-timeline" className="relative max-w-4xl mx-auto pl-6 sm:pl-8 md:pl-0">
          {/* Animated Connecting Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-violet-500 to-blue-500 origin-top"
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
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#05070f] border-2 border-cyan-400 flex items-center justify-center z-20 shadow-lg shadow-cyan-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                    <PremiumMotionCard delay={index * 0.2}>
                      <div className="p-6 sm:p-8 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {item.institution}
                        </h4>

                        <p className="text-sm font-semibold text-violet-300">
                          {item.degree}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 py-1.5 px-3 rounded-lg border border-white/10">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>

                        {/* Coursework Pills */}
                        <div>
                          <span className="text-xs font-mono text-gray-400 block mb-2 flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Core Coursework:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="pt-3 border-t border-white/5 space-y-1.5">
                          {item.achievements.map((ach, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
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
