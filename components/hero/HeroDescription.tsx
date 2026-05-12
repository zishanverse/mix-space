"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content/hero";

export function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: heroContent.animation.descriptionDelay, duration: 0.6 }}
      className="md:absolute relative md:right-12 md:top-48 top-0 right-0 max-w-[320px] text-[15px] md:text-[18px] leading-[1.6] text-white mb-8 md:mb-0 ml-auto md:ml-0 text-right md:text-left"
      aria-label={heroContent.description.ariaLabel}
    >
      {heroContent.description.text}
    </motion.p>
  );
}

export default HeroDescription;
