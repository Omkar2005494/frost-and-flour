import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SignatureCreations } from "@/components/sections/SignatureCreations";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { InstagramShowcase } from "@/components/sections/InstagramShowcase";
import { FaqContact } from "@/components/sections/FaqContact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SignatureCreations />
      <FeaturedCollections />
      <AboutSection />
      <WhyChooseUs />
      <CustomerReviews />
      <HowToOrder />
      <InstagramShowcase />
      <FaqContact />
    </>
  );
}
