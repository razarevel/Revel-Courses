import HeroGrid from "./HeroGrid";
import HeroHeading from "./HeroHeading";
import HeroImage from "./HeroImage";

export default function HeroSectionMain() {
  return (
    <section id="hSection" className="py-40 space-y-36">
      <HeroHeading />
      <HeroGrid />
      <HeroImage />
    </section>
  );
}
