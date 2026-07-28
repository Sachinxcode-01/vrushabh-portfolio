'use client';

import { motion } from 'framer-motion';

export function AnimatedGradientMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]"
      />

      {/* Violet Blob */}
      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 70, -80, 0],
          scale: [1, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[160px]"
      />

      {/* Deep Indigo Blob */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[150px]"
      />
    </div>
  );
}
