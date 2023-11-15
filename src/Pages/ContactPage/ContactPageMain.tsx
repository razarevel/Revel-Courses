import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import ContactFormSection from "./ContactPageComponents/ContactFormSection";
import ContactPageHero from "./ContactPageComponents/ContactPageHero";

export default function ContactPageMain() {
  return (
    <body className="bg-[#F7F7F8]">
      <Navbar />
      <ContactPageHero />
      <ContactFormSection />
      <Footer />
    </body>
  );
}
