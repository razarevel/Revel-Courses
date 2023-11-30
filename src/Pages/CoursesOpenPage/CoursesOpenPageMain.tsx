import useCounter from "../../Slug";
export default function CoursesOpenPageMain() {
  const { Slug } = useCounter();
  return <>Welcome to courses open page of {Slug}</>;
}
