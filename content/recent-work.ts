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
  videoSrc?: string;
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
      { text: "We craft impactful digital experiences through ", highlight: false },
      { text: "strategic marketing", highlight: true },
      { text: ", ", highlight: false },
      { text: "visual storytelling", highlight: true },
      { text: " and ", highlight: false },
      { text: "performance- driven design", highlight: true },
      { text: " by blending creativity, technology & brand innovation.", highlight: false },
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
      videoSrc: "https://download-video-ak.vimeocdn.com/v3-1/playback/c0af5b29-ca9d-4163-9c67-4d1cf38df663/d06ea0e3-87fd849e?__token__=st=1778415840~exp=1778419440~acl=%2Fv3-1%2Fplayback%2Fc0af5b29-ca9d-4163-9c67-4d1cf38df663%2Fd06ea0e3-87fd849e%2A~hmac=874902a696720cd1be594f234d6e9bfd94462a0f714ed2e1d7d34896a0190a46&r=dXMtY2VudHJhbDE%3D",
    },
    {
      id: "crypto-autos",
      name: "Crypto Autos",
      tag: "Web3",
      image: "/images/recent-work/crypto-autos.png",
      size: "normal",
      year: "2024",
      videoSrc: "https://download-video-ak.vimeocdn.com/v3-1/playback/c2b2b0a8-064f-4259-8ce4-4b4f24ba94e7/8bed3c2c?__token__=st=1778415935~exp=1778419535~acl=%2Fv3-1%2Fplayback%2Fc2b2b0a8-064f-4259-8ce4-4b4f24ba94e7%2F8bed3c2c%2A~hmac=10f8e88a0964179a0cb12af178e8c387df1e445668c3aa4d79e291f4b23a1b66&r=dXMtY2VudHJhbDE%3D",
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
      videoSrc: "https://download-video-ak.vimeocdn.com/v3-1/playback/b7225624-de68-4110-b58c-49843009a33a/0e46efd7?__token__=st=1778415986~exp=1778419586~acl=%2Fv3-1%2Fplayback%2Fb7225624-de68-4110-b58c-49843009a33a%2F0e46efd7%2A~hmac=487121ea51b697c9c455cb31d671acda8e730d3ce536500b94b77fa04797b950&r=dXMtd2VzdDE%3D",
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
