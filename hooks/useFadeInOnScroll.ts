"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseFadeInOnScrollOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  threshold?: number;
}

export function useFadeInOnScroll<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  options: UseFadeInOnScrollOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.15,
    start = "top 85%",
    threshold = 0.1,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element has children to stagger
    const children = Array.from(element.children) as HTMLElement[];

    if (children.length > 0) {
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    } else {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, delay, duration, stagger, start]);
}
