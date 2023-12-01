import { useEffect, useState } from "react";
import LoginCarsoulCard from "./LoginCarsoulCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
interface data {
  img: string;
  message: string;
  name: string;
  _id: any;
}
export default function LoginHeaderCxard() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<data[]>();
  const [i, setI] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/testimonial")
      .then((res) => setData(res.data.data.testimonials));
  }, []);
  const increment = () => {
    setI(i + 1);
    if (i >= 3) setI(0);
  };
  const decrement = () => {
    setI(i - 1);
    if (i <= 0) setI(3);
  };
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
          {data?.map(
            (el, index) =>
              index === i && (
                <LoginCarsoulCard
                  key={index}
                  img={el.img}
                  context={el.message}
                  name={el.name}
                />
              )
          )}

          {/* {show ? (
            
              context={data[0].message}
              img={data[0].img}
              name={data[0].name}
            />
          ) : (
            <LoginCarsoulCard
              context={data[1].message}
              img={data[1].img}
              name={data[1].name}
            />
          )} */}
          <div className="flex items-center justify-end mt-10 space-x-4">
            <div
              className="w-12 h-12 rounded-lg bg-white flex items-center justify-center cursor-pointer"
              onClick={() => {
                setShow(!show);
                decrement();
              }}
            >
              <FaArrowLeft />
            </div>
            <div
              className="w-12 h-12 rounded-lg bg-white flex items-center justify-center cursor-pointer"
              onClick={() => {
                setShow(!show);
                increment();
              }}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
