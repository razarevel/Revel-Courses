import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
export default function LoginSection() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="bg-white p-4 sm:p-5 md:p-10 rounded-lg xl:w-[60%] shadow-sm">
      {/* heading */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold">Login</h1>
        <p>Welcome back! Please log in to access your account.</p>
      </div>
      {/* form */}
      <div className="space-y-2.5 mt-8">
        <p className="text-lg">Email</p>
        <input
          type="email"
          className="focus:outline-none border border-[F1F1F3] bg-[#FCFCFD] w-full rounded-lg h-12 px-5"
          placeholder="Enter your Email"
        />
      </div>
      {/* Password */}
      <div className="space-y-2.5 mt-5">
        <p className="text-lg">Password</p>
        <div className="border border-[F1F1F3] bg-[#FCFCFD] w-full rounded-lg h-12 px-5 flex items-center justify-between">
          <input
            type={!showPass ? "password" : "text"}
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
      </div>
      {/* forget */}
      <div className="w-full opacity-80 mt-3 flex items-center justify-end">
        <p className="cursor-pointer hover:underline">Forget Password?</p>
      </div>
      {/*checkbox  */}
      <div className="space-x-2 flex items-center justify-start ">
        <input
          type="checkbox"
          className="focus:outline-none ring-0 border-0 outline-none w-5 h-5  cursor-pointer opacity-70"
        />
        <label className="font-medium opacity-60">Remember me</label>
      </div>
      {/* login button */}
      <button
        type="submit"
        className="w-full text-center py-3 bg-[#FF9500] text-white  rounded-lg mt-5 duration-300 hover:opacity-80 text-lg font-medium"
        onClick={() => window.location.reload()}
      >
        Login
      </button>
      {/* or */}
      <div className="w-full flex items-center justify-center space-x-2 mt-5 opacity-70">
        <div className="w-full border-t"></div>
        <p className="font-medium opacity-50 cursor-default">OR</p>
        <div className="w-full border-t"></div>
      </div>
      {/* login with google */}
      <div
        className="w-full flex items-center justify-center py-3 bg-[#F7F7F8] brorder border-[#F1F1F3]  rounded-lg mt-5 space-x-3 cursor-pointer"
        onClick={() => window.location.reload()}
      >
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
        <p className="font-medium">Login with Google</p>
      </div>
      {/* Sign up */}
      <div className="w-full flex items-center justify-center space-x-1 mt-5 cursor-pointer group">
        <p className="cursor-pointer opacity-90">Don't have an account?</p>
        <div className="flex items-center justify-center cursor-pointer  opacity-90">
          <p className="font-medium underline">SignUp</p>
          <MdArrowOutward
            size="24"
            className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
          />
        </div>
      </div>
    </div>
  );
}
