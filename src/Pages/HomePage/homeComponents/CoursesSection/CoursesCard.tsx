import { Link } from "react-router-dom";
import useCounter from "../../../../Slug";
interface Props {
  img: string;
  weeks: string;
  level: string;
  instructor: string;
  title: string;
  description: string;
  slug: string;
}
export default function CoursesCard({
  img,
  weeks,
  level,
  instructor,
  title,
  description,
  slug,
}: Props) {
  const { Slug, setSlug } = useCounter();
  return (
    <>
      <div className="flex flex-col px-4 py-6 bg-white rounded-lg space-y-6">
        {/* img */}
        <img src={img} alt="" />
        {/* heading */}
        <div className="flex flex-col items-start justify-start space-y-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex space-x-3">
            <div className="border px-3.5 py-1 opacity-80">{weeks} Weeks</div>
            <div className="border px-3.5 py-1 opacity-80">{level}</div>
          </div>
          <p className="text-lg font-medium">By {instructor}</p>
        </div>
        {/* context */}
        <div className="space-y-3">
          <h1 className="text-2xl font-[600]">{title}</h1>
          <p className="font-[450]">{description}</p>
        </div>
        {/* button */}
        <Link
          to={`/courses/:${slug}`}
          className="bg-[#F7F7F8] border border-[#F1F1F3]  text-center py-2 font-medium rounded-lg hover:border-black hover:bg-white duration-300"
          onClick={() => {
            setSlug(slug);
          }}
        >
          Get it Now
        </Link>
      </div>
    </>
  );
}
