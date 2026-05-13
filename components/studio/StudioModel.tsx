"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const PANELS = [
  {
    id: "studio",
    label: "Studio",
    badge: "Model",
    description:
      "Traditional cash compensation in fiat multi currency or choose from a variety of different crypto stablecoins.",
    image:
      "https://res.cloudinary.com/deepcnbrz/image/upload/v1778653898/coders%20express/673e8e753711fbda192403ac_Stream_luppxx.webp",
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
    badge2: null,
  },
  {
    id: "venture",
    label: "Venture",
    badge: "Model",
    description:
      "Having token equity in your company can reduce our costs by up to 40%. Hybrid: cash & equity compensation.",
    image:
      "https://res.cloudinary.com/deepcnbrz/image/upload/v1778653875/coders%20express/673e8e75edfc15a41bc6e0d0_Ringfence_l1so8j.webp",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #111827 100%)",
    badge2: "Up to 40% off",
  },
];

function Panel({
  panel,
  direction,
  panelRef,
}: {
  panel: (typeof PANELS)[0];
  direction: "left" | "right";
  panelRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [hovered, setHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={panelRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        minHeight: "440px",
        aspectRatio: "3/2",
        cursor: "pointer",
        opacity: 0,
        transform: direction === "left" ? "translateX(-40px)" : "translateX(40px)",
        outline: hovered ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
        transition: "outline 0.4s ease",
      }}
    >
      {/* Background image */}
      <Image
        src={panel.image}
        alt={panel.label}
        fill
        className="object-cover"
        style={{
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Dark overlay — stronger at bottom for text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)",
          transition: "background 0.4s ease",
          zIndex: 1,
        }}
      />

      {/* Hover white tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.04)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 2,
        }}
      />

      {/* Content — positioned bottom */}
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          padding: "32px 36px 36px",
          transform: hovered ? "translateY(-6px)" : "translateY(0px)",
          transition: "transform 0.4s ease",
          textAlign: "center",
        }}
      >
        {/* Title row: Large label + Model badge */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(42px, 8vw, 96px)",
              fontWeight: 400,
              color: "#ffffff",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
            }}
          >
            {panel.label}
          </h2>
          {/* "Model" pill badge */}
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.04em",
              color: "#ffffff",
              backgroundColor: "rgba(0,0,0,0.65)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "4px 10px",
              whiteSpace: "nowrap",
              marginTop: "8px",
              backdropFilter: "blur(4px)",
            }}
          >
            {panel.badge}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.65)",
            margin: "0 auto",
            maxWidth: "300px",
          }}
        >
          {panel.description}
        </p>

        {/* "Up to 40% off" extra badge for venture */}
        {panel.badge2 && (
          <span
            style={{
              display: "inline-block",
              marginTop: "14px",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "100px",
              padding: "4px 12px",
            }}
          >
            {panel.badge2}
          </span>
        )}
      </div>
    </div>
  );
}

export function StudioModel() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          gsap.to(left, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
          });
          gsap.to(right, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
          });

          observer.unobserve(section);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: "var(--background)",
        padding: "var(--space-xl, 80px) 40px var(--space-xl, 80px) 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
        }}
        className="flex-col md:flex-row"
      >
        {PANELS.map((panel, i) => (
          <Panel
            key={panel.id}
            panel={panel}
            direction={i === 0 ? "left" : "right"}
            panelRef={i === 0 ? leftRef : rightRef}
          />
        ))}
      </div>
    </section>
  );
}

export default StudioModel;
