"use client";

import { useState } from "react";

interface Capability {
  id: string;
  name: string;
  visualClass: string;
}

const capabilities: Capability[] = [
  { id: "brand-strategy", name: "Brand Strategy", visualClass: "capability-visual-brand-strategy" },
  { id: "brand-identity", name: "Brand Identity", visualClass: "capability-visual-brand-identity" },
  { id: "product-design", name: "Product Design", visualClass: "capability-visual-product-design" },
  { id: "ux-ui", name: "UX / UI Design", visualClass: "capability-visual-ux-ui" },
  { id: "web-dev", name: "Website Development", visualClass: "capability-visual-web-dev" },
  { id: "brand-video", name: "Brand Video", visualClass: "capability-visual-brand-video" },
];

export function CapabilityDisplay() {
  const [activeCapability, setActiveCapability] = useState("product-design");

  return (
    <section className="relative min-h-screen bg-black px-4 py-24 sm:px-6 lg:px-8">
      {/* Section label */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-[#555]">
        OUR CAPABILITIES
      </div>

      <div className="mx-auto mt-20 flex h-full w-full max-w-7xl flex-col lg:flex-row">
        {/* Left column - Visual display */}
        <div className="relative w-full lg:w-[45%]">
          <div className="aspect-[4/3] max-w-[560px] overflow-hidden rounded-2xl">
            {capabilities.map((capability) => (
              <div
                key={capability.id}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  activeCapability === capability.id ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className={`h-full w-full ${capability.visualClass}`} />
              </div>
            ))}
            {/* Default Product Design visual content */}
            {activeCapability === "product-design" && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#5B21D4]">
                <div className="w-[80%] rounded-lg bg-white p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">noir.io</span>
                    <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700">3 Nodes</span>
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
        </div>

        {/* Right column - Capability list */}
        <div className="mt-8 w-full lg:mt-0 lg:w-[55%] lg:pl-16">
          <div className="flex flex-col gap-4">
            {capabilities.map((capability) => (
              <button
                key={capability.id}
                onMouseEnter={() => setActiveCapability(capability.id)}
                className={`text-left text-[clamp(28px,3.5vw,52px)] font-normal leading-[1.1] transition-colors ${
                  activeCapability === capability.id ? "text-white font-medium" : "text-[#333]"
                }`}
              >
                {capability.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
