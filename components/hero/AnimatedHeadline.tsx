"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTextAnimation } from "@/hooks/useGSAP";
import { heroContent } from "@/content/hero";

interface AnimatedHeadlineProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function AnimatedHeadline({
  text = heroContent.headline.text,
  className = "",
  delay = 0,
  duration = heroContent.animation.headlineDuration,
  stagger = heroContent.animation.headlineStagger,
}: AnimatedHeadlineProps) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-10%" });
  const controls = useAnimation();

  // GSAP-based word-by-word animation
  useTextAnimation(textRef, { duration, stagger, delay });

  // Framer Motion hover effect on the container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    hover: {
      scale: 1.01,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={textRef as any}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={containerVariants}
      whileHover="hover"
    >
      {text}
    </motion.div>
  );
}

interface AnimatedSubheadlineProps {
  text?: string;
  className?: string;
  delay?: number;
}

export function AnimatedSubheadline({
  text = heroContent.subheadline.text,
  className = "",
  delay = heroContent.animation.subheadlineDelay,
}: AnimatedSubheadlineProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: heroContent.animation.subheadlineDuration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
    >
      {text}
    </motion.p>
  );
}
