'use client';

export function GridOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)',
      }}
    />
  );
}
