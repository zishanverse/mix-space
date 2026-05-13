/**
 * Text Reveal Section Content Data
 * All text, client logos, and configuration for the text-reveal section
 */

export interface TextRevealContent {
  // Main text with scroll reveal
  text: {
    content: string;
    ariaLabel: string;
    initialColor: string;
    revealedColor: string;
    highlightedWords: string[]; // Words that highlight first/brighter
    highlightColor: string;
    defaultMaxWidth: string;
  };

  // Taglines instead of logos
  taglines: {
    items: {
      id: string;
      title: string;
      subtitle: string;
    }[];
  };

  // Decorative elements
  decoration: {
    dotSize: string;
    dotColor: string;
  };

  // Animation settings
  animation: {
    scrollStart: string;
    scrollEnd: string;
    scrub: number | boolean;
    containerDelay: number;
    containerDuration: number;
    highlightDelay: number;
  };
}

export const textRevealContent: TextRevealContent = {
  text: {
    content: "We turn disruptive ideas into category defining companies.",
    ariaLabel: "We turn disruptive ideas into category defining companies",
    initialColor: "#888",
    revealedColor: "#ffffff",
    highlightedWords: ["disruptive", "category", "defining"], // Words that highlight first/brighter
    highlightColor: "#ffffff",
    defaultMaxWidth: "900px",
  },

  taglines: {
    items: [
      { id: "01", title: "Design", subtitle: "Brand Identities & Experiences" },
      { id: "02", title: "Marketing", subtitle: "Growth, Search & Strategy" },
      { id: "03", title: "Development", subtitle: "High-Perf Web & Digital Tech" },
    ],
  },

  decoration: {
    dotSize: "8px",
    dotColor: "#ffffff",
  },

  animation: {
    scrollStart: "top 92%",
    scrollEnd: "bottom 50%",
    scrub: 1,
    containerDelay: 0.3,
    containerDuration: 1.2,
    highlightDelay: 0.05,
  },
} as const;

export type TextRevealContentType = typeof textRevealContent;
