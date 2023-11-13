interface Props {
  title: string;
  description: string;
  img: string[];
  weeks: number;
  level: string;
  instructor: string;
  Section: { number: number; title: string }[];
}
export default function CoursePageCard({
  title,
  description,
  img,
  weeks,
  level,
  instructor,
  Section,
}: Props) {
  return (
    <div className="bg-white w-full px-8 py-6 rounded-lg shadow-md space-y-6">
      {/* heading */}
      <div className="flex flex-col space-y-6 items-start  md:justify-between md:flex-row md:">
        <div className="md:w-[80%] space-y-3">
          <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
        <button className="border px-4 py-2 rounded-md font-medium duration-300 hover:bg-[#FF9500] hover:text-white">
          View Course
        </button>
      </div>
      {/* imgs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {img.map((el, index) => (
          <img src={el} alt="" key={index} className="" />
        ))}
      </div>
      {/* about */}
      <div className="flex items-start flex-col space-y-6 md:flex-row md:items-center md:space-y-0 md:justify-between">
        <div className="flex space-x-4">
          <div className="border px-3 py-1.5 font-medium opacity-80">
            {weeks} Weeks
          </div>
          <div className="border px-3 py-1.5 font-medium opacity-80">
            {level}
          </div>
        </div>
        <p className="font-medium text-lg opacity-80">By {instructor}</p>
      </div>
      {/* Section */}
      <div className="w-full border rounded-lg">
        <div className="w-full border-b px-4 py-3 font-medium ">Curriculum</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-3 lg:px-10 lg:py-4">
          {Section.map((el, index) => (
            <div key={index} className="space-y-2">
              <h1 className="text-4xl font-bold">0{el.number}</h1>
              <p>{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
