"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusable Live Clock Component
function LiveClock({ timezone }: { timezone: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, [timezone]);

  // Avoid SSR mismatch / hydration ghost display
  if (!time) return <div className="min-w-[80px] h-5 bg-white/5 animate-pulse rounded" />;

  return (
    <div className="bg-[#222222] px-[18px] py-[8px] rounded-[40px] text-white font-normal text-sm tracking-wide whitespace-nowrap select-none">
      {time}
    </div>
  );
}

interface LocationCardProps {
  city: string;
  email: string;
  timezone: string;
  imageSrc: string;
  index: number;
}

function LocationCard({ city, email, timezone, imageSrc, index }: LocationCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex-1 w-full flex flex-col"
    >
      {/* Image Container */}
      <div className="group w-full h-[55vh] min-h-[420px] bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden relative cursor-pointer shadow-2xl">
        <Image
          src={imageSrc}
          alt={`${city} Location`}
          fill
          className="object-cover grayscale brightness-90 group-hover:brightness-100 transition-all duration-[800ms] ease-out transform group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Info Bar */}
      <div className="w-full py-6 flex items-center justify-between px-2">
        <div className="flex items-center gap-2 text-lg text-white font-normal">
          <span>{city}</span>
          <span className="opacity-40">—</span>
          <a 
            href={`mailto:${email}`} 
            className="transition-all border-b border-transparent hover:border-white duration-200 hover:text-white font-normal"
          >
            {email}
          </a>
        </div>
        
        <LiveClock timezone={timezone} />
      </div>
    </motion.div>
  );
}

export function LocationsSection() {
  const locations = [
    {
      city: "Dubai",
      email: "dubai@codersexpress.com",
      timezone: "Asia/Dubai",
      imageSrc: "/assets/contact/66855a8fb48b8d40d74e0d01_66bc6ba8241edb738037d4d4_subtle_and_minmal_fog_slowly_appearing_across_the_buildings__dbd88f-poster-00001.jpg"
    },
    {
      city: "London",
      email: "london@codersexpress.com",
      timezone: "Europe/London",
      imageSrc: "/assets/contact/66855a8fb48b8d40d74e0d01_66bc6bc3c7303c68d8104161_subtle_and_minmal_fog_slowly_appearing_across_the_buildings_781bc0-poster-00001.jpg"
    }
  ];

  return (
    <section className="w-full bg-black pt-20 pb-20 relative">
      {/* Section Label */}
      <div className="px-6 lg:px-20 mb-6">
        <h3 className="text-[#555] text-[11px] font-medium uppercase tracking-[0.2em] select-none">
          Locations
        </h3>
      </div>

      {/* Images Grid */}
      <div className="w-full max-w-8xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-stretch gap-10 md:gap-12 lg:gap-16">
        {locations.map((loc, i) => (
          <LocationCard 
            key={loc.city} 
            index={i}
            city={loc.city} 
            email={loc.email} 
            timezone={loc.timezone} 
            imageSrc={loc.imageSrc} 
          />
        ))}
      </div>
    </section>
  );
}
