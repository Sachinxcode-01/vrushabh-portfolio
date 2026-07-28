'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import { MotionCard } from '@/components/animations/MotionCard';
import { GithubIcon } from '@/components/ui/Icons';
import { MagneticButton } from '@/components/animations/MagneticButton';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web', 'Full-Stack', 'AI / ML'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#05070f] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // Showcase
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Real-world web applications, developer tools, and algorithm visualizers engineered with clean code architecture.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white border-transparent shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-gray-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid wrapped with MotionCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <MotionCard key={project.id} delay={idx * 0.15} className="h-full">
              <div className="h-full flex flex-col justify-between group">
                <div>
                  {/* Card Banner Preview */}
                  <div className="relative h-48 sm:h-56 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border-b border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
                    
                    {/* Status & Category */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-violet-500/20 border border-violet-500/40 text-violet-300">
                        {project.status}
                      </span>
                    </div>

                    {/* Abstract Project Graphic Mockup */}
                    <div className="my-auto text-center relative z-10 py-4">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
                        <Code2 className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono text-gray-400 mt-2 block">
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    <MagneticButton>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400 transition-all block"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </MagneticButton>
                    <MagneticButton>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all block"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0a0d18] border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {selectedProject.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-6">
                {selectedProject.tagline}
              </p>

              <div className="space-y-6 text-sm text-gray-300">
                <div className="glass-panel p-4 rounded-xl space-y-1">
                  <h4 className="font-bold text-white text-xs font-mono text-cyan-400 uppercase">
                    Problem Statement
                  </h4>
                  <p className="leading-relaxed">{selectedProject.problemStatement}</p>
                </div>

                <div className="glass-panel p-4 rounded-xl space-y-1">
                  <h4 className="font-bold text-white text-xs font-mono text-violet-400 uppercase">
                    Solution Architecture
                  </h4>
                  <p className="leading-relaxed">{selectedProject.solutionSummary}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white text-xs font-mono text-gray-400 uppercase mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-white text-xs font-mono text-gray-400 uppercase mb-3">
                    Technologies Implemented
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-center text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl glass-button text-gray-200 font-semibold text-xs border border-white/20 flex items-center justify-center gap-2"
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
