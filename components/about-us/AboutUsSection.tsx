"use client";

import { SectionLabels } from "./SectionLabels";
import { AboutUsText } from "./AboutUsText";
import { AboutUsLink } from "./AboutUsLink";
import { aboutUsContent } from "@/content/about-us";

interface AboutUsSectionProps {
  maxWidth?: string;
  highlightedWords?: string[]; // Control which words get highlighted
  enableHighlight?: boolean; // Toggle word highlighting on/off
}

export function AboutUsSection({
  maxWidth,
  highlightedWords,
  enableHighlight,
}: AboutUsSectionProps) {
  return (
    <section
      id="about-noir"
      className="relative flex min-h-[50vh] flex-col items-center justify-center bg-black px-4 overflow-x-hidden sm:px-6 lg:px-8 pb-60"
    >
      {/* Section Labels */}
      <SectionLabels {...aboutUsContent.labels} />

      {/* Main Text with Word Reveal */}
      <AboutUsText
        maxWidth={maxWidth}
        highlightedWords={highlightedWords}
        enableHighlight={enableHighlight}
      />

      {/* About Us Link */}
      <AboutUsLink />

      {/* Next Section Transition Indicator */}
    </section>
  );
}

export default AboutUsSection;
