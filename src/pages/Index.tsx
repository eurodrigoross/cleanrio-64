import HeroSectionModern from "@/components/HeroSectionModern";
import BenefitsSectionModern from "@/components/BenefitsSectionModern";
import BudgetCalculatorGamefied from "@/components/BudgetCalculatorGamefied";
import BeforeAfterSection from "@/components/BeforeAfterSlider";
import SocialProofCarousel from "@/components/SocialProofCarousel";
import GuaranteeCertificate from "@/components/GuaranteeCertificate";
import PricingComparative from "@/components/PricingComparative";
import UrgencyCountdown from "@/components/UrgencyCountdown";
import WhatsAppButtonModern from "@/components/WhatsAppButtonModern";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSectionModern />
      <BenefitsSectionModern />
      <BudgetCalculatorGamefied />
      <BeforeAfterSection />
      <SocialProofCarousel />
      <GuaranteeCertificate />
      <PricingComparative />
      <UrgencyCountdown />
      <WhatsAppButtonModern />
    </div>
  );
};

export default Index;
