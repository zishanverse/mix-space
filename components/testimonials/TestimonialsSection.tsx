"use client";

import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Partnering with Noir on our new direction and website has transformed the Biconomy brand. The team brought visionary insights to life through design and storytelling and seamlessly executed our digital experience. Our brand feels supercharged and ready for our next stage of growth.",
    name: "Ahmed Al-Balaghi",
    company: "Biconomy",
  },
  {
    id: 2,
    quote: "Noir have been instrumental in consolidating our vision for Hydro. They have built the brand from the ground up, deeply integrating into our team to create a powerful mission led strategy, create beautiful branding and working meticulously on every single detail of our user experience design journey for our application.",
    name: "Reggie Raghav",
    company: "Hydro",
  },
  {
    id: 3,
    quote: "Noir have so much ambition as an agency and were extremely efficient throughout the project, always available and not afraid to challenge the brief to get the best results. Anthony and his team really immersed themselves into our industry and had a great understanding of future proofing our brand and website.",
    name: "Andy Morris",
    company: "Skyscanner",
  },
  {
    id: 4,
    quote: "The strategic approach and world-class design execution from the team have elevated our entire product ecosystem. Their understanding of Web3 mechanics combined with premium aesthetics is unmatched in the industry.",
    name: "Sarah Chen",
    company: "LayerZero",
  },
  {
    id: 5,
    quote: "Working with them felt like an extension of our own team. Fast, agile, and incredibly high quality output. They completely redefined how we present ourselves to enterprise partners and retail users alike.",
    name: "Marcus Thorne",
    company: "MoonPay",
  },
  {
    id: 6,
    quote: "From initial concept to final delivery, the attention to detail was extraordinary. They don't just design interfaces; they craft immersive digital experiences that perfectly capture the brand's essence.",
    name: "Elena Rodriguez",
    company: "Polygon",
  }
];

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  // Update active index based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth; // Assuming cards are roughly 100vw or we can estimate
    // A more accurate way:
    const cards = container.querySelectorAll('.snap-center');
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      // If the center of the card is within the center of the container
      if (
        rect.left >= containerRect.left - rect.width / 2 &&
        rect.right <= containerRect.right + rect.width / 2
      ) {
        setActiveIndex(index + 1);
      }
    });
  };

  return (
    <section className="bg-black py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-white text-[clamp(48px,8vw,96px)] font-normal leading-[1.1] tracking-tight max-w-2xl">
          Hear from founders
        </h2>
        
        {/* Indicator */}
        <div className="flex items-center gap-4 text-[#555] font-mono text-lg pb-4">
          <span className="text-white">{activeIndex}</span>
          <span>—</span>
          <span>{testimonials.length}</span>
        </div>
      </div>

      {/* Draggable/Scrollable container */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 sm:px-6 lg:px-8 pb-12 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Extra padding div for first item to align with container */}
        <div className="w-[1vw] md:w-[10vw] shrink-0" />
        
        {testimonials.map((t) => (
          <div 
            key={t.id} 
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[500px]"
          >
            {/* Top row: Avatar placeholder & Logo placeholder */}
            <div className="flex justify-between items-start mb-12">
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-full overflow-hidden grayscale">
                {/* Avatar Placeholder */}
              </div>
              <div className="text-white/40 font-semibold tracking-wider uppercase text-sm">
                {t.company}
              </div>
            </div>

            {/* Quote */}
            <p className="text-white text-[clamp(20px,2.5vw,32px)] leading-[1.3] font-normal mb-16">
              "{t.quote}"
            </p>

            {/* Bottom info */}
            <div>
              <p className="text-white font-medium text-lg">{t.name}</p>
              <p className="text-[#666] text-sm">{t.company}</p>
            </div>
          </div>
        ))}
        
        {/* Extra padding div for last item */}
        <div className="w-[5vw] md:w-[20vw] shrink-0" />
      </div>
    </section>
  );
}

export default TestimonialsSection;
