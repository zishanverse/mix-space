/**
 * GSAP Plugin Registration
 * Register all GSAP plugins once at the application level
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Export the configured GSAP instance
export { gsap };

// Export plugins for use in components
export { ScrollTrigger, TextPlugin };

// Create a utility function for scroll-based animations
export function createScrollTrigger(
  element: HTMLElement | gsap.core.Tween,
  options: gsap.plugins.ScrollTriggerInstanceVars
) {
  return ScrollTrigger.create({
    ...options,
  });
}

// Cleanup function for removing all scroll triggers
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

// Refresh scroll triggers (useful after layout changes)
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
