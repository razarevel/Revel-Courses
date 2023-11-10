interface Props {
  display: boolean;
}
export default function MobNavList({ display }: Props) {
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
        <a
          href="/"
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Home
        </a>
        <a
          href="/"
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Courses
        </a>
        <a
          href="/"
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          About Us
        </a>
        <a
          href="/"
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Pricing
        </a>
        <a
          href="/"
          className="text-lg font-[400] duration-300 hover:translate-x-2.5 hover:scale-105"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
