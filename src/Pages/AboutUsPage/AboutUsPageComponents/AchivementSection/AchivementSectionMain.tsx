import SectionGridContainer from "../SectionGridContainer";
import SectionHeading from "../SectionHeadings";
const achiveheadin = {
  title: "Achivement",
  description: `Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements`,
};
export default function AchivementSectionMain() {
  return (
    <section id="achivement" className="space-y-3">
      {/* heading */}
      <SectionHeading
        title={achiveheadin.title}
        description={achiveheadin.description}
      />
      {/* gird */}
      <SectionGridContainer />
    </section>
  );
}
