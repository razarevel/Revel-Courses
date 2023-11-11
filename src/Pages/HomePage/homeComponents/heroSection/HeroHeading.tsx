import { BsLightningChargeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeroHeading() {
  return (
    <div className="flex flex-col py-28 space-y-12">
      {/* header */}
      <div className="flex items-center justify-center overflowhidden w-full ">
        <div className=" bg-white space-x-4 flex px-4 py-3 items-center relative rounded-md">
          {/* signs */}
          <div className="absolute left-[-7%] top-[-40%] rotate-[35deg] space-y-4">
            <div className="w-4 h-0.5 bg-black rounded-full translate-x-3 rotate-[40deg]"></div>
            <div className="w-6 h-0.5 bg-black rounded-full"></div>
            <div className="w-4 h-0.5 bg-black rounded-full translate-x-3 rotate-[-40deg]"></div>
          </div>
          <div className="p-2 bg-[#FFF4E5] sm:p-3">
            <BsLightningChargeFill className="sm:hidden" />
            <BsLightningChargeFill className="hidden sm:block" size="20" />
          </div>
          <h1 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <span className="text-yellow-500">Unlock</span> Your Creative
            Potential
          </h1>
        </div>
      </div>
      {/* body */}
      <div className="text-center flex items-center justify-center flex-col space-y-2">
        <h1 className="text-xl sm:text-[1.29rem] md:text-2xl xl:text-3xl font-semibold">
          with Online Design and Developement Courses
        </h1>
        <p className="w-52 sm:w-80 md:w-auto">
          Learn From Industry Experts and Enhance Your Skills
        </p>
      </div>
      <div className="flex items-center justify-center space-x-3">
        <Link
          to={"/courses"}
          className="px-4 py-3 bg-[#FF9500] hover:opacity-80 duration-300 text-white rounded-lg font-medium"
        >
          Explore Courses
        </Link>
        <Link
          to={"/courses"}
          className="px-4 py-3 duration-300  rounded-lg font-medium bg-white hover:bg-[#FF9500] hover:text-white"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
}
