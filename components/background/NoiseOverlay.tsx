'use client';

export function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 opacity-[0.035]"
      style={{
        backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    />
  );
}
