import logo from "../../assets/RevelDark.png";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function FooterContact() {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <img src={logo} alt="" className="w-10 h-10" />
        <div className="flex flex-col space-4">
          <div className="flex space-x-3">
            <FaEnvelope />
            <p>razarevel@gmail.com</p>
          </div>
          <div className="flex space-x-3">
            <BsFillTelephoneFill />
            <p>03053263642</p>
          </div>
          <div className="flex space-x-3">
            <FaLocationDot />
            <p>Somewhere in japan</p>
          </div>
        </div>
      </div>
    </>
  );
}
