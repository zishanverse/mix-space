/**
 * Hero Section Content Data
 * All text, links, and configuration for the hero component
 * Based on noir.io hero section
 */

export interface HeroContent {
  // Main headline - split into two lines
  headline: {
    line1: string;
    line2: string;
    ariaLabel: string;
  };

  // Description text (on the right side in image)
  description: {
    text: string;
    ariaLabel: string;
  };

  // CTA button (in navbar, top-right)
  ctaButton: {
    label: string;
    href: string;
    ariaLabel: string;
  };

  // Video background
  video: {
    src: string;
    alt: string;
    fallbackColor: string;
  };

  // Animation timing
  animation: {
    line1Delay: number;
    line2Delay: number;
    descriptionDelay: number;
    thumbnailDelay: number;
    duration: number;
  };
}

export const heroContent: HeroContent = {
  headline: {
    line1: "Creating brands",
    line2: "of the future",
    ariaLabel: "Creating brands of the future",
  },

  description: {
    text: "We are a global branding & design studio, working with founders to create brands, products & digital experiences for the new internet.",
    ariaLabel: "We are a global branding and design studio, working with founders to create brands, products and digital experiences for the new internet",
  },

  ctaButton: {
    label: "Work with us",
    href: "#contact",
    ariaLabel: "Work with us - Get in touch",
  },

  video: {
    src: "/assets/video/3197cdd6-1ef0a0b9.mp4",
    alt: "Abstract dark video background with futuristic visual effects",
    fallbackColor: "#0a0a0a",
  },

  animation: {
    line1Delay: 0.8,
    line2Delay: 1.0,
    descriptionDelay: 1.5,
    thumbnailDelay: 2.0,
    duration: 0.8,
  },
} as const;

export type HeroContentType = typeof heroContent;
