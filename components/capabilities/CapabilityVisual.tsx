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

          {/* Product Design mock UI */}
          {capability.id === "product-design" &&
            activeCapability === capability.id && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#5B21D4]">
                <div className="w-[80%] rounded-lg bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">
                      noir.io
                    </span>
                    <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700">
                      3 Nodes
                    </span>
                  </div>
                  <svg viewBox="0 0 200 100" className="w-full">
                    <path
                      d="M0 80 Q25 70 50 75 T100 60 T150 70 T200 50"
                      fill="none"
                      stroke="#5B21D4"
                      strokeWidth="2"
                    />
                    <path
                      d="M0 60 Q25 50 50 55 T100 40 T150 50 T200 30"
                      fill="none"
                      stroke="#5B21D4"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

export default CapabilityVisual;