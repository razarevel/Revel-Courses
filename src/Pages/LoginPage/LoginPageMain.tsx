import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import LoginPageGridCon from "./LoginPageComponents/LoginPageGridCont";

export default function LoginPageMain() {
  return (
    <div className="bg-[#F7F7F8]">
      <Navbar />
      <LoginPageGridCon />
      <Footer />
    </div>
  );
}
