"use client";

import { TextReveal } from "./TextReveal";
import { TaglineContainers } from "./TaglineContainers";

interface TextRevealSectionProps {
  maxWidth?: string;
  highlightedWords?: string[]; // Control which words get highlighted
  enableHighlight?: boolean; // Toggle word highlighting on/off
}

export function TextRevealSection({
  maxWidth,
  highlightedWords,
  enableHighlight,
}: TextRevealSectionProps) {
  return (
    <section
      id="text-reveal"
      className="relative flex min-h-[60vh] flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Text Reveal Component with width control and highlight options */}
      <TextReveal
        maxWidth={maxWidth}
        highlightedWords={highlightedWords}
        enableHighlight={enableHighlight}
      />

      {/* Animated Taglines Component */}
      <TaglineContainers />
    </section>
  );
}

export default TextRevealSection;
