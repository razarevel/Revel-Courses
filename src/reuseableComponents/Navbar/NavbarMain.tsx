import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <section id="nav">
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className="hidden lg:block bg-white">
        <DesktopNav />
      </div>
    </section>
  );
}
