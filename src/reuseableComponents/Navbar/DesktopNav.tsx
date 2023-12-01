import { Link } from "react-router-dom";
import logo from "../../assets/RevelDark.png";
import DeskNavList from "./DeskNavList";
import { useEffect, useState } from "react";
import img from "./profile.png";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
export default function DesktopNav() {
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
    <div className="container mx-auto flex items-center justify-between p-6 xl:px-0">
      <div className="flex items-center justify-between space-x-10">
        {/* logo */}
        <div>
          <img src={logo} alt="" className="w-12 h-12" />
        </div>
        {/* Navlist */}
        <DeskNavList />
      </div>
      {!isLogged ? (
        <div className="flex items-center justify-center space-x-10">
          <Link to={"/signup"} className="group cursor-pointer space-y-1">
            <p className="text-[1.2rem]">Sigin Up</p>
            <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
          </Link>
          <Link
            to={"/login"}
            className="text-[1.2rem] bg-[#FF9500] px-4 py-2 rounded-lg duration-300 hover:opacity-80 text-slate-100"
          >
            Login
          </Link>
        </div>
      ) : (
        <div
          className="cursor-pointer flex items-center justify-center space-x-3 relative "
          onClick={() => setShowLogout(!showLogout)}
          onMouseLeave={() =>
            setTimeout(() => {
              setShowLogout(false);
            }, 1000)
          }
        >
          <img src={img} alt="" className="w-16" />
          <p className="text-lg font-medium">{localStorage.getItem("name")}</p>
          {showLogout && (
            <div
              className="absolute -bottom-10 w-full flex items-center justify-between py-1 px-2 bg-[#F7F7F8] rounded-md group hover:bg-white duration-300"
              onClick={() => {
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
    </div>
  );
}
