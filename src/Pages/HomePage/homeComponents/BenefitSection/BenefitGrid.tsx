import BenefitCart from "./BenefitCard";
import BenefitContext from "./BenefitContext";

export default function BenefitGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {BenefitContext.map((el) => (
        <BenefitCart
          key={el.id}
          number={el.id}
          title={el.title}
          description={el.description}
        />
      ))}
    </div>
  );
}
