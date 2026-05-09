"use client";

import { motion } from "framer-motion";

export function HeroText() {
  return (
    <div className="mb-12 ml-0  overflow-hidden">
      {/* Line 1 */}
      <motion.h1
        initial={{ opacity: 0, filter: "blur(12px)",}}
        animate={{ opacity: 1, filter: "blur(0px)", }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[clamp(60px,8vw,72px)] font-normal leading-none text-white"
      >
        Creating brands
      </motion.h1>

      {/* Line 2 */}
      <motion.h1
        initial={{ opacity: 0, filter: "blur(12px)", }}
        animate={{ opacity: 1, filter: "blur(0px)", }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="
          text-[clamp(60px,8vw,72px)]
          font-normal
          leading-none
          text-white
          ml-55 lg:ml-60.5
        "
      >
        of the future
      </motion.h1>
    </div>
  );
}

export default HeroText;