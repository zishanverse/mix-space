"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BookCallSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-black w-full py-32 md:py-48 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-[clamp(28px,4.5vw,56px)] font-medium tracking-tight max-w-5xl leading-[1.1] mb-14"
      >
        Get in touch to discuss your project with our team
      </motion.h2>

      {/* Animated "Book a Call" Button */}
      <motion.a
        href="https://wa.me/919717191946"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative flex items-center p-2 rounded-full border border-white/20 overflow-hidden cursor-pointer transition-colors duration-500"
        style={{
          borderColor: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.2)"
        }}
      >
        {/* Background animation layer */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-white z-0"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        />

        {/* Layout Container to handle direction swap */}
        <motion.div 
          layout
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className={`relative z-10 flex items-center ${isHovered ? "flex-row-reverse" : "flex-row"}`}
        >
          {/* Icon Container - layout property makes it slide across space, animate handles rotation */}
          <motion.div 
            layout
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-colors duration-500"
            style={{
               backgroundColor: isHovered ? "#000000" : "#ffffff"
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              className="transition-colors duration-500"
              style={{ color: isHovered ? "#ffffff" : "#000000" }}
            >
              <path d="M13 2L3 14H12V22L22 10H13V2Z" />
            </svg>
          </motion.div>

          {/* Text Label - layout property automates smooth transition as ordering flips */}
          <motion.span 
            layout
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="px-8 text-lg font-normal tracking-tight transition-colors duration-500"
            style={{ color: isHovered ? "#000000" : "#ffffff" }}
          >
            Book a call today
          </motion.span>
        </motion.div>
      </motion.a>
    </section>
  );
}

export default BookCallSection;
