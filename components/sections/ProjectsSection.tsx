'use client';

import { useState, useRef, useMemo } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import { CinematicImageCard } from '@/components/ui/CinematicImageCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { FolderGit2, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(portfolioData.projects.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return portfolioData.projects;
    return portfolioData.projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="violet" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. SHOWCASE & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="hero-name-gradient font-extrabold">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Computer vision systems, IoT smart city infrastructure, and interactive web tools.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-violet-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === 'All'
                ? portfolioData.projects.length
                : portfolioData.projects.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'text-cyan-200 font-bold'
                    : 'text-slate-400 hover:text-white bg-white/3 hover:bg-white/6 border border-white/6'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-violet-500/20 to-blue-500/20 border border-cyan-400/40 rounded-xl shadow-lg shadow-cyan-500/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-cyan-400" />
                  {category}
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-cyan-300">
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Smooth AnimatePresence */}
        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
              >
                <CinematicImageCard
                  id={project.id}
                  title={project.title}
                  categoryOrYear={project.category}
                  metadata={project.techStack.slice(0, 4)}
                  image={project.image}
                  actionText="Explore Architecture"
                  priority={idx === 0}
                  onClick={() => setActiveProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Reusable Master Project Modal */}
      <ProjectModal
        project={activeProject}
        projectsList={portfolioData.projects}
        onClose={() => setActiveProject(null)}
        onSelectProject={(proj) => setActiveProject(proj)}
      />
    </section>
  );
}
