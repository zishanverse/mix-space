"use client";

import { TextReveal } from "./TextReveal";
import { ClientLogos } from "./ClientLogos";

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
      className="relative flex min-h-[50vh] flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8"
    >
      {/* Text Reveal Component with width control and highlight options */}
      <TextReveal
        maxWidth={maxWidth}
        highlightedWords={highlightedWords}
        enableHighlight={enableHighlight}
      />

      {/* Client Logos Component */}
      <ClientLogos />
    </section>
  );
}

export default TextRevealSection;
