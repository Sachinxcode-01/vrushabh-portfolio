'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export function HeroAvatar3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12; // tilt max 12 deg
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-4/5 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Cybernetic Aura Glow */}
      <div className="absolute -inset-4 bg-linear-to-tr from-cyan-500/35 via-violet-600/30 to-blue-500/35 rounded-[36px] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main 3D Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full h-full rounded-[30px] p-2 bg-linear-to-b from-cyan-400/40 via-violet-500/30 to-blue-500/40 shadow-2xl backdrop-blur-xl border border-white/10 cursor-pointer"
      >
        {/* Inner Card Frame */}
        <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-950/90 shadow-inner">
          {/* Developer Photo */}
          <Image
            src="/Vrushabh.jpeg"
            alt="Vrushabh B - Computer Science Engineer & Developer"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />

          {/* Holographic Scanner Laser Beam Effect on Hover */}
          {isHovered && (
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] pointer-events-none z-10"
            />
          )}

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#040711] via-black/20 to-transparent opacity-80 pointer-events-none" />

          {/* Bottom Live Availability Tag */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-medium text-emerald-300">
                Active & Open for Roles
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-md">
              <Sparkles className="w-3 h-3" />
              <span>REC Hulkoti</span>
            </div>
          </div>
        </div>

        {/* Floating Top Badge: Academic Status (Pop out in 3D) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(30px)' }}
          className="absolute -top-4 -left-3 sm:-left-6 z-30 py-2 px-3 sm:px-4 rounded-xl bg-slate-900/90 border border-cyan-500/40 flex items-center gap-2.5 shadow-2xl backdrop-blur-xl"
        >
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-cyan-400 block font-semibold leading-tight">
              Academic Milestone
            </span>
            <span className="text-xs font-bold text-white">1st Year CSE • REC Hulkoti</span>
          </div>
        </motion.div>

        {/* Floating Bottom-Right Badge: Engineering Focus (Pop out in 3D) */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{ transform: 'translateZ(35px)' }}
          className="absolute -bottom-4 -right-3 sm:-right-6 z-30 py-2 px-3 sm:px-4 rounded-xl bg-slate-900/90 border border-violet-500/40 flex items-center gap-2.5 shadow-2xl backdrop-blur-xl"
        >
          <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-300">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-violet-400 block font-semibold leading-tight">
              Core Discipline
            </span>
            <span className="text-xs font-bold text-white">Full-Stack & Systems</span>
          </div>
        </motion.div>

        {/* Floating Micro-Pill: Verified Developer */}
        <div
          style={{ transform: 'translateZ(20px)' }}
          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-300 shadow-lg"
        >
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Vrushabh B</span>
        </div>
      </div>
    </div>
  );
}
