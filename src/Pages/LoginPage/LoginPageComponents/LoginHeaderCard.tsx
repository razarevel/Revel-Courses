import { useState } from "react";
import LoginCarsoulCard from "./LoginCarsoulCard";
import LoginContext from "./LoginContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function LoginHeaderCxard() {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-start flex-col text-center space-y-16 xl:items-start xl:text-start">
        {/* heading */}
        <div className="space-y-5 w-full">
          <h1 className="text-4xl font-medium">Student Testimonials</h1>
          <p className="xl:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius in
            dolorum libero ullam at temporibus recusandae quo omnis numquam
            magnam dicta quod porro nemo animi, voluptas error unde rem
            veritatis!
          </p>
        </div>
        {/* Carsoul */}
        <div className="w-full">
          {show ? (
            <LoginCarsoulCard
              context={LoginContext[0].context}
              img={LoginContext[0].img}
              name={LoginContext[0].name}
            />
          ) : (
            <LoginCarsoulCard
              context={LoginContext[1].context}
              img={LoginContext[1].img}
              name={LoginContext[1].name}
            />
          )}
          <div className="flex items-center justify-end mt-10 space-x-4">
            <div
              className="w-12 h-12 rounded-lg bg-white flex items-center justify-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <FaArrowLeft />
            </div>
            <div
              className="w-12 h-12 rounded-lg bg-white flex items-center justify-center cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
