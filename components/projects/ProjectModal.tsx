'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { ProjectDetails } from './ProjectDetails';
import { ProjectNavigation } from './ProjectNavigation';

interface ProjectModalProps {
  project: Project | null;
  projectsList: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export function ProjectModal({
  project,
  projectsList,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    // Lock page scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Keyboard listener for Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = projectsList.findIndex(p => p.id === project.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
    onSelectProject(projectsList[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectsList.length;
    onSelectProject(projectsList[nextIndex]);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Project details for ${project.title}`}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05070f]/85 backdrop-blur-xl"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080d1a] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 z-10 space-y-6 scrollbar-thin"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Detailed Content */}
          <ProjectDetails project={project} />

          {/* Navigation Controls */}
          {projectsList.length > 1 && (
            <ProjectNavigation
              currentIndex={currentIndex}
              totalProjects={projectsList.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
