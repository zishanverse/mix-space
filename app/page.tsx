"use client";

import { Hero } from "@/components/hero";
import { TextRevealSection } from "@/components/text-reveal";
import { AboutUsSection } from "@/components/about-us";
import { CapabilitiesSection, CapabilitiesMarquee } from "@/components/capabilities";
import { RecentWorkSection } from "@/components/recent-work";
//import { SignatureEngagementsSection } from "@/components/signature-engagements";
import { InvestorsSection } from "@/components/investors";
import { TestimonialsSection } from "@/components/testimonials";
//import { ResearchSection } from "@/components/research";
import { FAQSection } from "@/components/faq";
import { BookCallSection } from "@/components/book-call";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Hero />

      {/* Text Reveal Section - Custom highlighted words */}
      <TextRevealSection
        highlightedWords={["disruptive", "category", "defining"]} // Only highlight these specific words
        enableHighlight={true} // Turn on word highlighting
      />

      {/* About Us Section - Custom highlighted words */}
      <AboutUsSection
        highlightedWords={["grow", "online", "social", "media,", "SEO,", "web", "development,", "digital", "ads."]} // Highlight core services
        enableHighlight={true} // Turn on word highlighting
      />

      {/* Our Capabilities Section */}
      <CapabilitiesSection />

      {/* Infinite Tags Marquee */}
      <CapabilitiesMarquee />

      {/* Recent Work Section [03] */}
      <RecentWorkSection />

      {/* Signature Engagements Section [04] */}
      {/* <SignatureEngagementsSection /> */}

      {/* Investors Marquee Section */}
      <InvestorsSection />

      {/* Founders Testimonials Slider */}
      <TestimonialsSection />

      {/* Research & Writings [05] */}
      {/* <ResearchSection /> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <BookCallSection />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
