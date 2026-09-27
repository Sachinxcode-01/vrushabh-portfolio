'use client';

import { useState, useRef } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import { CinematicImageCard } from '@/components/ui/CinematicImageCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';
import { FolderGit2 } from 'lucide-react';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('article');
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="violet" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
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

        {/* 2-Card Projects Grid with Cinematic Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {portfolioData.projects.map((project, idx) => (
            <CinematicImageCard
              key={project.id}
              id={project.id}
              title={project.title}
              categoryOrYear={project.category}
              metadata={project.techStack.slice(0, 4)}
              image={project.image}
              actionText="Explore Details"
              priority={idx === 0}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
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
