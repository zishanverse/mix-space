"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";

export function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: heroContent.animation.descriptionDelay, duration: 0.6 }}
      className="absolute right-6 top-32 md:top-48 max-w-[320px] text-[15px] md:text-[18px] leading-[1.6] text-white lg:right-12"
      aria-label={heroContent.description.ariaLabel}
    >
      {heroContent.description.text}
    </motion.p>
  );
}

export default HeroDescription;
