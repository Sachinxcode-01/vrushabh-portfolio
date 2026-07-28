'use client';

import Image from 'next/image';
import { ExternalLink, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { Project } from '@/types/portfolio';
import { GithubIcon } from '@/components/ui/Icons';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="space-y-6 text-left">
      {/* Hero Image Frame */}
      <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4">
          <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-lg">
            {project.status}
          </span>
        </div>
      </div>

      {/* Title Header */}
      <div>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
          {project.category}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mt-1 font-medium">
          {project.tagline}
        </p>
      </div>

      {/* Problem & Solution Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <span className="text-[11px] font-mono text-rose-400 font-bold block flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> Problem Statement
          </span>
          <p className="text-xs text-gray-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <span className="text-[11px] font-mono text-cyan-400 font-bold block flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Solution Summary
          </span>
          <p className="text-xs text-gray-300 leading-relaxed">
            {project.solutionSummary}
          </p>
        </div>
      </div>

      {/* Key Features List */}
      <div>
        <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
          Key Features
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Used */}
      <div>
        <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Explore Project</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl glass-button text-gray-300 hover:text-white font-semibold text-xs border border-white/20 hover:border-cyan-400 transition-all flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Source Code</span>
          </a>
        )}
      </div>
    </div>
  );
}
