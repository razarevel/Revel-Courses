interface Props {
  name: string;
  img: string;
  heading: string;
}
export default function TestimonialgridCard({ name, img, heading }: Props) {
  return (
    <div className="bg-white flex flex-col rounded-lg shadow-md">
      <p className="px-4 py-6 sm:px-6 md:px-4 lg:px-6">{heading}</p>
      <div className="border-t w-full"></div>
      <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:px-4 lg:px-6">
        {/* img */}
        <div className="flex items-center space-x-3">
          <img src={img} alt="" />
          <h1 className="md:text-lg font-semibold">{name}</h1>
        </div>
        {/* buttton */}
        <button className="bg-[#F7F7F8] border border-[#F1F1F3] px-3 py-2 rounded-md cursor-pointer">
          Read Full story
        </button>
      </div>
    </div>
  );
}
