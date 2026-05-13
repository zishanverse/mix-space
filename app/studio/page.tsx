"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer/Footer";
import { StudioHero } from "@/components/studio";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-brand/30">
      <Navbar />
      
      <StudioHero />
      
      <Footer />
    </main>
  );
}
