import { Link } from "react-router-dom";

export default function DeskNavList() {
  return (
    <>
      <div className="flex items-center justify-between space-x-8">
        <div className="group cursor-pointer space-y-1">
          <Link to={"/"} className="text-[1.2rem]">
            Home
          </Link>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </div>
        <div className="group cursor-pointer space-y-1">
          <Link to={"/courses"} className="text-[1.2rem]">
            Courses
          </Link>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </div>
        <div className="group cursor-pointer space-y-1">
          <Link to={"/about"} className="text-[1.2rem]">
            About Us
          </Link>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </div>
        <div className="group cursor-pointer space-y-1">
          <Link to={"/pricing"} className="text-[1.2rem]">
            Pricing
          </Link>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </div>
        <div className="group cursor-pointer space-y-1">
          <Link to={"/contact"} className="text-[1.2rem]">
            Contact
          </Link>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </div>
      </div>
    </>
  );
}
