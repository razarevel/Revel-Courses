interface Props {
  img: string;
  title: string;
  context: string;
}
export default function SectionCard({ img, title, context }: Props) {
  return (
    <div className="bg-white p-8 space-y-4 flex flex-col items-start rounded-lg">
      <div className="bg-[#FFF9F0] border border-[#FFEACC] w-12 h-12 flex items-center justify-center">
        <img src={img} alt="" />
      </div>
      <h1 className="text-xl font-medium">{title}</h1>
      <p>{context}</p>
    </div>
  );
}
