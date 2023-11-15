import { Link } from "react-router-dom";

export default function DeskNavList() {
  return (
    <>
      <div className="flex items-center justify-between space-x-8">
        <Link to={"/"} className="group cursor-pointer space-y-1">
          <p className="text-[1.2rem]">Home</p>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </Link>
        <Link to={"/courses"} className="group cursor-pointer space-y-1">
          <p className="text-[1.2rem]">Courses</p>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </Link>
        <Link to={"/about"} className="group cursor-pointer space-y-1">
          <p className="text-[1.2rem]">About Us</p>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </Link>
        <Link to={"/pricing"} className="group cursor-pointer space-y-1">
          <p className="text-[1.2rem]">Pricing</p>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </Link>
        <Link to={"/contact"} className="group cursor-pointer space-y-1">
          <p className="text-[1.2rem]">Contact</p>
          <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
        </Link>
      </div>
    </>
  );
}
