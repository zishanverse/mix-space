/**
 * About Us Section Content Data
 * All text, labels, and configuration for the About Us section
 */

export interface AboutUsContent {
  // Section labels
  labels: {
    index: string;
    title: string;
    indexColor: string;
    titleColor: string;
    fontSize: string;
    letterSpacing: string;
  };

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

  // About us link
  link: {
    label: string;
    href: string;
    ariaLabel: string;
    position: string;
    fontSize: string;
    hoverOpacity: number;
  };

  // Next section transition
  nextSection: {
    index: string;
    title: string;
  };

  // Animation settings
  animation: {
    scrollStart: string;
    scrollEnd: string;
    scrub: number | boolean;
    highlightDelay: number;
  };
}

export const aboutUsContent: AboutUsContent = {
  labels: {
    index: "[01]",
    title: "ABOUT CODERS EXPRESS",
    indexColor: "#555",
    titleColor: "#555",
    fontSize: "11px",
    letterSpacing: "0.2em",
  },

  text: {
    content: "We help businesses grow online with our professional services through expert social media, SEO, web development, and digital ads and Influencer Marketing.",
    ariaLabel: "We help businesses grow online with our professional services through expert social media, SEO, web development, and digital ads and Influencer Marketing.",
    initialColor: "#222",
    revealedColor: "#ffffff",
    highlightedWords: ["grow", "online", "social", "media,", "SEO,", "web", "development,", "digital", "ads."],
    highlightColor: "#ffffff",
    defaultMaxWidth: "4xl",
  },

  link: {
    label: "About us",
    href: "/about-us",
    ariaLabel: "About us - Learn more about Coders Express",
    position: "bottom-left",
    fontSize: "16px",
    hoverOpacity: 0.6,
  },

  nextSection: {
    index: "[02]",
    title: "OUR CAPABILITIES",
  },

  animation: {
    scrollStart: "top 80%",
    scrollEnd: "bottom 20%",
    scrub: 1,
    highlightDelay: 0.1,
  },
} as const;

export type AboutUsContentType = typeof aboutUsContent;
