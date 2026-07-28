'use client';

import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiGreensock,
  SiThreedotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { Code2 } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'w-6 h-6' }: TechIconProps) {
  const normalized = name.toLowerCase();

  if (normalized === 'c') return <SiC className={`${className} text-[#A8B9CC]`} />;
  if (normalized.includes('c++')) return <SiCplusplus className={`${className} text-[#00599C]`} />;
  if (normalized.includes('python')) return <SiPython className={`${className} text-[#3776AB]`} />;
  if (normalized.includes('java') && !normalized.includes('script')) return <FaJava className={`${className} text-[#007396]`} />;
  if (normalized.includes('javascript')) return <SiJavascript className={`${className} text-[#F7DF1E]`} />;
  if (normalized.includes('typescript')) return <SiTypescript className={`${className} text-[#3178C6]`} />;
  if (normalized.includes('html')) return <SiHtml5 className={`${className} text-[#E34F26]`} />;
  if (normalized.includes('tailwind') || normalized.includes('css')) return <SiTailwindcss className={`${className} text-[#06B6D4]`} />;
  if (normalized.includes('react') && !normalized.includes('three')) return <SiReact className={`${className} text-[#61DAFB]`} />;
  if (normalized.includes('next')) return <SiNextdotjs className={`${className} text-white`} />;
  if (normalized.includes('gsap') || normalized.includes('scrolltrigger')) return <SiGreensock className={`${className} text-[#88CE02]`} />;
  if (normalized.includes('three')) return <SiThreedotjs className={`${className} text-white`} />;
  if (normalized.includes('node')) return <SiNodedotjs className={`${className} text-[#339933]`} />;
  if (normalized.includes('express')) return <SiExpress className={`${className} text-white`} />;
  if (normalized.includes('mongo')) return <SiMongodb className={`${className} text-[#47A248]`} />;
  if (normalized.includes('postgres')) return <SiPostgresql className={`${className} text-[#4169E1]`} />;
  if (normalized.includes('api') || normalized.includes('rest')) return <SiPostman className={`${className} text-[#FF6C37]`} />;
  if (normalized === 'git') return <SiGit className={`${className} text-[#F05032]`} />;
  if (normalized.includes('github')) return <SiGithub className={`${className} text-white`} />;
  if (normalized.includes('vs code') || normalized.includes('visual studio') || normalized.includes('vscode')) return <VscVscode className={`${className} text-[#007ACC]`} />;
  if (normalized.includes('figma')) return <SiFigma className={`${className} text-[#F24E1E]`} />;
  if (normalized.includes('vercel')) return <SiVercel className={`${className} text-white`} />;

  return <Code2 className={`${className} text-cyan-400`} />;
}
