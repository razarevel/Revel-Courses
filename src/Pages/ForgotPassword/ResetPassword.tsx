import Footer from "../../reuseableComponents/Footer/Footer";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import LoginHeaderCxard from "../LoginPage/LoginPageComponents/LoginHeaderCard";
import ResetPassCard from "./ResetPassCard";

export default function ResetPassword() {
  return (
    <div className="bg-[#F7F7F8]">
      <Navbar />
      <div
        className="flex flex-col xl:flex-row space-y-14 xl:space-y-0 items-center justify-center xl:justify-between
     container mx-auto p-4 my-32 w-full xl:space-x-20"
      >
        <LoginHeaderCxard />
        <ResetPassCard />
      </div>
      <Footer />
    </div>
  );
}
