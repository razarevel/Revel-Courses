import { Link } from "react-router-dom";

export default function PricingHeading() {
  return (
    <div className="flex flex-col p-4 space-y-6 md:flex-row md:space-y-0 items-center justify-between">
      <div className="space-y-3 md:w-[60%]">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold ">
          Our Pricing
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          dolor. Excepturi placeat alias nesciunt accusantium nemo amet natus
          exercitationem possimus!
        </p>
      </div>
      {/* button */}
      <div className="flex items-center justify-center space-x-3">
        <Link to={"/pricing"} className="px-5 py-2 bg-[#FF9500] text-white font-medium rounded-lg hover:opacity-80 duration-300 cursor-pointer">
          Montly
        </Link>
        <Link to={"/pricing"} className="px-5 py-2 hover:bg-[#FF9500]  hover:text-white font-medium rounded-lg border duration-300 cursor-pointer">
          Yearly
        </Link>
      </div>
    </div>
  );
}
