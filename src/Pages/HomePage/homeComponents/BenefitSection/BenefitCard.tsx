import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  number: string;
  title: string;
  description: string;
}
export default function BenefitCart({ number, title, description }: Props) {
  let numbers = parseInt(number);
  return (
    <div className="px-6 py-8 bg-white rounded-lg shadow-sm space-y-3">
      <div className="flex items-end justify-end">
        <h1 className="text-5xl font-semibold">
          {numbers < 10 ? 0 + number : number}
        </h1>
      </div>
      <div className="space-y-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      {/* button */}
      <div className="flex items-end justify-end">
        <div className="w-10 h-10 bg-[#FCFCFD] border-[#F1F1F3] flex items-center justify-center cursor-pointer group">
          <BsArrowUpRight
            color="#FF9500"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
          />
        </div>
      </div>
    </div>
  );
}
