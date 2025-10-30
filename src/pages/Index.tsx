
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BuyBlueTokensSection from "@/components/BuyBlueTokensSection";
import BackedByBelieversSection from "@/components/BackedByBelieversSection";
import FeaturesSection from "@/components/FeaturesSection";
import BuiltOnBaseSection from "@/components/BuiltOnBaseSection";
import FutureOfSocialSection from "@/components/FutureOfSocialSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import TeamSection from "@/components/TeamSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-dark overflow-x-hidden snap-y snap-mandatory">
      <HeroSection />
      <HowItWorksSection />
      <BuyBlueTokensSection />
      <BackedByBelieversSection />
      <FeaturesSection />
      <BuiltOnBaseSection />
      <FutureOfSocialSection />
      <TokenomicsSection />
      <TeamSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
