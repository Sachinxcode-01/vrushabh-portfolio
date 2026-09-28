'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FileText,
  Mail,
  Sparkles,
  MapPin,
  GraduationCap,
  ArrowRight,
  Code2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { HeroAuroraBackground } from '@/components/background/HeroAuroraBackground';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from '@/components/ui/Icons';
import { RotatingRoles } from '@/components/animations/RotatingRoles';
import { TypingHeading } from '@/components/animations/TypingHeading';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { HeroAvatar3D } from '@/components/ui/HeroAvatar3D';

interface HeroSectionProps {
  loadingComplete?: boolean;
}

export function HeroSection({ loadingComplete = true }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-transparent"
    >
      {/* Premium Aurora Atmosphere Background */}
      <HeroAuroraBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Role, Bio, Stats, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Status & Academic Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Projects & Internships</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>REC Hulkoti • 1st Year B.E.</span>
              </div>
            </div>

            {/* Main Title & Typing Heading */}
            <div className="space-y-2">
              <TypingHeading loadingComplete={loadingComplete} />
              
              <div className="pt-1">
                <RotatingRoles />
              </div>
            </div>

            {/* Short Biography */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {portfolioData.personal.bio}
            </p>

            {/* Quick Highlights Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400 font-mono">
                  12+
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Projects Built</div>
              </div>
              <div className="p-3 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-cyan-400 font-mono">
                  15+
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Tech & Tools</div>
              </div>
              <div className="p-3 rounded-xl bg-white/3 border border-white/8 backdrop-blur-md text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400 font-mono">
                  500+
                </div>
                <div className="text-[11px] font-medium text-slate-400 mt-0.5">Coding Hours</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <MagneticButton>
                <a
                  href="#projects"
                  className="shimmer-btn px-6 py-3.5 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl glass-button text-slate-200 font-semibold text-sm hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={portfolioData.personal.resumeUrl}
                  className="px-5 py-3.5 rounded-xl bg-white/3 border border-cyan-500/30 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Resume</span>
                </a>
              </MagneticButton>
            </div>

            {/* Social Icons & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vrushabh B on GitHub"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all block"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vrushabh B on LinkedIn"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all block"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vrushabh B on Instagram"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all block"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vrushabh B on Facebook"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all block"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={`mailto:${portfolioData.personal.socials.email}`}
                    aria-label="Email Vrushabh B"
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all block"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </MagneticButton>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/4 px-3.5 py-2 rounded-xl border border-white/8">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Modern 3D Interactive Tech Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center relative z-20"
          >
            <HeroAvatar3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
