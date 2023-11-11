import { Link } from "react-router-dom";
import logo from "../../assets/RevelDark.png";
import DeskNavList from "./DeskNavList";
export default function DesktopNav() {
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
      <div className="flex items-center justify-center space-x-10">
        <Link to={"/login"} className="group cursor-pointer space-y-1">
          <p className="text-[1.2rem]">Sigin Up</p>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </Link>
        <Link
          to={"/login"}
          className="text-[1.2rem] bg-yellow-400 px-4 py-2 rounded-lg duration-300 hover:bg-yellow-500 text-slate-100"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
