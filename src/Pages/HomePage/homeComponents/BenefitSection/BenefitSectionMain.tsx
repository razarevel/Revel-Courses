import { useState } from "react";
import BenefitGrid from "./BenefitGrid";
import BenefitHeading from "./BenfitHeading";
export default function BenefitSectionMain() {
  const [show, setShow] = useState(false);
  return (
    <section id="bSection" className="space-y-10 container mx-auto mb-20 p-4">
      {/* header */}
      <BenefitHeading handleClick={() => setShow(!show)} show={show} />
      {/* BenefitGrid */}
      <BenefitGrid showAll={show} />
    </section>
  );
}
