'use client';

import { motion } from 'framer-motion';

interface SectionAmbientLightProps {
  color?: 'cyan' | 'violet' | 'blue' | 'indigo';
  position?: 'left' | 'right' | 'center';
}

export function SectionAmbientLight({
  color = 'cyan',
  position = 'center',
}: SectionAmbientLightProps) {
  const colorMap = {
    cyan: 'from-cyan-500/15 via-cyan-600/10 to-transparent',
    violet: 'from-violet-600/15 via-purple-600/10 to-transparent',
    blue: 'from-blue-600/15 via-cyan-500/10 to-transparent',
    indigo: 'from-indigo-600/15 via-violet-500/10 to-transparent',
  };

  const posMap = {
    left: 'top-1/3 -left-32',
    right: 'top-1/3 -right-32',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`absolute w-[600px] h-[600px] bg-gradient-to-r ${colorMap[color]} rounded-full blur-[140px] ${posMap[position]}`}
      />
    </div>
  );
}
