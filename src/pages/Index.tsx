import HeroSectionMinimal from "@/components/HeroSectionMinimal";
import BenefitsSectionMinimal from "@/components/BenefitsSectionMinimal";
import BudgetCalculatorGamefied from "@/components/BudgetCalculatorGamefied";
import BeforeAfterSectionMinimal from "@/components/BeforeAfterSectionMinimal";
import SocialProofMinimal from "@/components/SocialProofMinimal";
import GuaranteeSectionMinimal from "@/components/GuaranteeSectionMinimal";
import PricingTableMinimal from "@/components/PricingTableMinimal";
import UrgencySectionMinimal from "@/components/UrgencySectionMinimal";
import WhatsAppButtonMinimal from "@/components/WhatsAppButtonMinimal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSectionMinimal />
      <BenefitsSectionMinimal />
      <BudgetCalculatorGamefied />
      <SocialProofMinimal />
      <BeforeAfterSectionMinimal />
      <GuaranteeSectionMinimal />
      <PricingTableMinimal />
      <UrgencySectionMinimal />
      <WhatsAppButtonMinimal />
    </div>
  );
};

export default Index;
