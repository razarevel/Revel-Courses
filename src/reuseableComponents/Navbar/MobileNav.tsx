import { useState } from "react";
import logo from "../../assets/RevelDark.png";
import NavButton from "./NavButton";
import MobNavList from "./MobNavList";
export default function MobileNav() {
  const [show, setshow] = useState(false);
  const handleClickEvent = () => setshow(!show);
  return (
    <div className="relative">
      <div className="flex items-center justify-between p-6 bg-white">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className="w-10 h-10" />
        </div>
        <div className="flex space-x-3 md:space-x-14 items-center">
          <a href="/">Sign up</a>
          <a
            href="/"
            className="bg-yellow-400 px-4 py-2 rounded-lg text-white duration-300 hover:bg-yellow-500"
          >
            Login
          </a>
          <NavButton change={show} handleClick={handleClickEvent} />
        </div>
      </div>
      <MobNavList display={show} />
    </div>
  );
}
