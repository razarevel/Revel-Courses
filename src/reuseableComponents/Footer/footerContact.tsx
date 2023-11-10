import logo from "../../assets/RevelDark.png";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function FooterContact() {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <img src={logo} alt="" className="w-10 h-10" />
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-3 items-center">
            <FaEnvelope size="22" />
            <a
              href="mailto: razarevel@gmail.com"
              target="_blank"
              className="font-[450] text-[1.1rem]"
            >
              razarevel@gmail.com
            </a>
          </div>
          <div className="flex space-x-3 items-center ">
            <BsFillTelephoneFill size="22" />
            <p className="font-[450] text-[1.1rem] cursor-pointer">
              +03053263642
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <FaLocationDot size="22" />
            <p className="font-[450] text-[1.1rem] cursor-pointer">
              Somewhere in japan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
