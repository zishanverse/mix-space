"use client";

import { useRef, useEffect } from "react";
import { aboutUsContent } from "@/content/about-us";
import { gsap, ScrollTrigger } from "@/lib/gsap-plugins";

interface AboutUsTextProps {
  content?: string;
  ariaLabel?: string;
  maxWidth?: string;
  className?: string;
  highlightedWords?: string[]; // Control which words get highlighted
  enableHighlight?: boolean; // Toggle word highlighting on/off
}

export function AboutUsText({
  content = aboutUsContent.text.content,
  ariaLabel = aboutUsContent.text.ariaLabel,
  maxWidth = aboutUsContent.text.defaultMaxWidth,
  className = "text-center",
  highlightedWords = aboutUsContent.text.highlightedWords, // Default from content
  enableHighlight = true, // Default to enabled
}: AboutUsTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Split text into words preserving spaces
    const words = content.split(/\s+/);

    // Use provided highlighted words if highlighting is enabled
    const wordsToHighlight = enableHighlight ? highlightedWords : [];

    // Wrap each word in a span with highlight data and add proper spacing
    element.innerHTML = words
      .map((word, index) => {
        const isHighlighted = wordsToHighlight.includes(word);
        // Add space after each word except the last one
        const spacing = index < words.length - 1 ? ' ' : '';
        return `<span class="word" data-highlight="${isHighlighted}" style="color: ${aboutUsContent.text.initialColor}; display: inline-block; margin-right: 0.25em;">${word}</span>${spacing}`;
      })
      .join("");

    const wordElements = element.querySelectorAll<HTMLElement>(".word");

    // Create timeline for word-by-word reveal with highlighted words appearing first
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: aboutUsContent.animation.scrollStart,
        end: aboutUsContent.animation.scrollEnd,
        scrub: aboutUsContent.animation.scrub,
      },
    });

    // Animate words - highlighted words first, then others
    wordElements.forEach((wordEl, index) => {
      const isHighlighted = wordEl.dataset.highlight === "true";
      const highlightDelay = isHighlighted ? -0.05 : 0; // Highlighted words appear slightly earlier

      tl.to(
        wordEl,
        {
          color: isHighlighted
            ? aboutUsContent.text.highlightColor
            : aboutUsContent.text.revealedColor,
          duration: 0.1,
        },
        index * 0.08 + highlightDelay
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [content, highlightedWords, enableHighlight]);

  return (
    <div
      ref={textRef}
      className={`${className} text-[clamp(28px,4.5vw,52px)] font-normal leading-[1.2] overflow-x-hidden`}
      style={{
        maxWidth: `max-${maxWidth}`,
        margin: "0 auto",
        color: aboutUsContent.text.initialColor,
      }}
      aria-label={ariaLabel}
    >
      {content}
    </div>
  );
}

export default AboutUsText;
