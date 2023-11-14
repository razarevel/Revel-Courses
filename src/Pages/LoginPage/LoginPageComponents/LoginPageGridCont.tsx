import LoginHeaderCxard from "./LoginHeaderCard";
import LoginSection from "./LoginSection";

export default function LoginPageGridCon() {
  return (
    <div
      className="flex flex-col xl:flex-row space-y-14 xl:space-y-0 items-center justify-center xl:justify-between
     container mx-auto p-4 my-32 w-full xl:space-x-20"
    >
      <LoginHeaderCxard />
      <LoginSection />
    </div>
  );
}
