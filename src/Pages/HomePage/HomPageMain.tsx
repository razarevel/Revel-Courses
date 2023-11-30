import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import BenefitSectionMain from "./homeComponents/BenefitSection/BenefitSectionMain";
import CoursesSectionMain from "./homeComponents/CoursesSection/CoursesSectionMain";
import FAQSection from "./homeComponents/FAQSection/FAQSection";
import PricingSectionMain from "./homeComponents/PricingSection/PricingSectionMain";
import TestimonialSectionMain from "./homeComponents/TestimonialSection/TestimonialSectionMain";
import HeroSectionMain from "./homeComponents/heroSection/HeroSectionMain";
export default function HomePageMain() {
  return (
    <div className="bg-[#F7F7F8]">
      <Navbar />
      <HeroSectionMain />
      <BenefitSectionMain />
      <CoursesSectionMain />
      <TestimonialSectionMain />
      <PricingSectionMain />
      <FAQSection />
      <Footer />
    </div>
  );
}
