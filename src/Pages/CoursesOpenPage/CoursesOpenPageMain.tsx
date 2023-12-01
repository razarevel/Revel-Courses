import { useEffect } from "react";
import useCounter from "../../Slug";
import axios from "axios";
import img from "./CoursesOpenPageComponents/igor-miske-Px3iBXV-4TU-unsplash.jpg";
export default function CoursesOpenPageMain() {
  const { Slug } = useCounter();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/courses/${Slug}`)
      .then((res) => console.log(res.data.data.course));
  }, []);
  return (
    <div className="">
      <img src={""} alt="" className="w-[70%]" />
    </div>
  );
}
