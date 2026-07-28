'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowUpRight, Home, User, Code, Folder, GraduationCap, Award, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { InstagramIcon, FacebookIcon } from '@/components/ui/Icons';

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Contact & Social' | 'Actions';
  icon: React.ReactNode;
  action: () => void;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const commands: CommandItem[] = [
    {
      id: 'nav-home',
      label: 'Go to Home',
      category: 'Navigation',
      icon: <Home className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#hero'),
    },
    {
      id: 'nav-about',
      label: 'Go to About',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#about'),
    },
    {
      id: 'nav-skills',
      label: 'Go to Skills',
      category: 'Navigation',
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#skills'),
    },
    {
      id: 'nav-projects',
      label: 'Go to Featured Projects',
      category: 'Navigation',
      icon: <Folder className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#projects'),
    },
    {
      id: 'nav-education',
      label: 'Go to Education & Timeline',
      category: 'Navigation',
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#education'),
    },
    {
      id: 'nav-achievements',
      label: 'Go to Achievements',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('#achievements'),
    },
    {
      id: 'social-email',
      label: 'Send Direct Email',
      category: 'Contact & Social',
      icon: <Mail className="w-4 h-4 text-violet-400" />,
      action: () => window.open(`mailto:${portfolioData.personal.socials.email}`),
    },
    {
      id: 'social-instagram',
      label: 'Open Instagram (@mr_vrushi_arasu_17)',
      category: 'Contact & Social',
      icon: <InstagramIcon className="w-4 h-4 text-violet-400" />,
      action: () => window.open(portfolioData.personal.socials.instagram, '_blank'),
    },
    {
      id: 'social-facebook',
      label: 'Open Facebook Profile',
      category: 'Contact & Social',
      icon: <FacebookIcon className="w-4 h-4 text-violet-400" />,
      action: () => window.open(portfolioData.personal.socials.facebook, '_blank'),
    },
    {
      id: 'action-top',
      label: 'Scroll to Top',
      category: 'Actions',
      icon: <ArrowUp className="w-4 h-4 text-blue-400" />,
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Trigger Hint on Screen */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Command Menu"
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-xl glass-panel border border-cyan-500/30 text-xs font-mono text-gray-300 hover:text-white hover:border-cyan-400 shadow-xl transition-all flex items-center gap-2"
      >
        <Command className="w-3.5 h-3.5 text-cyan-400" />
        <span>Cmd + K</span>
      </button>

      {/* Command Menu Modal */}
      <AnimatePresence>
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command Menu Search"
            className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-[#05070f]/85 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg rounded-2xl bg-[#080d1a] border border-cyan-500/30 shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar */}
              <div className="flex items-center px-4 py-3.5 border-b border-white/10">
                <Search className="w-4 h-4 text-cyan-400 mr-3 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Type a command or search section..."
                  className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-500 font-sans"
                  autoFocus
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-72 overflow-y-auto p-2 space-y-1 scrollbar-thin">
                {filteredCommands.length === 0 ? (
                  <div className="p-6 text-center text-xs text-gray-400 font-mono">
                    No matching commands found.
                  </div>
                ) : (
                  filteredCommands.map(cmd => (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action();
                        setOpen(false);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl hover:bg-white/10 text-left flex items-center justify-between text-xs text-gray-300 hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        {cmd.icon}
                        <span className="font-medium">{cmd.label}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-white/5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>Navigate portfolio quickly</span>
                <span>Press ESC to exit</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
