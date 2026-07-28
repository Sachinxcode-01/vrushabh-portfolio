'use client';

import { useState, useRef } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types/portfolio';
import { CinematicImageCard } from '@/components/ui/CinematicImageCard';
import { SectionAmbientLight } from '@/components/background/SectionAmbientLight';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { useGSAP } from '@/hooks/useGSAP';
import { gsap } from 'gsap';

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">
      {/* Section Ambient Glow */}
      <SectionAmbientLight color="violet" position="left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            // 03. SHOWCASE & PROJECTS
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient font-extrabold">Projects</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-3">
            Highlighted Computer Science & IoT projects: Smart Attendance System and Smart Street Light System.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Card Projects Grid with Cinematic Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {portfolioData.projects.map((project, idx) => (
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
