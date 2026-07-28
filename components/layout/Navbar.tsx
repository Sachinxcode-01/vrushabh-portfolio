'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Send, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { MagneticButton } from '@/components/animations/MagneticButton';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-[#05070f]/80 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/30'
              : 'bg-[#05070f]/40 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Soft Glow Effect Behind Navbar */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-violet-600/10 to-blue-500/10 blur-xl opacity-50 pointer-events-none" />

          {/* Left: Brand Monogram & Details */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group relative z-10"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-blue-500 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative w-full h-full bg-[#05070f] rounded-[11px] overflow-hidden flex items-center justify-center p-1">
                <Image
                  src="/VB.png"
                  alt="VB Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 flex items-center gap-1">
                <Terminal className="w-3 h-3 inline text-cyan-400" /> CSE 1st Year (2025-29)
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 relative z-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-violet-600/25 to-blue-500/25 border border-cyan-500/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right: "Let’s Talk" Animated CTA Button */}
          <div className="hidden lg:flex items-center gap-3 relative z-10">
            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Let’s Talk</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center relative z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 px-2"
          >
            <div className="bg-[#05070f]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let’s Talk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
