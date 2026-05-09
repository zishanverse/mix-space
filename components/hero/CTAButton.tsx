"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "@/lib/gsap-plugins";
import { heroContent } from "@/content/hero";

interface CTAButtonProps {
  label?: string;
  href?: string;
  ariaLabel?: string;
  className?: string;
  variant?: "outline" | "filled";
  icon?: "arrow-right" | "arrow-down";
}

// Arrow Right Icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow Down Icon
function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 5V19M12 19L5 12M12 19L19 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CTAButton({
  label = heroContent.ctaButton.label,
  href = heroContent.ctaButton.href,
  ariaLabel = heroContent.ctaButton.ariaLabel,
  className = "",
  variant = "outline",
  icon = heroContent.ctaButton.icon,
}: CTAButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();

  // GSAP hover animation for the arrow
  useEffect(() => {
    const button = buttonRef.current;
    const arrow = arrowRef.current;
    if (!button || !arrow) return;

    const handleMouseEnter = () => {
      gsap.to(arrow, {
        x: 8,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Framer Motion variants for button
  const buttonVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: heroContent.animation.ctaDuration,
        delay: heroContent.animation.ctaDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  // Base styles based on variant
  const baseClasses =
    variant === "outline"
      ? "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black"
      : "border-2 border-transparent bg-white text-black hover:bg-transparent hover:border-white hover:text-white";

  return (
    <motion.a
      ref={buttonRef as any}
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-medium transition-colors duration-300 ${baseClasses} ${className}`}
      variants={buttonVariants}
      initial="initial"
      animate={controls}
      whileHover="hover"
      whileTap="tap"
      onAnimationComplete={() => {
        controls.start("animate");
      }}
    >
      <span>{label}</span>
      <span className="overflow-hidden">
        {icon === "arrow-right" ? (
          <ArrowRightIcon ref={arrowRef as any} className="h-5 w-5" />
        ) : (
          <ArrowDownIcon ref={arrowRef as any} className="h-5 w-5" />
        )}
      </span>
    </motion.a>
  );
}
