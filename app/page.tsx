"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CapabilityDisplay } from "@/components/CapabilityDisplay";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { useScrollRevealText } from "@/hooks/useScrollRevealText";
import { useParallaxText } from "@/hooks/useParallaxText";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

// Logo components
function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.5" y="2.5" width="43" height="43" rx="4" fill="#000" stroke="rgba(255,255,255,0.28)" />
      <path d="M10 9L36.5 35.5" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18.5 3.5 21V6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v7A2.5 2.5 0 0 1 18 15.5H7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Client logos
const clientLogos = [
  { name: "MoonPay", text: "MoonPay" },
  { name: "Nike", text: "Nike" },
  { name: "Animoca", text: "Animoca Brands" },
  { name: "Biconomy", text: "Biconomy" },
  { name: "Rayls", text: "Rayls" },
  { name: "Cartesi", text: "Cartesi" },
];

// Investor logos
const investorLogos1 = [
  { name: "Animoca", text: "Animoca Brands" },
  { name: "Paradigm", text: "Paradigm" },
  { name: "Twitch", text: "Twitch" },
  { name: "YouTube", text: "YouTube" },
  { name: "Accenture", text: "Accenture" },
  { name: "Framev", text: "Framev[entures]" },
];

const investorLogos2 = [
  { name: "Binance", text: "Binance" },
  { name: "Protocol Labs", text: "Protocol Labs" },
  { name: "Sequoia", text: "Sequoia" },
  { name: "Solana", text: "Solana" },
  { name: "LayerZero", text: "LayerZero" },
];

// Work cards
const workCards = [
  {
    title: "Numbers",
    text: "Provenance infrastructure for humans and AI",
    category: "AI",
    visualClass: "work-card-numbers",
  },
  {
    title: "Crypto Autos",
    text: "Redefining access to luxury cars",
    category: "Web3",
    visualClass: "work-card-crypto-autos",
  },
  {
    title: "Verse World",
    text: "The internet of reality",
    category: "Metaverse",
    visualClass: "work-card-verse-world",
  },
];

// Service cards
const serviceCards = [
  {
    title: "Seed Sprint",
    description:
      "Our Seed Sprints are 1-month projects designed to create a brand, deck and website quickly and efficiently for early stage startups.",
    visualClass: "service-card-seed-sprint",
  },
  {
    title: "Product Sprint",
    description:
      "Perfect for those looking to test and produce early stage MVP of their product. product workshop, ux/ui design figma MVP design and prototype.",
    visualClass: "service-card-product-sprint",
  },
  {
    title: "Brand Creation",
    description:
      "Our best-seller. Our full send brand package aimed at bringing your idea to life. Everything you need to create your brand, product and digital experience.",
    visualClass: "service-card-brand-creation",
  },
  {
    title: "Transformation",
    description:
      "Brand Transformation is for companies who are looking to reposition due to market conditions or ongoing growth. This encompasses our key disciplines.",
    visualClass: "service-card-transformation",
  },
  {
    title: "Subscription",
    description:
      "Design Subscription is our way of collaborating long-term with clients acting as their extended team to ensure brand consistency & growth.",
    visualClass: "service-card-subscription",
  },
  {
    title: "Ventures",
    description:
      "We support founders with financial and creative capital, offsetting costs through share or token equity and access to our global venture network, resources and advisory support.",
    visualClass: "service-card-ventures",
  },
];

// Testimonials
const testimonials = [
  {
    name: "Ahmed Al-Balaghi",
    company: "Biconomy",
    quote:
      "Partnering with Noir on our new direction and website has transformed the Biconomy brand. The team brought visionary insights to life through design and storytelling and seamlessly executed our digital experience. Our brand feels supercharged and ready for our next stage of growth.",
  },
  {
    name: "Reggie Raghav",
    company: "Hydro",
    quote:
      "Noir have been instrumental in consolidating our vision for Hydro. They have built the brand from the ground up, deeply integrating into our team to create a powerful mission led strategy, create beautiful branding and working meticulously on every single detail of our user experience design journey for our application.",
  },
  {
    name: "Andy Morris",
    company: "Skyscanner",
    quote:
      "Noir have so much ambition and were extremely efficient on the project, always available and will challenge the brief to get the best results. Anthony and his team really immerse themselves into our industry, understanding of future trends and website.",
  },
];

