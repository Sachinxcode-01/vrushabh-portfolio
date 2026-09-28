'use client';

import { useState, useEffect } from 'react';
import { Home, User, Cpu, FolderGit2, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function MobileQuickNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 md:hidden"
        >
          <nav
            aria-label="Mobile Navigation Dock"
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-slate-950/85 backdrop-blur-xl border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  aria-label={item.name}
                  className={`relative p-2.5 rounded-full transition-colors ${
                    isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobileActiveDock"
                      className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                </a>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
