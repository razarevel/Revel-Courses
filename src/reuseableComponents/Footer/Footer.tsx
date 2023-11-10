import FooterProfiles from "./FooterProfiles";
import FooterContact from "./footerContact";
import FooterContext from "./footerContext";
import Footerlists from "./footerLists";

export default function Footer() {
  return (
    <>
      <section id="footer" className="bg-white">
        {/* mobile footer */}
        <div className="flex flex-col md:flex-row p-8 md:0 space-y-8 md:space-y-0 md:hidden">
          {/* First section */}
          <FooterContact />
          {/* Second section */}
          <FooterContext />
        </div>
        {/* medium  footer */}
        <div className="flex-col space-y-8 hidden md:flex p-8 lg:hidden">
          <div className="flex items-center justify-between">
            <FooterContact />
            <div className="translate-y-4">
              <Footerlists />
            </div>
          </div>
          <FooterProfiles />
        </div>
        {/* Large fotter */}
        <div className="hidden lg:flex xl:hidden  justify-between p-8">
          <FooterContact />
          <Footerlists />
          <FooterProfiles />
        </div>
        {/* extra large footer */}
        <div className="hidden xl:flex items-center justify-between p-8 container mx-auto">
          <FooterContact />
          <div className="flex space-x-24">
            <Footerlists />
            <FooterProfiles />
          </div>
        </div>
        {/* footer border */}
        <div className="bg-black w-full h-0.5 opacity-10"></div>
        <div className="flex items-center justify-center text-[0.95rem] opacity-70 h-16">
          <p>© 2023 Revel Courses. All right reserved.</p>
        </div>
      </section>
    </>
  );
}
