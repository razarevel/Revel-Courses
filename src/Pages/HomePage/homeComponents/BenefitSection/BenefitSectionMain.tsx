import BenefitGrid from "./BenefitGrid";
import BenefitHeading from "./BenfitHeading";

export default function BenefitSectionMain() {
  return (
    <section id="bSection" className="space-y-10 container mx-auto mb-20 p-4">
      {/* header */}
      <BenefitHeading />
      {/* BenefitGrid */}
      <BenefitGrid />
    </section>
  );
}
