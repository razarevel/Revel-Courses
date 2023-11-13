import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import AboutPageHero from "./AboutUsPageComponents/AboutPageHero";
import AchivementSectionMain from "./AboutUsPageComponents/AchivementSection/AchivementSectionMain";
import GoalSectionMain from "./AboutUsPageComponents/GoalSection/GoalSectionMain";
import JoinSectionMain from "./AboutUsPageComponents/JoinSection/JoinSectionMain";

export default function AboutUsPageMain() {
  return (
    <body className="bg-[#F7F7F8]">
      <Navbar />
      <AboutPageHero />
      <div className="space-y-32">
        <AchivementSectionMain />
        <GoalSectionMain />
      </div>
      <JoinSectionMain />
      <Footer />
    </body>
  );
}
