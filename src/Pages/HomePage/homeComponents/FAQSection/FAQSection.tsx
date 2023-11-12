import FAQContQes from "./FAQContQes";

export default function FAQSection() {
  return (
    <section id="FAQ">
      <div className="flex flex-col items-center justify-center mb-20">
        <div
          className="bg-white container  flex justify-center flex-col items-center px-6 py-20 space-y-20 
        lg:flex-row lg:items-start lg:space-y-0 lg:px-14"
        >
          {/* Heading */}
          <div className="lg:w-[40%] text-center lg:text-start space-y-6">
            <h1 className="text-4xl font-semibold">
              Frequently Asked Question
            </h1>
            <p>
              Still you have any question? Contact our Team via
              razarevel@gmail.com
            </p>
            <button className="px-4 py-2 border cursor-pointer hover:text-white hover:bg-[#FF9500] duration-300 rounded-md">
              See All FAQ's
            </button>
          </div>
          {/* Context */}
          <FAQContQes />
        </div>
      </div>
    </section>
  );
}
