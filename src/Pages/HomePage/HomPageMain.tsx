import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import FAQSection from "./homeComponents/FAQSection/FAQSection";
import HeroSectionMain from "./homeComponents/heroSection/HeroSectionMain";

export default function HomePageMain() {
  return (
    <body className="bg-[#F7F7F8]">
      <Navbar />
      <HeroSectionMain />
      <FAQSection />
      <Footer />
    </body>
  );
}
