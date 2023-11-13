import CoursePageCard from "./CoursePageCard";
import CoursesGridContext from "./CoursesGridContext";

export default function CoursesPageGrid() {
  return (
    <div className="container mx-auto flex flex-col space-y-14 items-start justify-center mt-32">
      {CoursesGridContext.map((el) => (
        <CoursePageCard
          key={el.id}
          title={el.title}
          description={el.description}
          img={el.img}
          weeks={el.weeks}
          level={el.level}
          instructor={el.instructor}
          Section={el.Section}
        />
      ))}
    </div>
  );
}
