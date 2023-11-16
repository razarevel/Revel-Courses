import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(3, "Must have more than 3 characters")
    .max(10, "Must have less than 10 characters"),
  lastName: z.string().max(10, "Must have less than 10 characters"),
  mail: z
    .string()
    .min(3, "Email field must required")
    .max(20, "This is not a valid email"),
  phone: z.number({ invalid_type_error: "Please Enter Your number" }),
  subject: z.string().min(1, "You must specify the subjects"),
  Message: z.string().min(20, "Must type more than 20 words"),
});

type formData = z.infer<typeof schema>;
export default function ContactForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const OnSubmit = (data: FieldValues) => {
    console.log("Working");
    console.log(data);
  };
  return (
    <>
      <form
        className="lg:w-[70%] w-full space-y-4 md:space-y-10"
        onSubmit={handleSubmit(OnSubmit)}
      >
        {/* name */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between md:space-x-5">
          {/* first name */}
          <div className="flex flex-col w-full space-y-2 relative">
            <label htmlFor="firstName" className="font-medium text-lg">
              First Name
            </label>
            <input
              {...register("firstName")}
              name="firstName"
              id="firstName"
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none"
              placeholder="Enter First Name"
            />
            {errors.firstName && (
              <p className="md:absolute bottom-[-30%] left-[2%] opacity-60 italic">
                {errors.firstName.message}
              </p>
            )}
          </div>
          {/* last name */}
          <div className="flex flex-col w-full space-y-2 md:relative">
            <label htmlFor="lastName" className="font-medium text-lg">
              Last Name
            </label>
            <input
              {...register("lastName")}
              id="lastName"
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none"
              placeholder="Enter Last Name"
            />
            {errors.lastName && (
              <p className="md:absolute bottom-[-30%] left-[2%] opacity-60 italic">
                {errors.lastName?.message}
              </p>
            )}
          </div>
        </div>
        {/* Address */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between md:space-x-5">
          {/* Email */}
          <div className="flex flex-col w-full space-y-2 relative">
            <label htmlFor="mail" className="font-medium text-lg">
              Email
            </label>
            <input
              {...register("mail")}
              name="mail"
              id="mail"
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none"
              placeholder="Enter Your Email"
            />
            {errors.mail && (
              <p className="md:absolute bottom-[-30%] left-[2%] opacity-60 italic">
                {errors.mail.message}
              </p>
            )}
          </div>
          {/* Phone */}
          <div className="flex flex-col w-full space-y-2 relative">
            <label htmlFor="phone" className="font-medium text-lg">
              Phone
            </label>
            <input
              {...register("phone", { valueAsNumber: true })}
              type="number"
              id="phone"
              className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none remove-arrow"
              placeholder="Enter Phone Number"
            />
            {errors.phone && (
              <p className="md:absolute bottom-[-30%] left-[2%] opacity-60 italic">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
        {/* Subject */}
        <div className="flex flex-col w-full space-y-2 relative">
          <label htmlFor="subject" className="font-medium text-lg">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            name="subject"
            id="subject"
            className="border py-2 px-4 bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none remove-arrow"
            placeholder="Enter Name"
          />
          {errors.subject && (
            <p className="md:absolute bottom-[-30%] left-[2%] opacity-60 italic">
              {errors.subject.message}
            </p>
          )}
        </div>
        {/* message */}
        <div className="flex flex-col w-full space-y-2 relative">
          <label htmlFor="Message" className="font-medium text-lg">
            Message
          </label>
          <textarea
            {...register("Message")}
            rows={5}
            name="Message"
            id="Message"
            className="border py-2 px-4  bg-[#FCFCFD] border-[#F1F1F3] rounded-md focus:outline-none remove-arrow"
            placeholder="Enter Name"
          />
          {errors.Message && (
            <p className="absolute bottom-0 right-1 opacity-60 italic">
              {errors.Message.message}
            </p>
          )}
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
