/**
 * Recent Work Section — content data
 */

export interface WorkProject {
  id: string;
  name: string;
  tag: string;
  image: string;
  /** "wide" = 2-col span, "tall" = taller card */
  size: "wide" | "normal" | "tall";
  year: string;
}

export interface RecentWorkContent {
  label: { index: string; title: string };
  headline: {
    /** Each segment: text + whether it's highlighted (white+bold) */
    segments: { text: string; highlight: boolean }[];
  };
  projects: WorkProject[];
}

export const recentWorkContent: RecentWorkContent = {
  label: {
    index: "[03]",
    title: "RECENT WORK",
  },

  headline: {
    segments: [
      { text: "We build transformative brands through ", highlight: false },
      { text: "tailored strategies", highlight: true },
      { text: ", ", highlight: false },
      { text: "visual experimentation", highlight: true },
      { text: " and ", highlight: false },
      { text: "user experience design", highlight: true },
      { text: " by blending storytelling, technology & design.", highlight: false },
    ],
  },

  projects: [
    {
      id: "numbers-ai",
      name: "Numbers AI",
      tag: "AI",
      image: "/images/recent-work/numbers-ai.png",
      size: "normal",
      year: "2024",
    },
    {
      id: "crypto-autos",
      name: "Crypto Autos",
      tag: "Web3",
      image: "/images/recent-work/crypto-autos.png",
      size: "normal",
      year: "2024",
    },
    {
      id: "moonpay",
      name: "MoonPay × NYFW",
      tag: "Brand",
      image: "/images/recent-work/moonpay.png",
      size: "wide",
      year: "2023",
    },
    {
      id: "verse-world",
      name: "Verse World",
      tag: "Gaming",
      image: "/images/recent-work/verse-world.png",
      size: "normal",
      year: "2024",
    },
    {
      id: "brand-identity",
      name: "Aurora Identity",
      tag: "Branding",
      image: "/images/recent-work/brand-identity.png",
      size: "normal",
      year: "2023",
    },
  ],
};
