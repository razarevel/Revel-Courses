import { FaPlay } from "react-icons/fa";

interface Props {
  mainIamge: string | any;
}
export default function CoursesOpenVideo({ mainIamge }: Props) {
  return (
    <>
      <div className="container min-w-full flex items-center justify-center ">
        <div className="flex items-center justify-center mx-4 md:mx-10 lg:mx-12 relative max-w-[1296px] ">
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 rounded-lg"></div>
          <img src={mainIamge} alt="" className="rounded-lg" />
          {/* Play button */}
          <div className="w-12 h-12 absolute rounded-full flex items-center justify-center cursor-pointer group ">
            <div className="bg-white w-full h-full relative rounded-full opacity-20 group-hover:animate-pulse duration-300"></div>
            <FaPlay
              className="absolute translate-x-0.5 opacity-80"
              color="white"
            />
          </div>
        </div>
      </div>
    </>
  );
}
