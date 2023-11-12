import { Link } from "react-router-dom";

export default function BenefitHeading() {
  return (
    <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-center md:justify-between">
      <div className="space-y-3">
        <h1 className="text-xl md:text-3xl font-semibold">Benefit</h1>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque
          soluta quam voluptates? Cumque nihil nam illum repudiandae totam in?
        </p>
      </div>
      <div className="md:w-[20%] flex justify-end">
        <Link
          to={"/courses"}
          className="px-4 py-2 bg-white border rounded-lg hover:border-[#FF9500] hover:bg-[#FF9500] hover:text-white duration-300"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
