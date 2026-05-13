"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "Whether it's conducting interviews with the team, or consistent creative iterations based on feedback. It's been an absolute pleasure to work with the Coders Express team. They deliver results and were a joy to collaborate with.",
    name: "Charles Read",
    company: "Rarestone Capital",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
  {
    id: 2,
    quote: "We have been working alongside the Coders Express team on multiple projects and have created many new brands together. They have consistently high quality delivery and amazing strategic vision.",
    name: "Milton Lam",
    company: "Animoca Brands",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
  {
    id: 3,
    quote: "Coders Express have been instrumental in consolidating our vision for Hydro. They have built the brand from the ground up, deeply integrating into our team to create a powerful mission led strategy, create beautiful branding and working meticulously on every single detail of our user experience design journey for our application.",
    name: "Reggie Raghav",
    company: "Hydro",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
  {
    id: 4,
    quote: "We have been working with Coders Express across a number of different projects and they consistently exceed our expectations in high-fidelity design systems and premium aesthetics.",
    name: "Jen Hioki",
    company: "Moonpay",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
  {
    id: 5,
    quote: "Coders Express brought Cartesi to life. After digging deep to understand who we were as founders and where the company stood, they created an enduring visual strategy.",
    name: "Claudio de Oliveira Marques",
    company: "Cartesi",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
  {
    id: 6,
    quote: "Coders Express have so much ambition as an agency and were extremely efficient throughout the project, always available and not afraid to challenge the brief to get the best results. Anthony and his team really immersed themselves into our industry and had a great understanding of future proofing our brand and website.",
    name: "Andy Morris",
    company: "Skyscanner",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
  {
    id: 7,
    quote: "Partnering with Coders Express on our new direction and website has transformed the Biconomy brand. The team brought visionary insights to life through design and storytelling and seamlessly executed our digital experience. Our brand feels supercharged and ready for our next stage of growth.",
    name: "Ahmed Al-Balaghi",
    company: "Biconomy",
    avatar: "https://cdn.prod.website-files.com/6687c6ec7db3d4bbcf259b6a/66c20e7b2c21f55a63aa278b_bicoahmed.avif",
  },
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
          Our Testimonials
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
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-full overflow-hidden grayscale relative">
                {/* Avatar */}
                {t.avatar && (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                )}
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
