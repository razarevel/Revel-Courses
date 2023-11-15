interface Props {
  context: string;
  img: string;
  name: string;
}
export default function LoginCarsoulCard({ context, img, name }: Props) {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md space-y-10 w-[100%]">
      <p className="opacity-90">{context}</p>
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 items-center justify-between">
        <div className="flex items-center justify-start space-x-3">
          <img src={img} alt="" className="w-14 h-14" />
          <h1 className="font-medium">{name}</h1>
        </div>
        <button className="px-4 py-2 bg-[#F7F7F8] border border-[#F1F1F3] rounded-lg font-medium">
          Read More
        </button>
      </div>
    </div>
  );
}
