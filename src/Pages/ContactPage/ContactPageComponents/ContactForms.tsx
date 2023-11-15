import { FormEvent } from "react";

export default function ContactForms() {
  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="lg:w-[70%] w-full space-y-4" onSubmit={handleSumbit}>
        {/* name */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between md:space-x-5">
          {/* first name */}
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="name" className="font-medium text-lg">
              First Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none"
              placeholder="Enter Name"
            />
          </div>
          {/* last name */}
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="name" className="font-medium text-lg">
              Second Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none"
              placeholder="Enter Name"
            />
          </div>
        </div>
        {/* Address */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between md:space-x-5">
          {/* first name */}
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="email" className="font-medium text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none"
              placeholder="Enter Name"
            />
          </div>
          {/* last name */}
          <div className="flex flex-col w-full space-y-2">
            <label htmlFor="number" className="font-medium text-lg">
              Phone
            </label>
            <input
              type="number"
              name="number"
              id=""
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none remove-arrow"
              placeholder="Enter Name"
            />
          </div>
        </div>
        {/* Subject */}
        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="subject" className="font-medium text-lg">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id=""
            className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none remove-arrow"
            placeholder="Enter Name"
          />
        </div>
        {/* message */}
        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="message" className="font-medium text-lg">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            id=""
            className="border py-2 px-4  bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none remove-arrow"
            placeholder="Enter Name"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#FF9500] w-full sm:w-auto px-4 text-center rounded-md py-3 font-medium text-white duration-300 hover:opacity-80"
          >
            Send Your Messge
          </button>
        </div>
      </form>
    </>
  );
}
