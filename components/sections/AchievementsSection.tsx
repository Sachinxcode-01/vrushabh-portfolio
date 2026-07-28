'use client';

import { ExternalLink, Sparkles, Calendar, AlertCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { MotionCard } from '@/components/animations/MotionCard';

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 bg-[#05070f] overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // Recognition & Growth
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications & <span className="text-gradient">Achievements</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Certificates, technical workshops, competitive programming milestones, and college events.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((item, idx) => (
            <MotionCard key={item.id} delay={idx * 0.15} className="h-full">
              <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  {/* Top Badge Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs font-mono text-violet-400 mb-3">
                    Issuer / Host: {item.issuer}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Verification / Placeholder Notice */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    {item.isPlaceholder ? (
                      <span className="text-[11px] font-mono text-amber-400/90 flex items-center gap-1 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                        <AlertCircle className="w-3.5 h-3.5" /> Editable Certificate Placeholder
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> Verified Activity
                      </span>
                    )}

                    {item.credentialUrl && (
                      <a
                        href={item.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
