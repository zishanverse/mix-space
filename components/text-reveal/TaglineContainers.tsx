"use client";

import { useRef, useEffect, useState } from "react";
import { textRevealContent } from "@/content/text-reveal";
import { gsap, ScrollTrigger } from "@/lib/gsap-plugins";

// Spotlight Card sub-component for beautiful hover glow
function SpotlightCard({
  id,
  title,
  subtitle,
  index,
  isHighlighted,
}: {
  id: string;
  title: string;
  subtitle: string;
  index: number;
  isHighlighted: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`tagline-item group relative overflow-hidden rounded-2xl border transition-all duration-700 flex flex-col justify-between min-h-[200px] sm:min-h-[220px] p-10 cursor-default w-full max-w-sm md:max-w-none mx-auto backdrop-blur-sm ${isHighlighted
          ? "border-[#ca7a3a]/50 scale-[1.05] -translate-y-3 bg-zinc-900/60 shadow-[0_20px_50px_rgba(202,122,58,0.15)]"
          : "border-white/10 bg-zinc-900/30 hover:border-[#ca7a3a]/30 hover:scale-[1.02] hover:-translate-y-2"
        }`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Interactive Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          opacity: isHighlighted ? 0.4 : opacity,
          background: `radial-gradient(600px circle at ${isHighlighted ? '50%' : position.x + 'px'} ${isHighlighted ? '50%' : position.y + 'px'}, rgba(202, 122, 58, 0.12), transparent 40%)`,
        }}
      />

      {/* Secondary colored glow */}
      <div
        className={`pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-700 z-0 ${isHighlighted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        style={{
          background: `radial-gradient(400px circle at ${isHighlighted ? '50%' : position.x + 'px'} ${isHighlighted ? '50%' : position.y + 'px'}, rgba(202, 122, 58, 0.2), transparent 60%)`,
        }}
      />

      {/* Top Section: ID Badge */}
      <div className="relative z-10 flex justify-between items-start w-full mb-6 sm:mb-8">
        <span className={`font-mono text-sm tracking-wider transition-colors duration-500 ${isHighlighted ? "text-[#ca7a3a]" : "text-white/40 group-hover:text-[#ca7a3a]/70"
          }`}>[{id}]</span>

        {/* Decorative small corner graphic */}
        <div className={`w-2 h-2 border-t border-r transition-colors duration-500 ${isHighlighted ? "border-[#ca7a3a]" : "border-white/30 group-hover:border-[#ca7a3a]/80"
          }`} />
      </div>

      {/* Center Section: Typography */}
      <div className="relative z-10 flex flex-col items-start w-full select-none">
        <h3 className="text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-[2.5rem] font-semibold tracking-tight lg:tracking-tighter text-white overflow-hidden relative pb-1 w-full">
          {/* Double layered text effect */}
          <span className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap ${isHighlighted ? "-translate-y-full opacity-0" : "group-hover:-translate-y-full group-hover:opacity-0"
            }`}>
            {title}
          </span>
          <span className={`absolute left-0 top-0 inline-block transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] bg-gradient-to-r from-[#ca7a3a] to-[#e8a87c] bg-clip-text text-transparent whitespace-nowrap ${isHighlighted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            }`}>
            {title}
          </span>
        </h3>

        <p className={`mt-3 sm:mt-4 text-xs sm:text-sm font-normal leading-relaxed max-w-[240px] transform transition-all duration-500 ${isHighlighted ? "text-neutral-100" : "text-neutral-400 group-hover:text-neutral-200"
          }`}>
          {subtitle}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ca7a3a] to-transparent transition-transform duration-700 origin-center z-20 ${isHighlighted ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`} />
    </div>
  );
}

export function TaglineContainers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(".tagline-item");

    // GSAP Reveal Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      items,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
        rotationX: 15,
        force3D: true
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        force3D: true,
        duration: textRevealContent.animation.containerDuration,
        stagger: 0.15,
        delay: textRevealContent.animation.containerDelay,
        ease: "power4.out",
        clearProps: "transform",
      }
    );

    // Sequential Highlight Animation
    let interval: NodeJS.Timeout;
    const startSequence = () => {
      let index = 0;
      interval = setInterval(() => {
        setActiveHighlightIndex(index);
        index = (index + 1) % textRevealContent.taglines.items.length;
      }, 2500); // Cycle every 2.5 seconds
    };

    // Delay start until after reveal animation
    const timeout = setTimeout(startSequence, 3000);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full mt-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto" style={{ perspective: "1000px" }}>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center w-full"
      >
        {textRevealContent.taglines.items.map((tagline, index) => (
          <SpotlightCard
            key={tagline.id}
            id={tagline.id}
            title={tagline.title}
            subtitle={tagline.subtitle}
            index={index}
            isHighlighted={activeHighlightIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

export default TaglineContainers;
