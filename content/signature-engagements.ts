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
      { text: "a comprehensive suite of signature engagements", highlight: true },
      { text: " tailored to key ", highlight: false },
      { text: "inflection points within your business.", highlight: false },
    ],
  },

  engagements: [
    {
      id: "brand-strategy",
      title: "Brand Strategy",
      description: "Formulating strategic roadmap, vision, and values for enduring market dominance.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4125a3d846bc212f309_Seed%20Sprint.webp",
    },
    {
      id: "brand-identity-positioning",
      title: "Brand Identity & Positioning",
      description: "Designing visual identity systems and messaging that establishes resonant market placement.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4128b893e04aebab7ff_Product%20Sprint.webp",
    },
    {
      id: "ux-ui-design",
      title: "UX / UI Design",
      description: "Crafting beautiful digital interfaces that bridge user experience and commercial growth.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412bd088e4db8b9f704_Brand%20Creation.webp",
    },
    {
      id: "website-design-development",
      title: "Website Design & Development",
      description: "Building high-conversion, custom websites and high-performance digital platforms.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
    {
      id: "website-management",
      title: "Website Management",
      description: "Continuous optimization, scaling, and expert management to ensure reliable digital presence.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Developing multi-channel content roadmaps aimed at building long-term brand authority.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412f3413634513ac022_Ventures.webp",
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description: "Producing premium visual and interactive media content tailored for dynamic audience engagement.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4125a3d846bc212f309_Seed%20Sprint.webp",
    },
    {
      id: "product-shoot-photography",
      title: "Product Shoot & Photography",
      description: "High-production photography capturing high-end product detail to elevate ecommerce.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4128b893e04aebab7ff_Product%20Sprint.webp",
    },
    {
      id: "seo",
      title: "Search Engine Optimisation",
      description: "Improving platform performance and visibility with persistent optimization strategies.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412bd088e4db8b9f704_Brand%20Creation.webp",
    },
    {
      id: "social-media-management-marketing",
      title: "Social Media Management & Marketing",
      description: "Amplifying your message across global social channels to drive direct audience growth.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description: "Scaling your business with outcome-focused media strategies tied to real business metrics.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
    {
      id: "meta-ads",
      title: "Meta Ads",
      description: "Leveraging data-driven architectures to scale conversions across the full Meta ecosystem.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412f3413634513ac022_Ventures.webp",
    },
    {
      id: "lead-generation-campaigns",
      title: "Lead Generation Campaigns",
      description: "Building optimized client acquisition funnels engineered for direct B2B and DTC success.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4125a3d846bc212f309_Seed%20Sprint.webp",
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      description: "Partnering with key voices across sectors to create authentic, scalable endorsements.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a4128b893e04aebab7ff_Product%20Sprint.webp",
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      description: "Highly personalized lifecycle marketing sequences configured for maximum retention and conversions.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412bd088e4db8b9f704_Brand%20Creation.webp",
    },
    {
      id: "whatsapp-marketing",
      title: "WhatsApp Marketing",
      description: "Direct-response messaging pipelines ensuring immediate, highly engaging customer interaction.",
      image: "https://cdn.prod.website-files.com/66855a8fb48b8d40d74e0d01/6743a412991206e0aa2980ce_Transformation.webp",
    },
  ],
};
