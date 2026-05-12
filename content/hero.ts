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
    thumbnailVideoSrc?: string;
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
    line1: "Powering Businesses",
    line2: "With Digital Innovation",
    ariaLabel: "Powering Businesses With Digital Innovation",
  },

  description: {
    text: "We build digital experiences that drive growth, visibility, and long-term success. From strategy to execution, we help businesses scale with powerful marketing, creative storytelling, and performance-driven solutions.",
    ariaLabel: "We build digital experiences that drive growth, visibility, and long-term success. From strategy to execution, we help businesses scale with powerful marketing, creative storytelling, and performance-driven solutions.",
  },

  ctaButton: {
    label: "Work with us",
    href: "#contact",
    ariaLabel: "Work with us - Get in touch",
  },

  video: {
    src: "https://res.cloudinary.com/deepcnbrz/video/upload/v1778419667/3197cdd6-1ef0a0b9_fianin.mp4",
    alt: "Abstract dark video background with futuristic visual effects",
    fallbackColor: "#0a0a0a",
    thumbnailVideoSrc: "https://download-video-ak.vimeocdn.com/v3-1/playback/7c226cf2-eeab-440c-adf8-96096152ce50/2686a785-727ee365?__token__=st=1778415294~exp=1778418894~acl=%2Fv3-1%2Fplayback%2F7c226cf2-eeab-440c-adf8-96096152ce50%2F2686a785-727ee365%2A~hmac=18a5a228971aba0ae3ebd8616ab0bbcf005a0f5b80acbbffbe8e3d171933b1e5&r=dXMtd2VzdDE%3D",
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
