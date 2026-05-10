/**
 * Signature Engagements Section — content data
 */

export interface EngagementItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface SignatureEngagementsContent {
  label: { index: string; title: string };
  headline: {
    segments: { text: string; highlight: boolean }[];
  };
  engagements: EngagementItem[];
}

export const signatureEngagementsContent: SignatureEngagementsContent = {
  label: {
    index: "[04]",
    title: "SIGNATURE ENGAGEMENTS",
  },

  headline: {
    segments: [
      { text: "We are a specialist, ", highlight: false },
      { text: "agile team", highlight: true },
      { text: " built for ", highlight: false },
      { text: "sprint-based projects", highlight: true },
      { text: " and ", highlight: false },
      { text: "long-term partnerships.", highlight: true },
      { text: " We offer ", highlight: false },
      { text: "six key signature engagements", highlight: true },
      { text: " tailored to key ", highlight: false },
      { text: "inflection points within your business.", highlight: false }, // Using highlight false as per subagent
    ],
  },

  engagements: [
    {
      id: "seed-sprint",
      title: "Seed Sprint",
      description: "Our Seed Sprints are 1-month projects designed to create a brand, deck and website quickly and efficiently for early stage startups.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4125a3d846bc212f309_Seed%20Sprint.webp",
    },
    {
      id: "product-sprint",
      title: "Product Sprint",
      description: "Perfect for those looking to test and produce early stage MVP of their product. product workshop, ux/ui design figma MVP design and prototype.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4128b893e04aebab7ff_Product%20Sprint.webp",
    },
    {
      id: "brand-creation",
      title: "Brand Creation",
      description: "Our best-seller. Our full send brand package aimed at bringing your idea to life. Everything you need to create your brand, product and digital experience.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412bd088e4db8b9f704_Brand%20Creation.webp",
    },
    {
      id: "transformation",
      title: "Transformation",
      description: "Brand Transformation is for companies who are looking to reposition due to market conditions or ongoing growth. This encompasses our key disciplines.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
    {
      id: "subscription",
      title: "Subscription",
      description: "Design Subscription is our way of collaborating long-term with clients acting as their extended team to ensure brand consistency & growth.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
    {
      id: "ventures",
      title: "Ventures",
      description: "We support founders with financial and creative capital, offsetting costs through share or token equity and access to our global venture network, resources and advisory support.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412f3413634513ac022_Ventures.webp",
    },
  ],
};
