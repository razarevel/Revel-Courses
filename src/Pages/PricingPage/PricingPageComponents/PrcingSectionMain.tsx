import FreePlanCard from "../../HomePage/homeComponents/PricingSection/FreePlanCard";
import ProPlanCard from "../../HomePage/homeComponents/PricingSection/ProPlanCard";

export default function PricingSectionMain() {
  return (
    <>
      <div className="px-2 lg:px-12 py-10  bg-white flex flex-col items-start justify-center md:flex-row md:space-x-6 rounded-lg shadow-md space-y-10 md:space-y-0 container mx-auto">
        <FreePlanCard />
        <ProPlanCard />
      </div>
    </>
  );
}
