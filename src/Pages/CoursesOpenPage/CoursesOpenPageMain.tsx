import { useEffect, useState } from "react";
import useCounter from "../../Slug";
import axios from "axios";
import Navbar from "../../reuseableComponents/Navbar/NavbarMain";
import Footer from "../../reuseableComponents/Footer/Footer";
import CoursesOpenHeading from "./CoursesOpenPageComponents/CoursesOpenHeading";
import CoursesOpenVideo from "./CoursesOpenPageComponents/CoursesOpenVideo";
import CoursesOpenGrid from "./CoursesOpenPageComponents/CourseOpenGrid";
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
  _id: any;
  heading: string;
  slug: string;
  author: string;
  mainImage: string;
  level: string;
  weeks: string;
  images: string[];
  message: string;
  description: string;
  sections: Sections[];
}
export default function CoursesOpenPageMain() {
  const { Slug, setSlug } = useCounter();
  const [data, setData] = useState<Props | any>();
  if (!Slug) {
    if (localStorage.getItem("slug")) setSlug(localStorage.getItem("slug"));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/courses/${Slug}`)
      .then((res) => setData(res.data.data.course));
  }, []);
  return (
    <div className="bg-[#F7F7F8]">
      <Navbar />
      <CoursesOpenHeading
        heading={data?.heading}
        description={data?.description}
      />
      <CoursesOpenVideo mainIamge={data?.mainImage} />
      <CoursesOpenGrid sections={data?.sections} />
      <Footer />
    </div>
  );
}
