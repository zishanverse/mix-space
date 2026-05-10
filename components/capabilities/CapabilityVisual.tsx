"use client";

import { capabilitiesContent } from "@/content/capabilities";

interface CapabilityVisualProps {
  activeCapability: string;
}

export function CapabilityVisual({ activeCapability }: CapabilityVisualProps) {
  return (
    // Fill whatever height the sticky container gives us
    <div className="relative h-full w-full">
      {capabilitiesContent.capabilities.map((capability) => (
        <div
          key={capability.id}
          className="absolute inset-0 transition-opacity"
          style={{
            opacity: activeCapability === capability.id ? 1 : 0,
            zIndex: activeCapability === capability.id ? 10 : 0,
            transitionDuration: capabilitiesContent.visual.transitionDuration,
          }}
        >
          {/* Solid colour fill */}
          <div
            className={`h-full w-full ${capability.visualClass}`}
            style={{ backgroundColor: capability.backgroundColor }}
          />

          {/* Video for capabilities that have a videoSrc */}
          {capability.videoSrc && activeCapability === capability.id && (
            <video
              src={capability.videoSrc}
              poster={capability.videoPoster}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}

        </div>
      ))}
    </div>
  );
}

export default CapabilityVisual;