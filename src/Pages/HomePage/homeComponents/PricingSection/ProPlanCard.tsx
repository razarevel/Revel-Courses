import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
export default function ProPlanCard() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#FCFCFD] rounded-lg p-4 pt-10 border border-[#F1F1F3] space-y-14 w-full">
      {/* heading */}
      <div className="w-full text-center bg-[#FFF9F0] border border-[#FFEACC] py-2 text-lg font-medium">
        Pro Plan
      </div>
      {/* Price */}
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">$79</h1>
        <div className="flex self-end translate-x-2 space-x-1">
          <div className="w-0.5 h-[23px] bg-black rotate-[10deg]"></div>
          <p>month</p>
        </div>
      </div>
      {/* list */}
      <div className="bg-white  space-y-4 border border-spacing-x-0.5 rounded-lg w-full">
        <h1 className="text-xl font-medium px-6 pt-4 text-center">
          Avialable Features
        </h1>
        {/* list container */}
        <div className="space-y-4 px-6 pt-4 pb-2">
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Unlimited access to all courses.
            </p>
          </div>
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Unlimited course materials and resources.
            </p>
          </div>
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Priority support from instructor.
            </p>
          </div>
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Courses completion courses.
            </p>
          </div>
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Add-free experience.
            </p>
          </div>
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Acess to exclusive Pro Plan comunity fourms.
            </p>
          </div>
          <div className="flex justify-between border p-1.5 py-2 rounded-lg space-x-3">
            <div className="w-8 h-8 rounded-md bg-[#FFF9F0] flex items-center justify-center border">
              <TiTick />
            </div>
            <p className="w-full font-medium self-center">
              Early access to new courses and updates.
            </p>
          </div>
        </div>
        {/* button */}
        <button className="w-full bg-[#FF9500] text-center font-medium text-white py-3 rounded-b-lg duration-300 hover:opacity-80 cursor-pointer relative">
          <Link
            to={"/pricing"}
            className="absolute w-full h-full top-0 left-0"
          ></Link>
          <p>Get Started</p>
        </button>
      </div>
    </div>
  );
}
