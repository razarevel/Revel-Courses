interface Props {
  handleClick: () => void;
  change: boolean
}
export default function NavButton({ handleClick,change }: Props) {
  return (
    <>
      <div
        className="w-8 h-5  flex flex-col items-cente relative cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={
            "w-full h-0.5 bg-black absolute top-0 left-0 duration-300  " +
            (change && " opacity-0")
          }
        ></div>
        <div
          className={
            "w-full h-0.5 bg-black absolute left-0 top-[45%] duration-300 " +
            (change && " -rotate-45")
          }
        ></div>
        <div
          className={
            "w-full scale-x-[0.5] origin-right h-0.5 bg-black absolute bottom-0 right-0 duration-300 " +
            (change &&
              " scale-x-100 rotate-[45deg] -translate-x-[0.25rem] translate-y-[2px]")
          }
        ></div>
      </div>
    </>
  );
}
