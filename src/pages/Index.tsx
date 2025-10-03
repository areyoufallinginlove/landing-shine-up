import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { IntroSequence } from "@/components/IntroSequence";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("hasSeenIntro");
    if (seen) {
      setShowIntro(false);
      setHasSeenIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
    setHasSeenIntro(true);
  };

  if (showIntro && !hasSeenIntro) {
    return <IntroSequence onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DashboardShowcase />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
