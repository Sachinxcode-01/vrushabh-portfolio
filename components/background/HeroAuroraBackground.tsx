'use client';

import { AuroraGradient } from './AuroraGradient';
import { HeroParticles } from './HeroParticles';
import { CursorAmbientLight } from './CursorAmbientLight';
import { NoiseTexture } from './NoiseTexture';

export function HeroAuroraBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#05070f]">
      {/* 1. Aurora Gradient Atmospheric Lights */}
      <AuroraGradient />

      {/* 2. Fine Technical Dot Grid with Mask Fade */}
      <div
        className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* 3. Floating Ambient Particles */}
      <HeroParticles />

      {/* 4. Code-Inspired Diagonal Light Trails */}
      <div className="absolute top-1/4 right-10 w-[1px] h-48 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent rotate-12 opacity-60 hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-[1px] h-36 bg-gradient-to-b from-transparent via-violet-500/25 to-transparent -rotate-12 opacity-50 hidden lg:block" />

      {/* 5. Low-Opacity Grain Texture */}
      <NoiseTexture />

      {/* 6. Desktop Mouse Spotlight */}
      <CursorAmbientLight />
    </div>
  );
}
