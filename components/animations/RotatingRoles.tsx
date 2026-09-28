'use client';

import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const roles = [
  "Full-Stack Web Developer",
  "1st Year CSE @ REC Hulkoti",
  "IoT & Smart Systems Builder",
  "C++ & Algorithm Solver",
  "Next.js & Three.js Enthusiast"
];

export function RotatingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        // Typing forward
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 55);
      } else {
        // Pause at full word before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        // Deleting backward
        timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 28);
      } else {
        // Finished deleting, switch to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-500/25 shadow-inner backdrop-blur-md">
        <Terminal className="w-4 h-4 text-cyan-400 shrink-0 animate-pulse" />
        <span className="text-sm sm:text-base md:text-lg font-mono font-medium tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-teal-200 to-blue-300 min-h-[1.5em] flex items-center">
          {displayedText}
          <span className="w-2 h-4 sm:h-5 bg-cyan-400 inline-block ml-1 animate-pulse shadow-[0_0_8px_#22d3ee]" />
        </span>
      </div>
    </div>
  );
}
