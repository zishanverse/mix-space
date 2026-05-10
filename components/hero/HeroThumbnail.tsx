"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";

export function HeroThumbnail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: heroContent.animation.thumbnailDelay, duration: 0.6 }}
      className="absolute bottom-20 left-0 grid grid-cols-2 gap-1 lg:left-12"
    >
      {/* Thumbnail 1 */}
      <div className="hero-thumbnail-1" />

      {/* Thumbnail 2 */}
      <div className="hero-thumbnail-2" />

      {/* Thumbnail 3 with play button */}
      <div className="hero-thumbnail-3 relative flex items-center justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 h-4 w-4 text-black"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Thumbnail 4 */}
      <div className="hero-thumbnail-4" />
    </motion.div>
  );
}

export default HeroThumbnail;
