"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

const MANIFESTO_TEXT =
  "We live at a time when technology is accelerating at an exponential rate, changing the way we live and relate to the world around us. Noir operates as a hybrid think tank and design studio. By studying the effects of emerging technologies we envision how forward-thinking companies can thrive amidst exponential change.";

export function StudioManifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const ghostRef = useRef<HTMLDivElement>(null);

  const words = MANIFESTO_TEXT.split(" ");

  useEffect(() => {
    if (!sectionRef.current || wordsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      // Start all words at muted grey
      gsap.set(wordsRef.current, { color: "var(--color-text-muted)" });

      // Single ScrollTrigger driving all word reveals
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const total = wordsRef.current.length - 1;
          wordsRef.current.forEach((word, index) => {
            if (!word) return;
            const threshold = (index / total) * 0.85;
            gsap.to(word, {
              color: progress >= threshold ? "#ffffff" : "var(--color-text-muted)",
              duration: 0.2,
              ease: "none",
              overwrite: "auto",
            });
          });
        },
      });

      // Ghost "Studio" — fades in as section enters
      if (ghostRef.current) {
        gsap.fromTo(
          ghostRef.current,
          { opacity: 0 },
          {
            opacity: 0.055,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "top 20%",
              scrub: 1.5,
            },
          }
        );
        gsap.to(ghostRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 80%",
            end: "bottom 10%",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        paddingTop: "var(--space-3xl, 180px)",
        paddingBottom: "var(--space-3xl, 180px)",
      }}
    >
      {/* Ghost "Studio" watermark from hero */}
      <div
        ref={ghostRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        aria-hidden="true"
        style={{ opacity: 0 }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(120px, 28vw, 420px)",
            fontWeight: 400,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          Studio
        </span>
      </div>

      {/* Full-width top border */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
      />

      {/* Content container */}
      <div
        className="relative z-10 mx-auto w-full"
        style={{ maxWidth: "1100px", padding: "0 40px" }}
      >
        {/* Padding between border and text */}
        <div style={{ paddingTop: "clamp(60px, 8vw, 120px)" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(22px, 3.2vw, 46px)",
              fontWeight: 400,
              lineHeight: 1.35,
              letterSpacing: "-0.01em",
              textAlign: "center",
              margin: 0,
            }}
          >
            {words.map((word, i) => (
              // Add a literal space after each word so HTML renders spacing naturally
              <span key={i}>
                <span
                  ref={(el) => {
                    if (el) wordsRef.current[i] = el;
                  }}
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {word}
                </span>
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudioManifesto;
