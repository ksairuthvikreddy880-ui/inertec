import HeroSection from "@/components/home/HeroSection";
import CompanyIntro from "@/components/home/CompanyIntro";
import ProductCategories from "@/components/home/ProductCategories";
import IndustriesServed from "@/components/home/IndustriesServed";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyIntro />
      <ProductCategories />
      <IndustriesServed />
      <WhyChooseUs />
      <Certifications />
      <ContactCTA />
    </>
  );
}
