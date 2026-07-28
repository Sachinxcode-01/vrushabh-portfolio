'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className = '', delay = 0 }: ImageRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.08,
        filter: 'blur(8px)',
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
