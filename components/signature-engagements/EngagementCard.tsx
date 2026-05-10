"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-plugins";
import { EngagementItem } from "@/content/signature-engagements";

interface EngagementCardProps {
  engagement: EngagementItem;
  index: number;
}

export function EngagementCard({ engagement, index }: EngagementCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll-in stagger animation
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: (index % 3) * 0.15, // Stagger columns row by row
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col gap-6"
      style={{ opacity: 0 }} // Hidden before GSAP animation
    >
      {/* Media container with hover effects */}
      <div className="group relative w-full aspect-3/2 overflow-hidden rounded-2xl bg-[#111] cursor-pointer">
        {/* Placeholder "Image" - scales on hover */}
        <div className="absolute inset-0 bg-[#1a1a1a] transition-transform duration-700 ease-out group-hover:scale-105 flex items-center justify-center border border-white/5">
           <span className="text-white/10 font-mono text-sm tracking-widest uppercase">Media Placeholder</span>
        </div>

        {/* Hover "Inquire" Circle */}
        <div className="absolute inset-0 m-auto w-24 h-24 bg-white rounded-full flex items-center justify-center pointer-events-none opacity-0 scale-50 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100">
          <span className="text-black font-medium text-sm">Inquire</span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-3 pr-4">
        <h3 className="text-white text-2xl font-medium tracking-tight">
          {engagement.title}
        </h3>
        <p className="text-[#666] text-[15px] leading-relaxed font-normal">
          {engagement.description}
        </p>
      </div>
    </div>
  );
}

export default EngagementCard;
