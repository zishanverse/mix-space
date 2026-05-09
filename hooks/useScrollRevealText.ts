"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealTextOptions {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  initialColor?: string;
  revealedColor?: string;
}

export function useScrollRevealText<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  options: UseScrollRevealTextOptions = {}
) {
  const {
    start = "top 80%",
    end = "bottom 20%",
    scrub = 1,
    initialColor = "#333",
    revealedColor = "#ffffff",
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Split text into words
    const text = element.innerText;
    const words = text.split(/\s+/);

    // Clear the element and wrap each word in a span
    element.innerHTML = words
      .map((word, index) => {
        const isHighlighted = word.includes("design") ||
                              word.includes("build") ||
                              word.includes("launch") ||
                              word.includes("tailored") ||
                              word.includes("visual") ||
                              word.includes("experimentation") ||
                              word.includes("user") ||
                              word.includes("experience") ||
                              word.includes("agile") ||
                              word.includes("sprint") ||
                              word.includes("long-term") ||
                              word.includes("partnerships") ||
                              word.includes("six") ||
                              word.includes("signature") ||
                              word.includes("engagements");
        return `<span class="word" data-highlight="${isHighlighted}" style="color: ${initialColor}; display: inline-block; margin-right: 0.25em;">${word}</span>`;
      })
      .join("");

    // Animate words
    const wordElements = element.querySelectorAll<HTMLElement>(".word");

    wordElements.forEach((wordEl, index) => {
      const isHighlighted = wordEl.dataset.highlight === "true";
      const highlightColor = isHighlighted ? "#ffffff" : revealedColor;

      gsap.fromTo(
        wordEl,
        { color: initialColor },
        {
          color: highlightedWord => (highlightedWord ? "#ffffff" : revealedColor),
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            onUpdate: self => {
              const progress = self.progress;
              const wordProgress = progress * words.length;

              if (wordProgress >= index) {
                gsap.set(wordEl, { color: isHighlighted ? "#ffffff" : revealedColor });
              } else {
                gsap.set(wordEl, { color: initialColor });
              }
            },
          },
          onReverseComplete: () => {
            gsap.set(wordEl, { color: initialColor });
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, start, end, scrub, initialColor, revealedColor]);
}
