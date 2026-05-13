"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer/Footer";
import { StudioHero, StudioManifesto, StudioReel, StudioAbout, StudioClients, StudioServices, StudioResults, StudioStatement, StudioTeam, StudioModel } from "@/components/studio";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-brand/30">
      <Navbar />
      
      <StudioHero />

      <StudioManifesto />

      <StudioReel />

      <StudioAbout />

      <StudioClients />

      <StudioServices />

      <StudioResults />

      <StudioStatement />

      <StudioTeam />

      <StudioModel />
      
      <Footer />
    </main>
  );
}
