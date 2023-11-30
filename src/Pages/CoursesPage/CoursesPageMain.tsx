import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import CourseHeroSection from "./CoursesComponents/CourseHeroSection";

export default function CoursesPageMain() {
  return (
    <div className="bg-[#F7F7F8]">
      <Navbar />
      <CourseHeroSection />
      <Footer />
    </div>
  );
}
