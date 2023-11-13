import SectionCard from "./SectionCard";
import achiveSecContext from "./AchivementSection/achiveSecContext";

export default function SectionGridContainer() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-8">
      {achiveSecContext.map((el) => (
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
