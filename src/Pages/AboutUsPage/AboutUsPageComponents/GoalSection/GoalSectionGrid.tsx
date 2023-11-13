import SectionCard from "../SectionCard";
import GoalContext from "./GoalContext";

export default function GoalSectionGrid() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-8">
      {GoalContext.map((el) => (
        <SectionCard
          key={el.id}
          img={el.img}
          title={el.title}
          context={el.context}
        />
      ))}
    </div>
  );
}
