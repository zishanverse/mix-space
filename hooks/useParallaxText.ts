"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ParallaxDirection = "left" | "right";

interface UseParallaxTextOptions {
  direction?: ParallaxDirection;
  magnitude?: number;
  start?: string;
  end?: string;
  scrub?: number | boolean;
}

export function useParallaxText<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  options: UseParallaxTextOptions = {}
) {
  const {
    direction = "left",
    magnitude = 400,
    start = "top bottom",
    end = "bottom top",
    scrub = 1,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const fromX = direction === "left" ? 0 : -magnitude;
    const toX = direction === "left" ? -magnitude : 0;

    gsap.fromTo(
      element,
      { x: fromX },
      {
        x: toX,
        ease: "none",
        scrollTrigger: {
          trigger: element.parentElement,
          start,
          end,
          scrub,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, direction, magnitude, start, end, scrub]);
}
