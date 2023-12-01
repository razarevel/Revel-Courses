import { CiClock2 } from "react-icons/ci";

interface Videos {
  id: number;
  heading: string;
  duration: string;
  context: string;
  _id: any;
}
interface Sections {
  id: number;
  heading: string;
  videos: Videos[];
}
export default function CoursesOpenCard({ id, heading, videos }: Sections) {
  return (
    <>
      <div className="rounded-md shadow-md bg-white px-4 py-6 space-y-4">
        <div className="w-full flex items-end justify-end text-2xl md:text-3xl lg:text-4xl font-bold">
          0{id}
        </div>
        <h1 className="text-lg font-semibold">{heading}</h1>
        {/* videos */}
        <div className="space-y-6 pt-3">
          {videos.map((el) => (
            <div
              className="p-4 border flex  items-center justify-between rounded
             customShadow duration-200 group"
            >
              <div>
                <p className="font-medium">{el.heading}</p>
                <p className="opacity-70 font-medium">{el.context}</p>
              </div>
              <div
                className="bg-[#F7F7F8] group-hover:bg-[#FFEACC] duration-300 cursor-pointer
                rounded-md flex items-center justify-center space-x-2 p-2"
              >
                <div>
                  <CiClock2 />
                </div>
                <p>{el.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
