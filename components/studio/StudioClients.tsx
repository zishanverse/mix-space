"use client";

import { useRef, useState, useEffect } from "react";

const CLIENTS = [
  "Moonpay", "Animoca Brands", "Nike", "Cartesi", "Universal", "Skyscanner",
  "Numbers", "Rayls", "Stream", "Alpen Labs", "Biconomy", "Capture", "BoomFi",
  "Erlang", "Hypermint", "myenergi", "NFT NYC", "Lumen", "Klave",
  "New York Fashion Week", "Vivid Q", "Thundercore", "Ringfence", "Blakbox",
  "Prosper", "Rarestone", "Guardian", "Fomo", "Cold Electric", "Verse World",
  "Oh.xyz", "Flashback", "Crypto Autos", "Farcana", "Kagi", "Seatlab",
  "Zap", "Zeebu", "Caura", "Fractal", "Blue Origin", "OBS",
];

function ClientName({ name, isLast }: { name: string; isLast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          color: hovered ? "#ffffff" : "var(--color-text-muted)",
          cursor: "pointer",
          transition: "color 0.2s ease",
          display: "inline",
        }}
      >
        {name}
      </span>
      {!isLast && (
        <span style={{ color: "var(--color-text-muted)" }}>,&nbsp;</span>
      )}
    </>
  );
}

export function StudioClients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          list.style.transition =
            "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)";
          list.style.opacity = "1";
          list.style.transform = "translateY(0)";
          observer.unobserve(list);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        backgroundColor: "var(--background)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "var(--space-xl, 80px) 0 var(--space-2xl, 120px) 0",
      }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: "1440px", padding: "0 40px" }}
      >
        {/* Header row */}
        <div
          className="flex items-center justify-between mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div className="flex items-center gap-3">
            <span style={{ color: "var(--color-text-muted)" }}>[02]</span>
            <span style={{ color: "var(--color-text-secondary)" }}>
              Selected Clients
            </span>
          </div>

          <a
            href="/work"
            className="studio-clients-portfolio-link"
            style={{
              color: "var(--color-text-secondary)",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "color 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            View portfolio →
          </a>
        </div>

        {/* Client name flowing block */}
        <div
          ref={listRef}
          style={{
            opacity: 0,
            transform: "translateY(30px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {CLIENTS.map((name, i) => (
              <ClientName key={name} name={name} isLast={i === CLIENTS.length - 1} />
            ))}
          </p>
        </div>
      </div>

      <style>{`
        .studio-clients-portfolio-link:hover {
          color: #ffffff !important;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
    </section>
  );
}

export default StudioClients;
