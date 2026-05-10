"use client";

interface SectionLabelsProps {
  index: string;
  title: string;
  indexColor?: string;
  titleColor?: string;
  fontSize?: string;
  letterSpacing?: string;
  className?: string;
}

export function SectionLabels({
  index,
  title,
  indexColor = "#555",
  titleColor = "#555",
  fontSize = "11px",
  letterSpacing = "0.2em",
  className = "",
}: SectionLabelsProps) {
  return (
    <div
      className={`relative w-full flex items-center border-b border-white/15 pb-4 mb-12 ${className}`}
    >
      {/* Far-left: [02] */}
      <span
        className="uppercase"
        style={{ color: indexColor, fontSize, letterSpacing }}
      >
        {index}
      </span>

      {/* Centered: OUR CAPABILITIES */}
      <span
        className="uppercase absolute left-1/2 -translate-x-1/2"
        style={{ color: titleColor, fontSize, letterSpacing }}
      >
        {title}
      </span>
    </div>
  );
}

export default SectionLabels;