import { useEffect, useState } from "react";
import CoursePageCard from "./CoursePageCard";
import axios from "axios";
interface Sections {
  leasson: number;
  heading: string;
  videos: any;
}
interface Prosp {
  _id: any;
  author: string;
  heading: string;
  images: string[];
  level: string;
  message: string;
  slug: string;
  weeks: string;
  sections: Sections[];
}
export default function CoursesPageGrid() {
  const [data, setData] = useState<Prosp[]>([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/api/courses/?fields=heading,message,%20images,slug,author,weeks,level,sections"
      )
      .then((res) => setData(res.data.data.course));
  }, []);
  return (
    <div className="container mx-auto flex flex-col space-y-14 items-start justify-center mt-32">
      {data.map((el) => (
        <CoursePageCard
          key={el._id}
          slug={el.slug}
          title={el.heading}
          description={el.message}
          img={el.images}
          weeks={el.weeks}
          level={el.level}
          instructor={el.author}
          Section={el.sections}
        />
      ))}
    </div>
  );
}
