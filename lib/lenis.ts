import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap-plugins';

export function initLenis() {
  const lenis = new Lenis({ 
    lerp: 0.1,         // Slightly higher responsiveness for tighter control 
    duration: 1.2,     // Optimal balance between inertia and immediate response
    smoothWheel: true,
    wheelMultiplier: 1.0,
  });

  // Connect Lenis scroll events to GSAP ScrollTrigger for frame-perfect sync
  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  // Integrate into one centralized requestAnimationFrame loop managed by GSAP
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Disable native lag smoothing to keep Lenis and GSAP ticker fully unified
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
