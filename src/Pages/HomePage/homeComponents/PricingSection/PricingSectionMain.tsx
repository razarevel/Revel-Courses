import FreePlanCard from "./FreePlanCard";
import PricingHeading from "./PricingHeading";
import ProPlanCard from "./ProPlanCard";

export default function PricingSection() {
  return (
    <section id="pricing" className="mb-32">
      <div className="container mx-auto space-y-10">
        {/* heading */}
        <PricingHeading />
        {/* card container */}
        <div className="px-2 lg:px-12 py-10  bg-white flex flex-col items-start justify-center md:flex-row md:space-x-6 rounded-lg shadow-md space-y-10 md:space-y-0">
          <FreePlanCard />
          <ProPlanCard />
        </div>
      </div>
    </section>
  );
}
