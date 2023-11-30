import { useEffect, useState } from "react";
import CoursesCard from "./CoursesCard";
import axios from "axios";
interface data {
  images: string[];
  author: string;
  weeks: string;
  level: string;
  heading: string;
  message: string;
  slug: string;
  _id: any;
}
export default function CoursesGrid() {
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:3001/api/courses/?fields=heading,message,author,weeks,images,level,slug"
      )
      .then((res) => setData(res.data.data.course));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6">
      {data.map((el) => (
        <CoursesCard
          key={el._id}
          img={el.images[1]}
          slug={el.slug}
          weeks={el.weeks}
          level={el.level}
          instructor={el.author}
          title={el.heading}
          description={el.message}
        />
      ))}
    </div>
  );
}
