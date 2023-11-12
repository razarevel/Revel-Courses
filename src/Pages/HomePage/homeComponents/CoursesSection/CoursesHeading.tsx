import { Link } from "react-router-dom";

export default function CoursesHeading() {
  return (
    <div className="flex flex-col items-start justify-between container mx-auto md:flex-row md:items-center space-y-4 md:space-y-0">
      {/* heading */}
      <div className="space-y-3 w-[80%] lg:w-[60%]">
        <h1 className="text-xl md:text-3xl font-semibold ">Our Courses</h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quos
          officia praesentium? Dolore aspernatur iste quis dolor saepe.
          Laboriosam, fugiat.
        </p>
      </div>
      {/* button */}
      <Link
        to={"/courses"}
        className="bg-white px-4 py-2 border rounded-lg font-medium duration-300 hover:bg-[#FF9500] hover:border-[#FF9500] hover:text-white"
      >
        View All
      </Link>
    </div>
  );
}
