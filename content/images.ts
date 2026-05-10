/**
 * Images and Assets Content Data
 * All image URLs, video URLs, and placeholder configurations
 */

export interface AssetImage {
  id: string;
  type: "image" | "video" | "placeholder";
  src?: string;
  alt: string;
  className: string;
  // For placeholders
  bgColor?: string;
  // For videos
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const heroAssets = {
  // Hero background video placeholder
  video: {
    id: "hero-video-bg",
    type: "placeholder" as const,
    alt: "Hero background video",
    className: "hero-video-bg",
    bgColor: "#111",
  } as AssetImage,

  // Video thumbnails (2x2 grid)
  thumbnails: [
    {
      id: "hero-thumbnail-1",
      type: "placeholder" as const,
      alt: "Project thumbnail 1",
      className: "hero-thumbnail-1",
      bgColor: "#1a1a1a",
    },
    {
      id: "hero-thumbnail-2",
      type: "placeholder" as const,
      alt: "Project thumbnail 2",
      className: "hero-thumbnail-2",
      bgColor: "#1a1a1a",
    },
    {
      id: "hero-thumbnail-3",
      type: "placeholder" as const,
      alt: "Project thumbnail 3",
      className: "hero-thumbnail-3",
      bgColor: "#1a1a1a",
    },
    {
      id: "hero-thumbnail-4",
      type: "placeholder" as const,
      alt: "Project thumbnail 4",
      className: "hero-thumbnail-4",
      bgColor: "#1a1a1a",
    },
  ] as AssetImage[],
} as const;

export const capabilityAssets = {
  brandStrategy: {
    id: "capability-visual-brand-strategy",
    type: "placeholder" as const,
    alt: "Brand Strategy capability visual",
    className: "capability-visual-brand-strategy",
    bgColor: "#1a1a1a",
  } as AssetImage,
  brandIdentity: {
    id: "capability-visual-brand-identity",
    type: "placeholder" as const,
    alt: "Brand Identity capability visual",
    className: "capability-visual-brand-identity",
    bgColor: "#111",
  } as AssetImage,
  productDesign: {
    id: "capability-visual-product-design",
    type: "placeholder" as const,
    alt: "Product Design capability visual",
    className: "capability-visual-product-design",
    bgColor: "#5B21D4",
  } as AssetImage,
  uxUi: {
    id: "capability-visual-ux-ui",
    type: "placeholder" as const,
    alt: "UX/UI Design capability visual",
    className: "capability-visual-ux-ui",
    bgColor: "#1a1a2e",
  } as AssetImage,
  webDev: {
    id: "capability-visual-web-dev",
    type: "placeholder" as const,
    alt: "Website Development capability visual",
    className: "capability-visual-web-dev",
    bgColor: "#0d1117",
  } as AssetImage,
  brandVideo: {
    id: "capability-visual-brand-video",
    type: "placeholder" as const,
    alt: "Brand Video capability visual",
    className: "capability-visual-brand-video",
    bgColor: "#1a0a00",
  } as AssetImage,
} as const;

export const workAssets = {
  numbers: {
    id: "work-card-numbers",
    type: "placeholder" as const,
    alt: "Numbers project",
    className: "work-card-numbers",
    bgColor: "#D4C5A9",
  } as AssetImage,
  cryptoAutos: {
    id: "work-card-crypto-autos",
    type: "placeholder" as const,
    alt: "Crypto Autos project",
    className: "work-card-crypto-autos",
    bgColor: "#1a1a2a",
  } as AssetImage,
  verseWorld: {
    id: "work-card-verse-world",
    type: "placeholder" as const,
    alt: "Verse World project",
    className: "work-card-verse-world",
    bgColor: "#1a1a1a",
  } as AssetImage,
} as const;

export const serviceAssets = {
  seedSprint: {
    id: "service-card-seed-sprint",
    type: "placeholder" as const,
    alt: "Seed Sprint service",
    className: "service-card-seed-sprint",
    bgColor: "#1a0e08",
  } as AssetImage,
  productSprint: {
    id: "service-card-product-sprint",
    type: "placeholder" as const,
    alt: "Product Sprint service",
    className: "service-card-product-sprint",
    bgColor: "#0e0e0e",
  } as AssetImage,
  brandCreation: {
    id: "service-card-brand-creation",
    type: "placeholder" as const,
    alt: "Brand Creation service",
    className: "service-card-brand-creation",
    bgColor: "#1a1028",
  } as AssetImage,
  transformation: {
    id: "service-card-transformation",
    type: "placeholder" as const,
    alt: "Transformation service",
    className: "service-card-transformation",
    bgColor: "#0a0f0a",
  } as AssetImage,
  subscription: {
    id: "service-card-subscription",
    type: "placeholder" as const,
    alt: "Subscription service",
    className: "service-card-subscription",
    bgColor: "#0d0d0d",
  } as AssetImage,
  ventures: {
    id: "service-card-ventures",
    type: "placeholder" as const,
    alt: "Ventures service",
    className: "service-card-ventures",
    bgColor: "#1a1a2a",
  } as AssetImage,
} as const;

export const founderAssets = {
  ahmed: {
    id: "founder-photo-ahmed",
    type: "placeholder" as const,
    alt: "Ahmed Al-Balaghi - Founder of Biconomy",
    className: "founder-photo-ahmed",
    bgColor: "#1a1a1a",
  } as AssetImage,
  reggie: {
    id: "founder-photo-reggie",
    type: "placeholder" as const,
    alt: "Reggie Raghav - Founder of Hydro",
    className: "founder-photo-reggie",
    bgColor: "#1a1a1a",
  } as AssetImage,
  andy: {
    id: "founder-photo-andy",
    type: "placeholder" as const,
    alt: "Andy Morris - Skyscanner",
    className: "founder-photo-andy",
    bgColor: "#1a1a1a",
  } as AssetImage,
} as const;

export const newsAssets = {
  news1: {
    id: "news-card-1",
    type: "placeholder" as const,
    alt: "Founder Stories - Lumen",
    className: "news-card-1",
    bgColor: "#111",
  } as AssetImage,
  news2: {
    id: "news-card-2",
    type: "placeholder" as const,
    alt: "Founder Stories - Flashback",
    className: "news-card-2",
    bgColor: "#111",
  } as AssetImage,
  news3: {
    id: "news-card-3",
    type: "placeholder" as const,
    alt: "Project Overview - Crypto payments",
    className: "news-card-3",
    bgColor: "#111",
  } as AssetImage,
} as const;

// Client logos
export const clientLogos = [
  { name: "MoonPay", text: "MoonPay" },
  { name: "Nike", text: "Nike" },
  { name: "Animoca", text: "Animoca Brands" },
  { name: "Biconomy", text: "Biconomy" },
  { name: "Rayls", text: "Rayls" },
  { name: "Cartesi", text: "Cartesi" },
] as const;

// Investor logos
export const investorLogos1 = [
  { name: "Animoca", text: "Animoca Brands" },
  { name: "Paradigm", text: "Paradigm" },
  { name: "Twitch", text: "Twitch" },
  { name: "YouTube", text: "YouTube" },
  { name: "Accenture", text: "Accenture" },
  { name: "Framev", text: "Framev[entures]" },
] as const;

export const investorLogos2 = [
  { name: "Binance", text: "Binance" },
  { name: "Protocol Labs", text: "Protocol Labs" },
  { name: "Sequoia", text: "Sequoia" },
  { name: "Solana", text: "Solana" },
  { name: "LayerZero", text: "LayerZero" },
] as const;

// Social links
export const socialLinks = [
  { name: "X.COM", href: "#" },
  { name: "LINKEDIN", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "TELEGRAM", href: "#" },
] as const;

export const allAssets = {
  hero: heroAssets,
  capabilities: capabilityAssets,
  work: workAssets,
  services: serviceAssets,
  founders: founderAssets,
  news: newsAssets,
  clientLogos,
  investorLogos1,
  investorLogos2,
  socialLinks,
} as const;

export type AllAssets = typeof allAssets;
