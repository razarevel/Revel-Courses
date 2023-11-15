import formContext from "./ContactFormContext";
export default function ContactFormCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:grid-cols-1 lg:w-[30%] space-y-3 text-center">
        {formContext.map((el) => (
          <div className="px-3 py-8 bg-[#FCFCFD] border border-[#F1F1F3] flex flex-col items-center justify-center space-y-5 rounded-lg">
            <div className="flex space-x-3">
              {el.Icon.map((el) => (
                <a
                  href={el.link}
                  target={el.link && "_blank"}
                  className="w-11 h-11 bg-[#F7F7F8] border border-[#F1F1F3] flex items-center justify-center rounded-md duration-300 hover:bg-[#FF9500]"
                >
                  <img src={el.img} alt="" />
                </a>
              ))}
            </div>
            <p className="font-medium opacity-80">{el.context}</p>
          </div>
        ))}
      </div>
    </>
  );
}
