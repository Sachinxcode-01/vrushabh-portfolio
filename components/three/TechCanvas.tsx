'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingMesh } from './FloatingMesh';
import { WebGLFallback } from './WebGLFallback';
import { useWebGLSupport } from '@/hooks/useWebGLSupport';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function TechCanvas() {
  const isWebGLSupported = useWebGLSupport();
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isWebGLSupported || prefersReducedMotion) {
    return <WebGLFallback />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <WebGLFallback />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#06b6d4" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
        <Suspense fallback={null}>
          <FloatingMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
