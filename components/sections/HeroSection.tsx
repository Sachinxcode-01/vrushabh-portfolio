'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { ArrowDown, FileText, Mail, Sparkles, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { TechCanvas } from '@/components/three/TechCanvas';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { RotatingRoles } from '@/components/animations/RotatingRoles';
import { TypingHeading } from '@/components/animations/TypingHeading';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { ImageReveal } from '@/components/animations/ImageReveal';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [typingComplete, setTypingComplete] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setTypingComplete(true);

    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(badgeRef.current, { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(roleRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6 }, '-=0.2')
      .fromTo(bioRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(socialsRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo(imageContainerRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'expo.out' }, '-=0.8')
      .fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2');
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
    >
      {/* 3D Tech Canvas */}
      <TechCanvas />

      {/* Section Ambient Glow */}
      <SectionAmbientLight color="cyan" position="right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typing Heading & Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{portfolioData.personal.academicYear} • {portfolioData.personal.college}</span>
            </div>

            {/* Premium Hero Typing Heading */}
            <TypingHeading onComplete={handleTypingComplete} />

            {/* Rotating Roles Text Switcher */}
            <div ref={roleRef} className="my-2">
              <RotatingRoles />
            </div>

            {/* Biography */}
            <p
              ref={bioRef}
              className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {portfolioData.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <MagneticButton>
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>View My Work</span>
                  <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl glass-button text-gray-200 font-semibold text-sm border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
                >
                  Contact Me
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={portfolioData.personal.resumeUrl}
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-cyan-500/30 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Resume</span>
                </a>
              </MagneticButton>
            </div>

            {/* Social Links & Location */}
            <div
              ref={socialsRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-sm text-gray-400"
            >
              <div className="flex items-center gap-3">
                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-panel text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all block"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-panel text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all block"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={portfolioData.personal.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-panel text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all block"
                    aria-label="Instagram Profile"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={`mailto:${portfolioData.personal.socials.email}`}
                    className="p-3 rounded-xl glass-panel text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all block"
                    aria-label="Send Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </MagneticButton>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-gray-300 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div
              ref={imageContainerRef}
              className="relative w-full max-w-[380px] sm:max-w-[430px] aspect-[4/5] group"
            >
              {/* Soft Cyan & Violet Lighting Behind Portrait */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 via-violet-600/30 to-blue-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Orbiting Tech Rings */}
              <div className="absolute -inset-6 rounded-[2.5rem] border border-cyan-500/20 border-dashed animate-[spin_25s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-10 rounded-[3rem] border border-violet-500/15 border-dashed animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />

              {/* Main Image Glass Frame Container */}
              <ImageReveal className="w-full h-full rounded-3xl p-1.5 bg-gradient-to-b from-cyan-400/40 via-violet-500/30 to-blue-500/40 shadow-2xl glass-panel">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <Image
                    src="/Vrushabh.jpeg"
                    alt="Vrushabh B"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 430px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Ambient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070f]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Animated Light Sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
              </ImageReveal>

              {/* Floating Glass Info Cards Around Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 z-20 glass-panel py-2 px-3.5 rounded-xl border border-cyan-500/40 flex items-center gap-2.5 shadow-xl shadow-cyan-500/10"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 block font-bold">Academic Status</span>
                  <span className="text-xs font-semibold text-white">2nd Year • REC Hulkoti</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-6 z-20 glass-panel py-2 px-3.5 rounded-xl border border-violet-500/40 flex items-center gap-2.5 shadow-xl shadow-violet-500/10"
              >
                <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-300">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-violet-400 block font-bold">Status</span>
                  <span className="text-xs font-semibold text-white">Available for Projects</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <span>Scroll Down</span>
            <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
