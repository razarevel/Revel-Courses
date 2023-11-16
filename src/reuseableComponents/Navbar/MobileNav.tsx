import { useState } from "react";
import logo from "../../assets/RevelDark.png";
import NavButton from "./NavButton";
import MobNavList from "./MobNavList";
import { Link } from "react-router-dom";
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
          <Link to={"/login"}>Sign up</Link>
          <Link
            to={"/login"}
            className="bg-[#FF9500] px-4 py-2 rounded-lg text-white duration-300 hover:bg-yellow-500"
          >
            Login
          </Link>
          <NavButton change={show} handleClick={handleClickEvent} />
        </div>
      </div>
      <MobNavList display={show} handleCick={handleClickEvent} />
    </div>
  );
}
