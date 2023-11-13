import SectionHeading from "../SectionHeadings";
import GoalSectionGrid from "./GoalSectionGrid";
const goalContext = {
  title: "Goal",
  description: `At Revel, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
  Through our carefully crafted courses, we aim to`,
};
export default function GoalSectionMain() {
  return (
    <section id="achivement" className="space-y-3">
      {/* heading */}
      <SectionHeading
        title={goalContext.title}
        description={goalContext.description}
      />
      {/* gird */}
      <GoalSectionGrid />
    </section>
  );
}
