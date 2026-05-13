"use client";

export function StudioHeroScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-scroll-indicator opacity-0">
      <span 
        className="text-[11px] uppercase text-[#555555] tracking-[0.15em]" 
        style={{ fontFamily: "var(--font-body)" }}
      >
        Scroll
      </span>
      {/* Container for the pulsing line/arrow */}
      <div className="h-6 w-px bg-transparent overflow-hidden flex flex-col items-center relative">
         <div className="w-px h-full bg-[#555] animate-scroll-bounce absolute top-[-100%]" />
      </div>
    </div>
  );
}
