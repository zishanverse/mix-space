"use client";

import { useState, useEffect } from "react";

interface SectionInfo {
  index: string;
  label: string;
}

const sections: SectionInfo[] = [
  { index: "[01]", label: "ABOUT NOIR" },
  { index: "[02]", label: "OUR CAPABILITIES" },
  { index: "[03]", label: "RECENT WORK" },
  { index: "[04]", label: "SIGNATURE ENGAGEMENTS" },
  { index: "[05]", label: "TESTIMONIALS" },
  { index: "[06]", label: "NEWS" },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState<SectionInfo | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);

      // Find current section based on scroll position
      const sectionElements = sections.map(s => {
        const el = document.getElementById(s.label.toLowerCase().replace(/ /g, "-"));
        if (!el) return { section: s, rect: null };
        return { section: s, rect: el.getBoundingClientRect() };
      });

      const visibleSection = sectionElements.find(({ rect }) => {
        return rect && rect.top <= window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      });

      if (visibleSection) {
        setCurrentSection(visibleSection.section);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed left-0 top-0 z-50 w-full bg-transparent transition-[border-color] duration-300 ${
          hasScrolled ? "border-b border-white/8" : ""
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#top" className="flex items-center">
            <svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="h-10 w-10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="2.5"
                width="43"
                height="43"
                rx="4"
                fill="#000"
                stroke="rgba(255,255,255,0.28)"
              />
              <path
                d="M10 9L36.5 35.5"
                stroke="#fff"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </a>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Work", "#work"],
              ["Studio", "#studio"],
              ["Ventures", "#ventures"],
              ["News", "#news"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[15px] text-white transition-opacity duration-200 hover:opacity-60"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Work with us button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-[#171717] px-5 py-3 text-[15px] text-white transition-colors duration-200 hover:bg-white hover:text-black"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18.5 3.5 21V6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v7A2.5 2.5 0 0 1 18 15.5H7Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span>Work with us</span>
          </a>
        </div>
      </header>

      {/* Section indicators */}
      {currentSection && (
        <div className="fixed left-0 right-0 top-0 z-40 pointer-events-none">
          <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#666]">
              {currentSection.index}
            </span>
          </div>
          <div className="fixed left-1/2 top-8 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-[#666]">
            {currentSection.label}
          </div>
        </div>
      )}
    </>
  );
}
