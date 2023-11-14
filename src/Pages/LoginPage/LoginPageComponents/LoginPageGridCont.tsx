import LoginSection from "./LoginSection";

export default function LoginPageGridCon() {
  return (
    <div
      className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 items-center justify-center lg:justify-between
     container mx-auto p-4 my-32 w-full lg:space-x-10"
    >
      <div>tiems</div>
      <LoginSection />
    </div>
  );
}
