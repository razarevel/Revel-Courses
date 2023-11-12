import { useState } from "react";
import FAQcontext from "./FAQcontext";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function FAQContQes() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const el = FAQcontext;
  return (
    <>
      <div className="space-y-10 lg:w-[60%]">
        {/* First */}
        <div className={"border p-6 overflow-hidden space-y-5"}>
          {/* heading */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold w-[80%]">{el[0].heading}</h1>
            {/* button */}
            <div
              className="w-10 h-10 relative flex items-center justify-center cursor-pointer"
              onClick={() => setShow1(!show1)}
            >
              <div className="w-full h-full absolute bg-yellow-600 opacity-30 "></div>
              <div className="absolute w-3 h-0.5 bg-black"></div>
              <div
                className={
                  show1
                    ? "absolute w-3 h-0.5 bg-black rotate-0 duration-300"
                    : "absolute w-3 h-0.5 bg-black rotate-90 duration-300 "
                }
              ></div>
            </div>
          </div>
          {/* border */}
          <div
            className={
              "w-full border-t duration-1000 " + (!show1 ? " hidden" : " block")
            }
          ></div>
          {/* Context */}
          <p className={!show1 ? " hidden" : " block"}>{el[0].ans}</p>
          <div
            className={
              "w-full h-full bg-[#F7F7F8] rounded-md flex items-center justify-between flex-col p-4 space-y-3 md:flex-row " +
              (!show1 ? " hidden" : " block")
            }
          >
            <p>Enrollment Process for Different Courses</p>
            <Link
              to={"/courses"}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center group cursor-pointer"
            >
              <IoArrowForwardSharp
                size="20"
                className="duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
        {/* Second */}
        <div className={"border p-6 overflow-hidden space-y-5 "}>
          {/* heading */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold w-[80%]">{el[1].heading}</h1>
            {/* button */}
            <div
              className="w-10 h-10 relative flex items-center justify-center cursor-pointer"
              onClick={() => setShow2(!show2)}
            >
              <div className="w-full h-full absolute bg-yellow-600 opacity-30 "></div>
              <div className="absolute w-3 h-0.5 bg-black"></div>
              <div
                className={
                  show2
                    ? "absolute w-3 h-0.5 bg-black rotate-0 duration-300"
                    : "absolute w-3 h-0.5 bg-black rotate-90 duration-300 "
                }
              ></div>
            </div>
          </div>
          {/* Context */}

          <div
            className={
              "w-full border-t duration-1000 " + (!show2 ? " hidden" : " block")
            }
          ></div>
          {/* border */}
          <p className={!show2 ? " hidden" : " block"}>{el[1].ans}</p>
          <div
            className={
              "w-full h-full bg-[#F7F7F8] rounded-md flex items-center justify-between flex-col p-4 space-y-3 md:flex-row " +
              (!show2 ? " hidden" : " block")
            }
          >
            <p>Enrollment Process for Different Courses</p>
            <Link
              to={"/courses"}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center group cursor-pointer"
            >
              <IoArrowForwardSharp
                size="20"
                className="duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className={"border p-6 overflow-hidden space-y-5 "}>
          {/* heading */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold w-[80%]">{el[2].heading}</h1>
            {/* button */}
            <div
              className="w-10 h-10 relative flex items-center justify-center cursor-pointer"
              onClick={() => setShow3(!show3)}
            >
              <div className="w-full h-full absolute bg-yellow-600 opacity-30 "></div>
              <div className="absolute w-3 h-0.5 bg-black"></div>
              <div
                className={
                  show3
                    ? "absolute w-3 h-0.5 bg-black rotate-0 duration-300"
                    : "absolute w-3 h-0.5 bg-black rotate-90 duration-300 "
                }
              ></div>
            </div>
          </div>
          {/* Context */}

          <div
            className={
              "w-full border-t duration-1000 " + (!show3 ? " hidden" : " block")
            }
          ></div>
          {/* border */}
          <p className={!show3 ? " hidden" : " block"}>{el[2].ans}</p>
          <div
            className={
              "w-full h-full bg-[#F7F7F8] rounded-md flex items-center justify-between flex-col p-4 space-y-3 md:flex-row " +
              (!show3 ? " hidden" : " block")
            }
          >
            <p>Enrollment Process for Different Courses</p>
            <Link
              to={"/courses"}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center group cursor-pointer"
            >
              <IoArrowForwardSharp
                size="20"
                className="duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className={"border p-6 overflow-hidden space-y-5 "}>
          {/* heading */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold w-[80%]">{el[3].heading}</h1>
            {/* button */}
            <div
              className="w-10 h-10 relative flex items-center justify-center cursor-pointer"
              onClick={() => setShow4(!show4)}
            >
              <div className="w-full h-full absolute bg-yellow-600 opacity-30 "></div>
              <div className="absolute w-3 h-0.5 bg-black"></div>
              <div
                className={
                  show4
                    ? "absolute w-3 h-0.5 bg-black rotate-0 duration-300"
                    : "absolute w-3 h-0.5 bg-black rotate-90 duration-300 "
                }
              ></div>
            </div>
          </div>
          {/* Context */}

          <div
            className={
              "w-full border-t duration-1000 " + (!show4 ? " hidden" : " block")
            }
          ></div>
          {/* border */}
          <p className={!show4 ? " hidden" : " block"}>{el[3].ans}</p>
          <div
            className={
              "w-full h-full bg-[#F7F7F8] rounded-md flex items-center justify-between flex-col p-4 space-y-3 md:flex-row " +
              (!show4 ? " hidden" : " block")
            }
          >
            <p>Enrollment Process for Different Courses</p>
            <Link
              to={"/courses"}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center group cursor-pointer"
            >
              <IoArrowForwardSharp
                size="20"
                className="duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
        {/* Fiveth */}
        <div className={"border p-6 overflow-hidden space-y-5 "}>
          {/* heading */}
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl font-semibold w-[80%]">{el[4].heading}</h1>
            {/* button */}
            <div
              className="w-10 h-10 relative flex items-center justify-center cursor-pointer"
              onClick={() => setShow5(!show5)}
            >
              <div className="w-full h-full absolute bg-yellow-600 opacity-30 "></div>
              <div className="absolute w-3 h-0.5 bg-black"></div>
              <div
                className={
                  show5
                    ? "absolute w-3 h-0.5 bg-black rotate-0 duration-300"
                    : "absolute w-3 h-0.5 bg-black rotate-90 duration-300 "
                }
              ></div>
            </div>
          </div>
          {/* Context */}

          <div
            className={
              "w-full border-t duration-1000 " + (!show5 ? " hidden" : " block")
            }
          ></div>
          {/* border */}
          <p className={!show5 ? " hidden" : " block"}>{el[4].ans}</p>
          <div
            className={
              "w-full h-full bg-[#F7F7F8] rounded-md flex items-center justify-between flex-col p-4 space-y-3 md:flex-row " +
              (!show5 ? " hidden" : " block")
            }
          >
            <p>Enrollment Process for Different Courses</p>
            <Link
              to={"/courses"}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center group cursor-pointer"
            >
              <IoArrowForwardSharp
                size="20"
                className="duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
