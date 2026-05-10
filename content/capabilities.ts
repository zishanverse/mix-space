/**
 * Our Capabilities Section Content Data
 * All capability data, visual configs, and animation settings
 */

export interface Capability {
  id: string;
  name: string;
  visualClass: string;
  backgroundColor: string;
  description?: string;
}

export interface CapabilitiesContent {
  // Section label
  label: {
    index: string;
    title: string;
    indexColor: string;
    titleColor: string;
    fontSize: string;
    letterSpacing: string;
  };

  // Capabilities list
  capabilities: Capability[];

  // Visual display area
  visual: {
    aspectRatio: string;
    maxWidth: string;
    borderRadius: string;
    transitionDuration: string;
    defaultCapability: string;
  };

  // Animation settings
  animation: {
    stagger: number;
    startOffset: string;
    startOpacity: number;
    startY: string;
    triggerStart: string;
  };
}

export const capabilitiesContent: CapabilitiesContent = {
  label: {
    index: "[02]",
    title: "OUR CAPABILITIES",
    indexColor: "#555",
    titleColor: "#555",
    fontSize: "11px",
    letterSpacing: "0.2em",
  },

  capabilities: [
    {
      id: "brand-strategy",
      name: "Brand Strategy",
      visualClass: "capability-visual-brand-strategy",
      backgroundColor: "#1a1a1a",
    },
    {
      id: "brand-identity",
      name: "Brand Identity",
      visualClass: "capability-visual-brand-identity",
      backgroundColor: "#111",
    },
    {
      id: "product-design",
      name: "Product Design",
      visualClass: "capability-visual-product-design",
      backgroundColor: "#5B21D4", // Purple - DEFAULT
    },
    {
      id: "ux-ui",
      name: "UX / UI Design",
      visualClass: "capability-visual-ux-ui",
      backgroundColor: "#1a1a2e",
    },
    {
      id: "web-dev",
      name: "Website Development",
      visualClass: "capability-visual-web-dev",
      backgroundColor: "#0d1117",
    },
    {
      id: "brand-video",
      name: "Brand Video",
      visualClass: "capability-visual-brand-video",
      backgroundColor: "#1a0a00",
    },
    {
      id: "pitch-deck",
      name: "Pitch Deck",
      visualClass: "capability-visual-pitch-deck",
      backgroundColor: "#1a0e08",
    },
    {
      id: "content-creation",
      name: "Content Creation",
      visualClass: "capability-visual-content-creation",
      backgroundColor: "#0a1a0a",
    },
    {
      id: "paid-social",
      name: "Paid Social",
      visualClass: "capability-visual-paid-social",
      backgroundColor: "#1a1015",
    },
    {
      id: "advertising",
      name: "Advertising",
      visualClass: "capability-visual-advertising",
      backgroundColor: "#0d0a0a",
    },
  ],

  visual: {
    aspectRatio: "4/3",
    maxWidth: "560px",
    borderRadius: "16px",
    transitionDuration: "0.3s",
    defaultCapability: "product-design",
  },

  animation: {
    stagger: 0.1,
    startOffset: "20px",
    startOpacity: 0,
    startY: "20px",
    triggerStart: "top 80%",
  },
} as const;

export type CapabilitiesContentType = typeof capabilitiesContent;
