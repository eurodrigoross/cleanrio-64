import HeroSectionModern from "@/components/HeroSectionModern";
import BenefitsSectionModern from "@/components/BenefitsSectionModern";
import BudgetCalculatorGamefied from "@/components/BudgetCalculatorGamefied";
import BeforeAfterSectionMinimal from "@/components/BeforeAfterSectionMinimal";
import SocialProofModern from "@/components/SocialProofModern";
import GuaranteeSectionModern from "@/components/GuaranteeSectionModern";
import PricingTableModern from "@/components/PricingTableModern";
import UrgencySectionModern from "@/components/UrgencySectionModern";
import WhatsAppButtonMinimal from "@/components/WhatsAppButtonMinimal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSectionModern />
      <BenefitsSectionModern />
      <BudgetCalculatorGamefied />
      <SocialProofModern />
      <BeforeAfterSectionMinimal />
      <GuaranteeSectionModern />
      <PricingTableModern />
      <UrgencySectionModern />
      <WhatsAppButtonMinimal />
    </div>
  );
};

export default Index;
