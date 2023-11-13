import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import FAQSection from "../HomePage/homeComponents/FAQSection/FAQSection";
import PricingSectionMain from "./PricingPageComponents/PrcingSectionMain";
import PricingBadgeContainer from "./PricingPageComponents/PricingBadgeContainer";
import PricingPageHeading from "./PricingPageComponents/PricingPageHeading";

export default function PricingPageMain() {
  return (
    <body className="bg-[#F7F7F8]">
      <Navbar />
      <PricingPageHeading />
      <div className="space-y-32 pb-20 pt-10">
        <div className="space-y-16">
          <PricingBadgeContainer />
          <PricingSectionMain />
        </div>
        <FAQSection />
      </div>
      <Footer />
    </body>
  );
}
