import { useEffect, useState } from "react";
import logo from "../../assets/RevelDark.png";
import NavButton from "./NavButton";
import MobNavList from "./MobNavList";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
import img from "./profile.png";
export default function MobileNav() {
  const [show, setshow] = useState(false);
  const handleClickEvent = () => setshow(!show);
  const [isLogged, setIsLogged] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") || localStorage.getItem("name")) {
      const token = { token: localStorage.getItem("token") };
      axios
        .post("http://127.0.0.1:3001/api/getUserByToken", token)
        .then((res) => {
          localStorage.setItem("name", res.data.data.user.name);
          setIsLogged(true);
        })
        .catch(() => setIsLogged(false));
    }
  }, [isLogged]);
  return (
    <div className="relative">
      <div className="flex items-center justify-between p-6 bg-white">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className="w-10 h-10" />
        </div>
        {!isLogged ? (
          <div className="flex space-x-3 md:space-x-14 items-center">
            <Link to={"/signup"}>Sign up</Link>
            <Link
              to={"/login"}
              className="bg-[#FF9500] px-4 py-2 rounded-lg text-white duration-300 hover:opacity-80"
            >
              Login
            </Link>
          </div>
        ) : (
          <div
            className="cursor-pointer flex items-center justify-center space-x-3 relative "
            onClick={() => setShowLogout(true)}
            onMouseLeave={() => setShowLogout(false)}
          >
            <img src={img} alt="" className="w-16" />
            <p className="text-lg font-medium">
              {localStorage.getItem("name")}
            </p>
            {showLogout && (
              <div
                className="absolute -bottom-10 w-full flex items-center justify-between py-1 px-2 bg-[#F7F7F8] rounded-md group hover:bg-white duration-300"
                onClick={() => {
                  setShowLogout(true);
                  localStorage.removeItem("token");
                  localStorage.removeItem("name");
                  setIsLogged(false);
                }}
              >
                <p>Logout</p>
                <IoIosLogOut
                  size={20}
                  className="-translate-x-1 group-hover:translate-x-0.5 duration-300"
                />
              </div>
            )}
          </div>
        )}
        <NavButton change={show} handleClick={handleClickEvent} />
      </div>
      <MobNavList display={show} handleCick={handleClickEvent} />
    </div>
  );
}
