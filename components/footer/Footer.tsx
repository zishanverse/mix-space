"use client";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/5 pt-32 pb-8 px-4 sm:px-6 lg:px-12 flex flex-col justify-between min-h-[80vh]">
      
      {/* Top CTA Section */}
      <div className="flex flex-col items-center justify-center text-center gap-10 mb-32">
        <h2 className="text-[clamp(40px,6vw,80px)] font-normal leading-[1.1] tracking-tight max-w-4xl">
          Get in touch to discuss your project with our team
        </h2>
        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">
          Book a call today
        </button>
      </div>

      {/* Middle/Bottom Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
        
        {/* Left: Newsletter */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <label className="text-[#555] text-sm tracking-wide">Subscribe to us</label>
          <div className="flex items-center border-b border-white/20 pb-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none outline-none text-white w-full text-lg placeholder:text-white/30"
            />
            <button className="text-white font-medium hover:text-white/70 transition-colors uppercase text-sm tracking-widest">
              Submit
            </button>
          </div>
        </div>

        {/* Right: Links */}
        <div className="lg:col-span-6 lg:col-start-7 flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <span className="text-[#555] text-sm tracking-wide mb-2">Locations</span>
            <span className="text-white text-sm">LONDON</span>
            <span className="text-white text-sm">DUBAI</span>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <span className="text-[#555] text-sm tracking-wide mb-2">Social</span>
            <a href="#" className="text-white text-sm hover:text-white/60 transition-colors uppercase">X.COM</a>
            <a href="#" className="text-white text-sm hover:text-white/60 transition-colors uppercase">LINKEDIN</a>
            <a href="#" className="text-white text-sm hover:text-white/60 transition-colors uppercase">INSTAGRAM</a>
            <a href="#" className="text-white text-sm hover:text-white/60 transition-colors uppercase">TELEGRAM</a>
          </div>
        </div>
      </div>

      {/* Bottom Branding & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10">
        <h1 className="text-[clamp(40px,12vw,200px)] font-bold leading-none tracking-tighter uppercase mb-4 md:mb-0">
          Noir Studio
        </h1>
        <p className="text-[#555] text-sm">
          © 2016 — 2025.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
