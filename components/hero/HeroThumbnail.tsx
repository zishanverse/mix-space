"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";
import { FullscreenVideoPlayer } from "./FullscreenVideoPlayer";

export function HeroThumbnail() {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // Convert recommended videos from schema
  const recommendedVideos = (heroContent.video.recommendedVideos || []).map((vid) => ({
    id: vid.id,
    title: vid.title,
    src: vid.src,
  }));

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: heroContent.animation.thumbnailDelay, duration: 0.6 }}
        onClick={() => setIsPlayerOpen(true)}
        className="group md:absolute relative md:bottom-20 bottom-0 md:left-12 left-0 mt-12 md:mt-0 w-[184px] h-[144px] overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] cursor-pointer hover:border-[#ca7a3a]/50 hover:scale-[1.05] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        {heroContent.video.thumbnailVideoSrc ? (
          <video
            src={heroContent.video.thumbnailVideoSrc}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : null}
        
        {/* Dark gradient vignette overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
        
        {/* Play button overlay with custom brand colors on hover */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-[#ca7a3a] group-hover:border-[#ca7a3a] group-hover:shadow-lg group-hover:shadow-[#ca7a3a]/30">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-5 w-5 fill-current transition-colors duration-300"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Premium Fullscreen Video Player Overlay */}
      <FullscreenVideoPlayer
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        initialVideoSrc={heroContent.video.thumbnailVideoSrc || ""}
        recommendedVideos={recommendedVideos}
      />
    </>
  );
}

export default HeroThumbnail;

