/**
 * Text Reveal Section Content Data
 * All text, client logos, and configuration for the text-reveal section
 */

export interface ClientLogo {
  name: string;
  displayName: string;
}

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

  // Client logos
  logos: {
    items: ClientLogo[];
    height: string;
    width: string;
    opacity: number;
    spacing: string;
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
    logoDelay: number;
    logoDuration: number;
    highlightDelay: number;
  };
}

export const textRevealContent: TextRevealContent = {
  text: {
    content: "We turn disruptive ideas into category defining companies.",
    ariaLabel: "We turn disruptive ideas into category defining companies",
    initialColor: "#333",
    revealedColor: "#ffffff",
    highlightedWords: ["disruptive", "category", "defining"], // Words that highlight first/brighter
    highlightColor: "#ffffff",
    defaultMaxWidth: "900px",
  },

  logos: {
    items: [
      { name: "moonpay", displayName: "MoonPay" },
      { name: "nike", displayName: "Nike" },
      { name: "animoca", displayName: "Animoca Brands" },
      { name: "biconomy", displayName: "Biconomy" },
      { name: "rayls", displayName: "Rayls" },
      { name: "cartesi", displayName: "Cartesi" },
    ],
    height: "28px",
    width: "auto",
    opacity: 0.9,
    spacing: "3rem",
  },

  decoration: {
    dotSize: "8px",
    dotColor: "#ffffff",
  },

  animation: {
    scrollStart: "top 80%",
    scrollEnd: "bottom 20%",
    scrub: 1,
    logoDelay: 0.3,
    logoDuration: 0.8,
    highlightDelay: 0.05,
  },
} as const;

export type TextRevealContentType = typeof textRevealContent;
