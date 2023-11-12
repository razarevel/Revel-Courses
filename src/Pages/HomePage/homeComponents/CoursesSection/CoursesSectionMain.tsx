import CoursesGrid from "./CoursesGrid";
import CoursesHeading from "./CoursesHeading";

export default function CoursesSectionMain() {
  return (
    <section id="cSection" className="p-4 space-y-10 mb-20">
      {/* heading */}
      <CoursesHeading />
      {/* courses gird */}
      <CoursesGrid />
    </section>
  );
}
