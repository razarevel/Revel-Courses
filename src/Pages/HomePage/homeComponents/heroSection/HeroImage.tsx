import { BsFillPlayFill } from "react-icons/bs";
import img from "../../../../assets/heroGridPNG/heroImage.png";
export default function HeroImage() {
  return (
    <div className="flex items-center justify-center px-4 relative">
      <img src={img} alt="" />
      <div className="absolute md:w-16 md:h-16 p-2 md:p-0 rounded-full flex items-center justify-center border border-white/30 cursor-pointer">
        <div className="w-full h-full bg-white opacity-20 absolute rounded-full"></div>
        <BsFillPlayFill color="white" className="md:hidden" />
        <BsFillPlayFill size="36" color="white" className="hidden  md:block" />
      </div>
    </div>
  );
}
