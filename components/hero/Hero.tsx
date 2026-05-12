"use client";

import { VideoBackground } from "./VideoBackground";
import { HeroText } from "./HeroText";
import { HeroDescription } from "./HeroDescription";
import { HeroThumbnail } from "./HeroThumbnail";
import { heroContent } from "@/content/hero";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end  overflow-hidden"
      style={{ background: heroContent.video.fallbackColor }}
    >
      {/* Video Background */}
      <VideoBackground />

      {/* Content Container */}
      <div className="relative flex flex-col justify-center md:items-center z-10 mx-auto min-h-screen w-full px-6 lg:px-12 pt-32 pb-44 md:py-0">
        {/* Description text */}
        <HeroDescription />

        {/* Main Headline */}
        <HeroText />

        {/* Video Thumbnail */}
        <HeroThumbnail />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default Hero;
