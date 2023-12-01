import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { z } from "zod";
interface Data {
  name: string;
  email: string;
  password: string;
  passwordConform: string;
}
const schema = z.object({
  name: z
    .string()
    .min(1, "PLease Enter your name")
    .max(20, "Full name can't be greater than 4"),
  email: z.string().min(1, "Please Enter your Email"),
  password: z.string().min(1, "Please Enter your Password"),
  passwordConform: z.string().min(1, "Please Enter Conform your Password"),
});
type formData = z.infer<typeof schema>;

export default function SignupCard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState<Data>();
  const [exist, setExist] = useState(false);
  const [sent, setSend] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  useEffect(() => {
    if (sent) {
      setIsLoading(true);
      axios
        .post("http://127.0.0.1:3001/api/signup", data)
        .then((res) => {
          setExist(false);
          localStorage.setItem("token", res.data.Token);
          setIsSignUp(true);
        })
        .catch((err) => {
          console.log(err.response.data);
          setIsLoading(false);
          setExist(true);
        });
      setSend(false);
    }
  }, [sent]);
  const [showAgreeErr, setShowAgreeErr] = useState(false);
  console.log(isValid, agree);
  if (isSignup) {
    return <Navigate to={"/courses"} />;
  }
  return (
    <div className="bg-white p-4 sm:p-5 md:p-10 rounded-lg xl:w-[60%] shadow-sm">
      {/* heading */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold">SignUp</h1>
        <p>Welcome! Please Sign up to gain access to any course.</p>
      </div>
      {/* form */}
      <form
        onSubmit={handleSubmit((data) => {
          if (agree) {
            if (data.password !== data.passwordConform)
              return setPassCheck(true);
            else {
              setPassCheck(false);
              setData(data);
              setShowAgreeErr(false);
              setSend(!sent);
              return;
            }
          } else setShowAgreeErr(true);
        })}
      >
        {/* full Name */}
        <div className="space-y-2.5 mt-8">
          <label className="text-lg" htmlFor="name">
            Full Name
          </label>
          <input
            {...register("name")}
            type="name"
            name="name"
            id="name"
            className="focus:outline-none border border-[F1F1F3] bg-[#FCFCFD] w-full rounded-lg h-12 px-5"
            placeholder="Enter your Full Name"
          />
          {errors.name && (
            <p className="opacity-80 italic translate-x-2 -translate-y-2">
              {errors.name?.message}
            </p>
          )}
        </div>
        {/* Email */}
        <div className="space-y-2.5 mt-8">
          <label className="text-lg" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="focus:outline-none border border-[F1F1F3] bg-[#FCFCFD] w-full rounded-lg h-12 px-5"
            placeholder="Enter your Email"
          />
          {errors.email && (
            <p className="opacity-80 italic translate-x-2 -translate-y-2">
              {errors.email.message}
            </p>
          )}
          {exist && (
            <p className="opacity-80 italic translate-x-2 -translate-y-2">
              Email Already Exist Please Login in
            </p>
          )}
        </div>
        {/* Password */}
        <div className="space-y-2.5 mt-5">
          <label className="text-lg" htmlFor="password">
            Password
          </label>
          <div className="border border-[F1F1F3] bg-[#FCFCFD] w-full rounded-lg h-12 px-5 flex items-center justify-between">
            <input
              {...register("password")}
              type={!showPass ? "password" : "text"}
              name="password"
              id="password"
              className="focus:outline-none "
              placeholder="Enter your password"
            />
            <div
              className="cursor-pointer relative flex items-center justify-center"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {!showPass ? (
                <FaEye className="absolute scale-110" />
              ) : (
                <FaEyeSlash className="absolute scale-110" />
              )}
            </div>
          </div>
          {errors.password && (
            <p className="opacity-80 italic translate-x-2 -translate-y-2">
              {errors.password.message}
            </p>
          )}
        </div>
        {/* confrom password */}
        <div className="space-y-2.5 mt-5">
          <label className="text-lg" htmlFor="passwordConform">
            Conform Password
          </label>
          <div className="border border-[F1F1F3] bg-[#FCFCFD] w-full rounded-lg h-12 px-5 flex items-center justify-between">
            <input
              {...register("passwordConform")}
              type={!showPass ? "password" : "text"}
              name="passwordConform"
              id="passwordConform"
              className="focus:outline-none "
              placeholder="Re-enter  your password"
            />
            <div
              className="cursor-pointer relative flex items-center justify-center"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {!showPass ? (
                <FaEye className="absolute scale-110" />
              ) : (
                <FaEyeSlash className="absolute scale-110" />
              )}
            </div>
          </div>
          {errors.passwordConform && (
            <p className="opacity-80 italic translate-x-2 -translate-y-2">
              {errors.passwordConform?.message}
            </p>
          )}
          {passCheck && (
            <p className="opacity-80 italic translate-x-2 -translate-y-2">
              Conform password isn't the same as password
            </p>
          )}
        </div>

        {/*checkbox  */}
        <div className="space-x-2 flex items-center justify-start pt-6">
          <input
            onChange={() => {
              setAgree(!agree);
              setShowAgreeErr(false);
            }}
            checked={agree}
            type="checkbox"
            className="focus:outline-none ring-0 border-0 outline-none w-5 h-5  cursor-pointer opacity-70"
          />
          <label className="font-medium opacity-60">
            <p>
              I agree with <span className="underline">Terms of Use</span> and{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </label>
        </div>
        {showAgreeErr && (
          <p className="opacity-80 italic translate-x-2 -translate-y-2 pt-3">
            Please click on agree to continous
          </p>
        )}
        {/* login button */}
        <button
          type="submit"
          disabled={isValid && agree && !isLoading ? false : true}
          className={`w-full text-center py-3 bg-[#FF9500] text-white flex items-center justify-center rounded-lg mt-5 duration-300 ${
            (isValid && agree) || isLoading
              ? " opacity-100 hover:opacity-80 "
              : " opacity-70 cursor-not-allowed "
          }  text-lg font-medium`}
        >
          {!isLoading ? (
            <p>Sign up</p>
          ) : (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </form>
      {/* or */}
      <div className="w-full flex items-center justify-center space-x-2 mt-5 opacity-70">
        <div className="w-full border-t"></div>
        <p className="font-medium opacity-50 cursor-default">OR</p>
        <div className="w-full border-t"></div>
      </div>
      {/* login with google */}
      <div className="w-full flex items-center justify-center py-3 bg-[#F7F7F8] brorder border-[#F1F1F3]  rounded-lg mt-5 space-x-3 cursor-pointer">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            width="40px"
            height="40px"
            baseProfile="basic"
          >
            <path
              d="M107.145,55H100H87.569H60v18h27.569c-1.852,5.677-5.408,10.585-10.063,14.118 C72.642,90.809,66.578,93,60,93c-12.574,0-23.278-8.002-27.299-19.191C31.6,70.745,31,67.443,31,64 c0-3.839,0.746-7.505,2.101-10.858C37.399,42.505,47.823,35,60,35c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,20.969,72.736,16,60,16c-18.422,0-34.419,10.377-42.466,25.605C14,48.291,12,55.912,12,64c0,7.882,1.9,15.32,5.267,21.882 C25.223,101.389,41.372,112,60,112c12.382,0,23.668-4.688,32.182-12.386C101.896,90.831,108,78.128,108,64 C108,60.922,107.699,57.917,107.145,55z"
              opacity=".35"
            />
            <path
              fill="#44bf00"
              d="M17.267,81.882C25.223,97.389,41.372,108,60,108c12.382,0,23.668-4.688,32.182-12.386L77.506,83.118 C72.642,86.809,66.577,89,60,89c-12.574,0-23.278-8.002-27.299-19.191L17.267,81.882z"
            />
            <path
              d="M77.506,83.118c-0.684,0.553-1.685,1.158-2.398,1.638l14.711,12.846 c0.807-0.641,1.6-1.298,2.363-1.988L77.506,83.118z"
              opacity=".35"
            />
            <path
              fill="#0075ff"
              d="M92.182,95.614C101.896,86.83,108,74.128,108,60c0-3.078-0.301-6.083-0.855-9H100H87.569H60v18 h27.569c-1.852,5.677-5.408,10.585-10.063,14.118L92.182,95.614z"
            />
            <path
              d="M32.701,69.809L17.267,81.882c0.486,0.948,1.004,1.877,1.551,2.787l15.3-11.576 C33.63,72.181,33.05,70.804,32.701,69.809z"
              opacity=".35"
            />
            <path
              fill="#ffc400"
              d="M17.267,81.882C13.9,75.32,12,67.882,12,60c0-8.088,2-15.709,5.534-22.395l15.568,11.537 C31.746,52.496,31,56.161,31,60c0,3.443,0.6,6.745,1.701,9.809L17.267,81.882z"
            />
            <path
              d="M17.534,37.605c-0.482,0.844-1.169,2.36-1.564,3.251l16.059,11.491 c0.299-1.095,0.653-2.167,1.072-3.205L17.534,37.605z"
              opacity=".35"
            />
            <path
              fill="#ff1200"
              d="M33.101,49.142C37.399,38.505,47.823,31,60,31c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,16.969,72.736,12,60,12c-18.422,0-34.419,10.377-42.466,25.605L33.101,49.142z"
            />
          </svg>
        </div>
        <p className="font-medium">Sign up with Google</p>
      </div>
      {/* Sign up */}
      <div className="w-full flex items-center justify-center space-x-1 mt-5 cursor-pointer group">
        <p className="cursor-pointer opacity-90">Already have an account</p>
        <div className="flex items-center justify-center cursor-pointer  opacity-90">
          <Link to={"/login"} className="font-medium underline">
            Login
          </Link>
          <Link to={"/login"}>
            <MdArrowOutward
              size="24"
              className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
