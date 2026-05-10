"use client";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-8 px-6 lg:px-12 flex flex-col border-t border-white/5">
      {/* Top row: Subscribe to us */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-4">
        <div className="flex items-center w-full flex-grow">
          <h2 className="text-[clamp(40px,5vw,64px)] font-normal leading-tight whitespace-nowrap tracking-tight">
            Subscribe to us
          </h2>
          <div className="hidden md:block w-full h-[1px] bg-white/10 ml-12"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-[#141414] border border-transparent focus:border-white/10 rounded-full px-6 py-4 text-white text-lg placeholder:text-[#666] outline-none w-full md:w-[340px] transition-all"
          />
          <button className="bg-white text-black w-full sm:w-auto font-medium px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg">
            Submit
          </button>
        </div>
      </div>

      {/* Giant Brand Text */}
      <div className="w-full mb-6 select-none overflow-hidden flex items-center justify-center md:justify-start">
        <h1 className="text-[clamp(50px,16vw,280px)] font-bold tracking-tighter uppercase leading-[0.8] w-full text-center md:text-left whitespace-nowrap -ml-1 md:-ml-2 lg:-ml-4">
          Noir Studio
        </h1>
      </div>

      {/* Bottom Strip */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-2 text-[12px] tracking-wider text-[#666] uppercase font-medium font-sans">
        
        {/* Left: Copyright */}
        <div className="mb-4 md:mb-0 normal-case text-[13px]">
          © 2016 — 2025
        </div>

        {/* Center: Locations */}
        <div className="flex items-center gap-3 mb-4 md:mb-0 text-[11px] tracking-[0.15em]">
          LONDON <span className="opacity-40">—</span> DUBAI
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] tracking-[0.15em]">
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-1.5 h-1.5 rounded-full border border-[#555] group-hover:border-white transition-colors"></div>
            X.COM
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-1.5 h-1.5 rounded-full border border-[#555] group-hover:border-white transition-colors"></div>
            LINKEDIN
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-1.5 h-1.5 rounded-full border border-[#555] group-hover:border-white transition-colors"></div>
            INSTAGRAM
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-1.5 h-1.5 rounded-full border border-[#555] group-hover:border-white transition-colors"></div>
            TELEGRAM
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
