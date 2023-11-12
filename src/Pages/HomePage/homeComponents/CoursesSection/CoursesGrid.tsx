import CoursesCard from "./CoursesCard";
import CoursesContext from "./CoursesContext";

export default function CoursesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6">
      {CoursesContext.map((el) => (
        <CoursesCard
          key={el.id}
          img={el.img}
          weeks={el.week}
          level={el.level}
          instructor={el.intructor}
          title={el.title}
          description={el.description}
        />
      ))}
    </div>
  );
}
