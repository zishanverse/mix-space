import Lenis from '@studio-freight/lenis';

export function initLenis() {
  const lenis = new Lenis({ lerp: 0.08, duration: 1.4 });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
}
