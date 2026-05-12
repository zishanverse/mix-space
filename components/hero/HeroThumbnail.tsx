"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";

export function HeroThumbnail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: heroContent.animation.thumbnailDelay, duration: 0.6 }}
      className="md:absolute relative md:bottom-20 bottom-0 md:left-12 left-0 mt-12 md:mt-0 w-[184px] h-[144px] overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a]"
    >
      {heroContent.video.thumbnailVideoSrc ? (
        <video
          src={heroContent.video.thumbnailVideoSrc}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : null}
      
      {/* Play button overlay (optional, visually indicates it's a video) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-transform hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 h-4 w-4 text-white"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroThumbnail;
