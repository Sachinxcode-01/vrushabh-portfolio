'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import { GithubIcon } from '@/components/ui/Icons';
import { CinematicImageCard } from '@/components/ui/CinematicImageCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

const categories = ['All Projects', 'Web', 'Full-Stack', 'AI / ML'] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = portfolioData.projects.filter(
    p => selectedCategory === 'All Projects' || p.category === selectedCategory
  );

  useGSAP(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('article');
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.94, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="violet" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // 03. SHOWCASE & PROJECTS
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient font-extrabold">Projects</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Exploration of full-stack web applications, AI dashboards, algorithm visualizers, and academic solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Cinematic Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <CinematicImageCard
              key={project.id}
              id={project.id}
              title={project.title}
              categoryOrYear={project.category}
              metadata={project.techStack.slice(0, 3)}
              image={project.image}
              actionText="View Project"
              priority={idx === 0}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-[#05070f]/80 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080d1a] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-10 space-y-6 scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    {activeProject.status}
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1 font-medium">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-rose-400 font-bold block flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Problem Statement
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {activeProject.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold block flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Solution Summary
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {activeProject.solutionSummary}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl glass-button text-gray-300 hover:text-white font-semibold text-xs border border-white/20 hover:border-cyan-400 transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
