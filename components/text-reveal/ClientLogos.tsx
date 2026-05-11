"use client";

import { useRef, useEffect } from "react";
import { textRevealContent } from "@/content/text-reveal";
import { gsap, ScrollTrigger } from "@/lib/gsap-plugins";
import {
  MoonPayLogo,
  NikeLogo,
  AnimocaLogo,
  BiconomyLogo,
  RaylsLogo,
  CartesiLogo,
} from "./logos";

// Logo component mapping
const LogoComponents: Record<string, React.ComponentType> = {
  moonpay: MoonPayLogo,
  nike: NikeLogo,
  animoca: AnimocaLogo,
  biconomy: BiconomyLogo,
  rayls: RaylsLogo,
  cartesi: CartesiLogo,
};

// Logo wrapper component
function ClientLogo({ name }: { name: string }) {
  const LogoComponent = LogoComponents[name];

  return (
    <div
      className="flex items-center justify-center flex-1"
      style={{
        height: textRevealContent.logos.height,
      }}
    >
      {LogoComponent ? <LogoComponent /> : <span>{name}</span>}
    </div>
  );
}

export function ClientLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate logos fading in with stagger
    const logoElements = container.querySelectorAll<HTMLElement>(".logo-item");

    gsap.fromTo(
      logoElements,
      { opacity: 0, y: 20 },
      {
        opacity: textRevealContent.logos.opacity,
        y: 0,
        duration: textRevealContent.animation.logoDuration,
        stagger: 0.1,
        delay: textRevealContent.animation.logoDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap w-full items-center justify-items-center justify-between gap-y-8 gap-x-4 px-4 sm:px-8 lg:px-12"
      style={{
        minHeight: `${textRevealContent.logos.height}`,
      }}
    >
      {textRevealContent.logos.items.map((logo) => (
        <div
          key={logo.name}
          className="logo-item flex items-center justify-center flex-1 px-2"
        >
          <ClientLogo name={logo.name} />
        </div>
      ))}

      {/* Decorative white dot */}
      <div
        className="hidden md:block flex-shrink-0 rounded-full ml-4"
        style={{
          width: textRevealContent.decoration.dotSize,
          height: textRevealContent.decoration.dotSize,
          backgroundColor: textRevealContent.decoration.dotColor,
        }}
      />
    </div>
  );
}

export default ClientLogos;
