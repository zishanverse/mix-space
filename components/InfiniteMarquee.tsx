"use client";

import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  items: ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function InfiniteMarquee({
  items,
  direction = "left",
  speed = 40,
  className = "",
}: InfiniteMarqueeProps) {
  const animationClass = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className={`marquee-container overflow-hidden ${className}`}>
      <div
        className={`flex items-center gap-20 whitespace-nowrap ${animationClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First set of items */}
        {items.map((item, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            {item}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
