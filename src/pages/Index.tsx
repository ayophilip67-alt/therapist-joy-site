import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExpectSection from "@/components/ExpectSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeStrip
        items={[
          "YOUR CHRONIC PAIN SPECIALIST",
          "EVIDENCE-BASED CARE",
          "MOVE BETTER, LIVE BETTER",
        ]}
      />
      <AboutSection />
      <MarqueeStrip
        items={[
          "CHRONIC PAIN MANAGEMENT",
          "MANUAL THERAPY",
          "POST-SURGICAL REHAB",
          "DRY NEEDLING",
        ]}
        variant="light"
      />
      <ServicesSection />
      <ExpectSection />
      <MarqueeStrip
        items={[
          "CARE DESIGNED WITH YOU, NOT JUST FOR YOU",
          "I LISTEN FIRST. THEN I WORK.",
        ]}
      />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
