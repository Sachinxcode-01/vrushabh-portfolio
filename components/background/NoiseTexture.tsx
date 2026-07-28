'use client';

export function NoiseTexture() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.025] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
  );
}
