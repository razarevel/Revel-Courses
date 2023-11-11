import { Link } from "react-router-dom";

interface Props {
  display: boolean;
  handleCick: () => void;
}
export default function MobNavList({ display, handleCick }: Props) {
  return (
    <div
      className={
        "bg-slate-100 w-full py-10 origin-top scale-y-0 absolute z-50 duration-300 " +
        (display ? " scale-y-100 duration-300 " : " delay-300 scale-y-0")
      }
    >
      <div
        className={
          "flex flex-col px-6 opacity-0 duration-300 delay-300 space-y-4 " +
          (display ? " opacity-100 " : " delay-0 opacity-0")
        }
      >
        <Link
          to={"/"}
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Home
        </Link>
        <Link
          to={"/courses"}
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Courses
        </Link>
        <Link
          to={"/about"}
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          About Us
        </Link>
        <Link
          to={"/pricing"}
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Pricing
        </Link>
        <a
          onClick={handleCick}
          href="#footer"
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
