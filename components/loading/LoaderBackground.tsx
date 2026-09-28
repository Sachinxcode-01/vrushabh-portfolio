'use client';

export function LoaderBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Luxury Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-linear-to-tr from-cyan-500/20 via-violet-600/20 to-blue-500/20 rounded-full blur-[160px] opacity-70 animate-pulse duration-8000" />
      
      {/* Secondary Soft Violet / Lilac Bloom */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-112.5 h-112.5 bg-linear-to-b from-indigo-500/20 to-fuchsia-500/15 rounded-full blur-[140px] opacity-60" />


      {/* Subtle Corner Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#040711]/40 to-[#040711]" />

      {/* Elegant Atmospheric Dust Stars (Luxury, not techy) */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}

