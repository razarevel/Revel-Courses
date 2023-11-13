import { Link } from "react-router-dom";
import img from "./Abstract Design.png";
export default function JoinSectionMain() {
  return (
    <div className="container bg-white mx-auto p-6 lg:p-14  flex flex-col space-y-6 items-start md:flex-row md:space-y-0 md:items-center md:justify-between my-32 relative">
      <div className="space-y-6 relative z-20 md:w-[80%]">
        <h1 className="text-3xl md:text-5xl font-semibold">
          <span className="text-[#FF9500]">Together</span>, let's shape the
          future of digital innovation
        </h1>
        <p>
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <Link
        to={"/login"}
        className="px-4 py-2 bg-[#FF9500] hover:opacity-80 font-medium duration-300 text-white rounded-md relative z-20"
      >
        Join Now
      </Link>
      <img
        src={img}
        alt=""
        className="absolute  z-0 md:right-0 lg:right-[10%] self-center"
      />
    </div>
  );
}
