import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { HeroesSection } from "@/components/HeroesSection";
import { VillainSection } from "@/components/VillainSection";
import { TrialsSection } from "@/components/TrialsSection";
import { MechanicsSection } from "@/components/MechanicsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StorySection />
      <HeroesSection />
      <VillainSection />
      <TrialsSection />
      <MechanicsSection />
      
      {/* Brand new sections filling the space! */}
      <FAQSection />
      <CTASection />
      
      <Footer />
    </main>
  );
}