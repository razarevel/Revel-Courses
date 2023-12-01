import CoursesOpenCard from "./CoursesOpenCard";

interface Videos {
  id: number;
  heading: string;
  duration: string;
  context: string;
  _id: any;
}
interface Sections {
  id: number;
  heading: string;
  videos: Videos[];
}
interface Props {
  sections: Sections[] | any;
}
export default function CoursesOpenGrid({ sections }: Props) {
  return (
    <>
      <div className="container mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections?.map((el: Sections, index: number) => (
            <CoursesOpenCard
              key={index}
              id={index + 1}
              heading={el.heading}
              videos={el.videos}
            />
          ))}
        </div>
      </div>
    </>
  );
}
