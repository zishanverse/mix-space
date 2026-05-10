"use client";

import { useState } from "react";
import { CapabilityVisual } from "./CapabilityVisual";
import { CapabilityList } from "./CapabilityList";
import { capabilitiesContent } from "@/content/capabilities";
import { SectionLabels } from "@/components/about-us/SectionLabels";

export function CapabilitiesSection() {
  const [activeCapability, setActiveCapability] = useState(
    capabilitiesContent.visual.defaultCapability
  );

  return (
    <section id="capabilities" className="relative bg-black overflow-clip">
      {/* Header — full-width with side padding */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <SectionLabels {...capabilitiesContent.label} />
      </div>

      {/*
        Two-column layout — NO horizontal padding on the outer wrapper
        so the image card can sit flush against the left edge.
        The list gets its own left padding.
      */}
      {/*
        Two-column row.
        - Left: sticky, self-start (NO fixed height on wrapper — required for sticky)
          The inner div uses h-screen so the visual fills the viewport.
        - Right: natural flow, scrolls past the locked image.
      */}
      <div className="flex w-full flex-col lg:flex-row lg:items-start">

        {/* ── LEFT: locked image panel ── */}
        <div className="hidden lg:block lg:w-[80%] lg:sticky lg:top-20">
          {/* h-screen keeps the visual filling the viewport while sticky */}
          <div className="h-[55vh] w-full max-w-4xl overflow-hidden rounded-2xl mx-auto ">
            <CapabilityVisual activeCapability={activeCapability} />
          </div>
        </div>

        {/* Mobile: image above list, not sticky */}
        <div className="block lg:hidden w-[92%] mx-auto aspect-[4/3] overflow-hidden rounded-2xl">
          <CapabilityVisual activeCapability={activeCapability} />
        </div>

        {/* ── RIGHT: scrollable list ── */}
        <div className="w-full lg:w-[58%] px-4 sm:px-8 lg:px-16 mt-8 lg:mt-0">
          <CapabilityList
            activeCapability={activeCapability}
            onCapabilityChange={setActiveCapability}
          />
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;
