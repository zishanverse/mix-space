"use client";

import { useRef, useEffect } from "react";
import { aboutUsContent } from "@/content/about-us";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutUsTextProps {
  content?: string;
  ariaLabel?: string;
  maxWidth?: string;
  className?: string;
  highlightedWords?: string[];
  enableHighlight?: boolean;
}

type GsapTimeline = ReturnType<typeof gsap.timeline>;

/** Group word-spans into visual lines by comparing their rounded top offset */
function groupWordsIntoLines(wordEls: NodeListOf<HTMLElement>): HTMLElement[][] {
  const lines: HTMLElement[][] = [];
  let currentLine: HTMLElement[] = [];
  let lastTop: number | null = null;

  wordEls.forEach((el) => {
    const top = Math.round(el.getBoundingClientRect().top);
    if (lastTop === null || top !== lastTop) {
      if (currentLine.length > 0) lines.push(currentLine);
      currentLine = [el];
      lastTop = top;
    } else {
      currentLine.push(el);
    }
  });

  if (currentLine.length > 0) lines.push(currentLine);
  return lines;
}

export function AboutUsText({
  content = aboutUsContent.text.content,
  ariaLabel = aboutUsContent.text.ariaLabel,
  maxWidth = aboutUsContent.text.defaultMaxWidth,
  className = "text-center",
  highlightedWords = aboutUsContent.text.highlightedWords,
  enableHighlight = true,
}: AboutUsTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const tlsRef = useRef<GsapTimeline[]>([]);

  const resolvedMaxWidth =
    maxWidth === "4xl" ? "56rem" : maxWidth === "5xl" ? "64rem" : "100%";

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const wordsToHighlight = enableHighlight ? highlightedWords : [];

    // ── 1. Build word spans ─────────────────────────────────────────────
    const words = content.split(/\s+/);
    element.innerHTML = words
      .map((word, i) => {
        const isHighlighted = wordsToHighlight.includes(word);
        const space = i < words.length - 1 ? " " : "";
        return (
          `<span class="word" data-highlight="${isHighlighted}" ` +
          `style="color:${aboutUsContent.text.initialColor};display:inline;">` +
          `${word}</span>${space}`
        );
      })
      .join("");

    // ── 2. Kill / teardown helper ────────────────────────────────────────
    function killAll() {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
      tlsRef.current.forEach((t) => t.kill());
      tlsRef.current = [];
    }

    // ── 3. Build per-line ScrollTriggers ─────────────────────────────────
    function buildTriggers() {
      killAll();

      const wordEls = element!.querySelectorAll<HTMLElement>(".word");

      // Reset all words to initial colour
      wordEls.forEach((el) => {
        el.style.color = aboutUsContent.text.initialColor;
      });

      const lines = groupWordsIntoLines(wordEls);

      lines.forEach((lineWords) => {
        const triggerEl = lineWords[0]; // anchor trigger to first word in line

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerEl,
            // Highlight when the line crosses viewport center
            start: "top center",
            end: "bottom center",
            scrub: 0.6,
          },
        });

        // Capture the ScrollTrigger instance — GSAP creates it synchronously
        const capturedTrigger: ScrollTrigger | null = tl.scrollTrigger ?? null;

        // All words in the line animate together (position = 0)
        lineWords.forEach((wordEl) => {
          const isHighlighted = wordEl.dataset.highlight === "true";
          tl.to(
            wordEl,
            {
              color: isHighlighted
                ? aboutUsContent.text.highlightColor
                : aboutUsContent.text.revealedColor,
              duration: 0.3,
              ease: "none",
            },
            0
          );
        });

        tlsRef.current.push(tl);

        // ScrollTrigger is synchronously created when gsap.timeline() runs
        if (capturedTrigger) {
          triggersRef.current.push(capturedTrigger);
        }
      });

      ScrollTrigger.refresh();
    }

    // Defer one frame so the browser has finished laying out the text
    const rafId = requestAnimationFrame(() => {
      buildTriggers();
    });

    // ── 4. Rebuild on resize for full responsiveness ─────────────────────
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => buildTriggers());
    });
    ro.observe(element);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      killAll();
    };
  }, [content, highlightedWords, enableHighlight]);

  return (
    <div
      ref={containerRef}
      className={`${className} font-normal leading-[1.5] overflow-x-hidden w-full`}
      style={{
        maxWidth: resolvedMaxWidth,
        margin: "0 auto",
        color: aboutUsContent.text.initialColor,
        fontSize: "clamp(20px, 2.4vw, 48px)",
      }}
      aria-label={ariaLabel}
    >
      {content}
    </div>
  );
}

export default AboutUsText;
