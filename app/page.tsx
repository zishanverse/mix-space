"use client";

import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <Hero />

      {/* Placeholder for other sections - will be built in subsequent steps */}
      <section className="min-h-screen flex items-center justify-center bg-black px-6">
        <p className="text-white/60 text-lg">More sections coming soon...</p>
      </section>
    </div>
  );
}
