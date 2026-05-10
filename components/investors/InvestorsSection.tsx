"use client";

import { InfiniteMarquee } from "@/components/InfiniteMarquee";

const row1Logos = [
  "OKX", "BINANCE", "Protocol Labs", "SEQUOIA", "SOLANA", "LayerZero", "coinbase", "MoonPay"
];

const row2Logos = [
  "animoca BRANDS", "Paradigm", "twitch", "YouTube", "accenture", "Framework", "CIRCLE", "Protocol Labs"
];

export function InvestorsSection() {
  // Render placeholder logos (text based)
  const renderLogos = (logos: string[]) => 
    logos.map((name, i) => (
      <div 
        key={i} 
        className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center min-w-[200px]"
      >
        <span className="text-white/60 font-semibold tracking-wide uppercase text-xl">
          {name}
        </span>
      </div>
    ));

  return (
    <section className="bg-black py-24 sm:py-32 overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-[#555] text-xl md:text-2xl font-medium tracking-tight">
          Coders Express projects raised from world-class investors.
        </h2>
      </div>

      <div className="flex flex-col gap-8 relative">
        {/* Left and right fade gradients for the marquee */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <InfiniteMarquee 
          items={renderLogos(row1Logos)} 
          direction="left" 
          speed={40} 
        />
        
        <InfiniteMarquee 
          items={renderLogos(row2Logos)} 
          direction="right" 
          speed={45} 
        />
      </div>
    </section>
  );
}

export default InvestorsSection;
