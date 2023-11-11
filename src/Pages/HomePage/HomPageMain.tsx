import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import HeroSectionMain from "./homeComponents/heroSection/HeroSectionMain";

export default function HomePageMain() {
  return (
    <body className="bg-[#F7F7F8]">
      <Navbar />
      <HeroSectionMain />
      <Footer />
    </body>
  );
}
