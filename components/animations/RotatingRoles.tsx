'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  "Computer Science Student",
  "Web Developer",
  "Creative Programmer",
  "Technology Enthusiast",
  "Problem Solver"
];

export function RotatingRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-10 sm:h-12 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -30, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 font-mono inline-block text-cyan-300"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
