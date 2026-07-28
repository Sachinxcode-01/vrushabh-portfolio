'use client';

import { AnimatedGradientMesh } from './AnimatedGradientMesh';
import { GridOverlay } from './GridOverlay';
import { ParticleField } from './ParticleField';
import { CursorLight } from './CursorLight';
import { NoiseOverlay } from './NoiseOverlay';

export function GlobalBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-[#05070f] z-[-2] pointer-events-none" />
      <AnimatedGradientMesh />
      <GridOverlay />
      <ParticleField />
      <CursorLight />
      <NoiseOverlay />
    </>
  );
}
