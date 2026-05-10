"use client";

import { useRef, useEffect } from "react";
import { textRevealContent } from "@/content/text-reveal";
import { gsap, ScrollTrigger } from "@/lib/gsap-plugins";

interface TextRevealProps {
  content?: string;
  ariaLabel?: string;
  maxWidth?: string;
  className?: string;
  highlightedWords?: string[]; // New prop to control which words get highlighted
  enableHighlight?: boolean; // Toggle to enable/disable highlighting
}

export function TextReveal({
  content = textRevealContent.text.content,
  ariaLabel = textRevealContent.text.ariaLabel,
  maxWidth = textRevealContent.text.defaultMaxWidth,
  className = "text-center",
  highlightedWords = textRevealContent.text.highlightedWords, // Default from content
  enableHighlight = true, // Default to enabled
}: TextRevealProps) {
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
        return `<span class="word" data-highlight="${isHighlighted}" style="color: ${textRevealContent.text.initialColor}; display: inline-block; margin-right: 0.25em;">${word}</span>${spacing}`;
      })
      .join("");

    const wordElements = element.querySelectorAll<HTMLElement>(".word");

    // Create timeline for word-by-word reveal with highlighted words appearing first
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: textRevealContent.animation.scrollStart,
        end: textRevealContent.animation.scrollEnd,
        scrub: textRevealContent.animation.scrub,
      },
    });

    // Animate words - highlighted words first, then others
    wordElements.forEach((wordEl, index) => {
      const isHighlighted = wordEl.dataset.highlight === "true";
      const highlightDelay = isHighlighted ? -textRevealContent.animation.highlightDelay : 0; // Highlighted words appear slightly earlier

      tl.to(
        wordEl,
        {
          color: textRevealContent.text.revealedColor,
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
        maxWidth,
        margin: "0 auto",
        color: textRevealContent.text.initialColor,
      }}
      aria-label={ariaLabel}
    >
      {content}
    </div>
  );
}

export default TextReveal;