// News cards
const newsCards = [
  {
    badge: "Founder Stories",
    title: "Lumen — Behind the Brand",
    visualClass: "news-card-1",
  },
  {
    badge: "Founder Stories",
    title: "Flashback — Behind the Brand",
    visualClass: "news-card-2",
  },
  {
    badge: "Project Overview",
    title: "Integrate crypto payments conveniently",
    visualClass: "news-card-3",
  },
];

// Sections
function TextRevealSection() {
  const textRef = useRef<HTMLDivElement>(null);
  useScrollRevealText(textRef);

  const logosRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(logosRef);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div
        ref={textRef}
        className="max-w-[900px] text-center text-[clamp(36px,5vw,64px)] font-normal leading-[1.2] text-[#333]"
      >
        We turn disruptive ideas into category defining companies.
      </div>

      <div ref={logosRef} className="mt-16 flex w-full items-center justify-center gap-12 px-8">
        {clientLogos.map((logo) => (
          <span
            key={logo.name}
            className="text-[15px] font-medium text-white/90"
          >
            {logo.text}
          </span>
        ))}
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
    </section>
  );
}

function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  useScrollRevealText(textRef);

  return (
    <section
      id="about-noir"
      className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute left-8 top-10 text-[11px] uppercase tracking-[0.2em] text-[#555] sm:left-12 lg:left-16">
        [01]
      </div>
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-[#555]">
        ABOUT NOIR
      </div>

      <div
        ref={textRef}
        className="max-w-[95%] px-[5%] text-center text-[clamp(32px,4.5vw,58px)] font-normal leading-[1.2] text-[#222]"
      >
        Since 2016 we have helped technology brands design, build and launch
        products across different themes of the new Internet.
      </div>

      <a
        href="#"
        className="absolute bottom-20 left-8 border-b border-white text-[16px] text-white transition-opacity hover:opacity-60 sm:left-12 lg:left-16"
      >
        About us
      </a>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-[#555]">
        [02] OUR CAPABILITIES
      </div>
    </section>
  );
}

function RecentWorkSection() {
  const textRef = useRef<HTMLDivElement>(null);
  useScrollRevealText(textRef);

  return (
    <section
      id="recent-work"
      className="relative flex min-h-screen flex-col items-center justify-center bg-black px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute left-8 top-10 text-[11px] uppercase tracking-[0.2em] text-[#555] sm:left-12 lg:left-16">
        [03]
      </div>
      <div className="absolute left-1/2 top-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.2em] text-[#555]">
        RECENT WORK
      </div>

      <div
        ref={textRef}
        className="w-full px-[5%] text-center text-[clamp(28px,4vw,56px)] font-normal leading-[1.25] text-[#333]"
      >
        We build transformative brands through tailored strategies, visual
        experimentation and user experience design by blending storytelling,
        technology & design.
      </div>

      <div className="h-2 w-2 rounded-full bg-white" />
    </section>
  );
}

function WorkCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(containerRef, { stagger: 0.15 });

  return (
    <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div ref={containerRef} className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2">
        {workCards.map((card) => (
          <div
            key={card.title}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className={`aspect-video w-full ${card.visualClass} relative transition-transform duration-300 group-hover:scale-[1.01]`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex h-20 w-20 scale-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-100">
                  <span className="text-[14px]">View</span>
                </div>
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white backdrop-blur-sm">
                {card.category}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-[20px] font-normal text-white">
                {card.title} — {card.text}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block border-b border-white text-[16px] text-white transition-opacity hover:opacity-60"
        >
          View all work
        </a>
      </div>
    </section>
  );
}

function ParallaxTextSection({
  text,
  direction,
}: {
  text: string;
  direction: "left" | "right";
}) {
  const textRef = useRef<HTMLDivElement>(null);
  useParallaxText(textRef, { direction, magnitude: 600 });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      <div
        ref={textRef}
        className="whitespace-nowrap text-[clamp(80px,12vw,180px)] font-normal text-white"
      >
        {text}
      </div>
    </section>
  );
}

function SignatureEngagementsSection() {
  const textRef = useRef<HTMLDivElement>(null);
  useScrollRevealText(textRef);

  const cardsRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(cardsRef, { stagger: 0.15 });

  return (
    <section className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mb-16 text-center">
        <div className="text-[11px] uppercase tracking-[0.2em] text-[#555]">
          SIGNATURE ENGAGEMENTS
        </div>
        <div
          ref={textRef}
          className="mt-8 max-w-5xl px-4 text-center text-[clamp(24px,3.5vw,50px)] font-normal leading-[1.2] text-[#333]"
        >
          We are a specialist, agile team built for sprint-based projects and
          long-term partnerships. We offer six key signature engagements tailored
          to key inflection points within your business.
        </div>
      </div>

      <div
        ref={cardsRef}
        className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {serviceCards.map((card) => (
          <div
            key={card.title}
            className="overflow-hidden rounded-xl"
          >
            <div className={`aspect-[3/2] w-full ${card.visualClass}`} />
            <div className="mt-4">
              <h3 className="text-[24px] font-normal text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-[15px] text-[#888]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InvestorsSection() {
  const textRef = useRef<HTMLDivElement>(null);
  useScrollRevealText(textRef);

  return (
    <section className="bg-black px-4 py-32 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div
          ref={textRef}
          className="text-[clamp(28px,4vw,52px)] font-normal leading-[1.2]"
        >
          <div className="text-white">Noir projects raised from</div>
          <div className="text-[#444]">world-class investors.</div>
        </div>
      </div>

      <div className="space-y-5">
        <InfiniteMarquee
          items={investorLogos1.map((logo) => (
            <span key={logo.name} className="text-[15px] text-white/90">
              {logo.text}
            </span>
          ))}
          direction="left"
          speed={40}
        />
        <InfiniteMarquee
          items={investorLogos2.map((logo) => (
            <span key={logo.name} className="text-[15px] text-white/90">
              {logo.text}
            </span>
          ))}
          direction="right"
          speed={40}
        />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(containerRef);

  return (
    <section
      id="testimonials"
      className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto flex max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`relative flex-1 px-4 ${
              index > 0 ? "border-l border-white/10" : ""
            }`}
          >
            <div className="mb-6">
              <span className="text-[15px] font-medium text-white">
                {testimonial.company}
              </span>
            </div>
            <div className={`founder-photo-${testimonial.name.toLowerCase().split(" ")[0]} mb-4 h-[160px] w-[160px] rounded-xl`} />
            <h4 className="text-[18px] font-medium text-white">
              {testimonial.name}
            </h4>
            <p className="mt-4 text-[15px] leading-[1.7] text-white">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-right">
        <span className="text-[13px] text-[#666]">1 — 6</span>
      </div>
    </section>
  );
}

function NewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(containerRef, { stagger: 0.15 });

  return (
    <section id="news" className="bg-black px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div ref={containerRef} className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
        {newsCards.map((card) => (
          <div key={card.title} className="relative overflow-hidden rounded-2xl">
            <div className={`aspect-[2/3] w-full ${card.visualClass}`} />
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-black/60 px-4 py-1.5 text-[12px] text-white backdrop-blur-sm">
                {card.badge}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-[18px] font-normal text-white">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="max-w-[700px] text-center text-[clamp(28px,4vw,52px)] font-normal text-white">
          Get in touch to discuss your project with our team
        </h2>
        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-4 rounded-full border-2 border-white/40 px-10 py-5 text-[18px] text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span>Book a call today</span>
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Subscribe row */}
        <div className="mb-16 flex flex-col items-center gap-6 sm:flex-row sm:items-end">
          <span className="text-[28px] text-white">Subscribe to us</span>
          <div className="flex-1 border-t border-white/20" />
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-full border border-white/20 bg-[#111] px-6 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
            />
            <button className="rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-opacity hover:opacity-90">
              Submit
            </button>
          </div>
        </div>

        {/* Large brand name */}
        <div className="mb-16 overflow-hidden">
          <h2 className="text-center text-[clamp(80px,14vw,180px)] font-bold leading-none tracking-tighter text-white">
            NOIR STUDIO
          </h2>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-[13px] sm:flex-row">
          <span className="text-[#555]">© 2016 — 2025</span>
          <span className="text-[#555] tracking-wider">LONDON — DUBAI</span>
          <div className="flex items-center gap-6 tracking-wider">
            <a href="#" className="flex items-center gap-2 text-white transition-opacity hover:opacity-60">
              <span className="h-1 w-1 rounded-full bg-white" />
              X.COM
            </a>
            <a href="#" className="flex items-center gap-2 text-white transition-opacity hover:opacity-60">
              <span className="h-1 w-1 rounded-full bg-white" />
              LINKEDIN
            </a>
            <a href="#" className="flex items-center gap-2 text-white transition-opacity hover:opacity-60">
              <span className="h-1 w-1 rounded-full bg-white" />
              INSTAGRAM
            </a>
            <a href="#" className="flex items-center gap-2 text-white transition-opacity hover:opacity-60">
              <span className="h-1 w-1 rounded-full bg-white" />
              TELEGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main id="top">
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-end pb-20 px-4 sm:px-6 lg:px-8">
          <div className="hero-video-bg" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            {/* Top right text block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute right-0 top-[-60vh] max-w-[320px] text-[15px] leading-[1.6] text-white lg:right-12"
            >
              We are a global branding & design studio, working with founders to
              create brands, products & digital experiences for the new internet.
            </motion.div>

            {/* Bottom center hero text */}
            <div className="mb-12 ml-0 lg:ml-[25%]">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-[clamp(60px,8vw,110px)] font-normal leading-[1] text-white"
              >
                Creating brands
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-[clamp(60px,8vw,110px)] font-normal leading-[1] text-white"
              >
                of the future
              </motion.h1>
            </div>

            {/* Bottom left video thumbnails */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 grid grid-cols-2 gap-1 lg:left-12"
            >
              <div className="hero-thumbnail-1" />
              <div className="hero-thumbnail-2" />
              <div className="hero-thumbnail-3 relative flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-4 w-4 text-black"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="hero-thumbnail-4" />
            </motion.div>
          </div>
        </section>

        {/* Text Reveal + Client Logos */}
        <TextRevealSection />

        {/* About Noir */}
        <AboutSection />

        {/* Our Capabilities */}
        <div id="capabilities">
          <CapabilityDisplay />
        </div>

        {/* Recent Work */}
        <RecentWorkSection />

        {/* Work Cards Grid */}
        <div id="work">
          <WorkCardsSection />
        </div>

        {/* First Parallax Text: From Pre-Seed */}
        <ParallaxTextSection text="From Pre-Seed" direction="left" />

        {/* Signature Engagements */}
        <SignatureEngagementsSection />

        {/* Investors Marquee */}
        <InvestorsSection />

        {/* Second Parallax Text: Hear from founders */}
        <ParallaxTextSection text="Hear from founders" direction="right" />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Third Parallax Text: Research & Work */}
        <ParallaxTextSection text="Research & Work" direction="left" />

        {/* News Section */}
        <NewsSection />

        {/* CTA */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
