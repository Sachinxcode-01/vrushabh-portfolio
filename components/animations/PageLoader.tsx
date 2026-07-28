'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#05070f] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Logo Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-violet-600 to-blue-500 p-[1px] shadow-2xl shadow-cyan-500/30 mb-6"
          >
            <div className="w-full h-full bg-[#05070f] rounded-[15px] flex items-center justify-center font-mono font-extrabold text-cyan-300 text-2xl tracking-wider">
              VB
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-6"
          >
            Vrushabh B Portfolio
          </motion.p>

          {/* Animated Loading Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="w-full h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
