'use client';

import Image from 'next/image';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from '@/components/ui/Icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030409] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[1px]">
                <div className="relative w-full h-full bg-[#05070f] rounded-[11px] overflow-hidden flex items-center justify-center p-1">
                  <Image
                    src="/VB.png"
                    alt="VB Monogram Logo"
                    fill
                    sizes="40px"
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Computer Science Engineering student at Rural Engineering College, Hulkoti. Building interactive 3D web applications, scalable software tools, and modern digital experiences.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vrushabh B on Instagram"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vrushabh B on Facebook"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.socials.email}`}
                aria-label="Email Vrushabh B"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vrushabh B on GitHub"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Vrushabh B on LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-300 transition-colors">Education & Timeline</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Academic Information */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono text-cyan-400">
              Institution
            </h4>
            <p className="text-sm text-gray-300 font-medium">
              {portfolioData.personal.college}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {portfolioData.personal.academicYear}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {portfolioData.personal.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} {portfolioData.personal.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Designed & Built with Next.js, GSAP & Three.js</span>
            <Code2 className="w-4 h-4 text-cyan-400 inline" />
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            aria-label="Back to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
