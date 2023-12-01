interface Props {
  heading: string | any;
  description: string | any;
}
export default function CoursesOpenHeading({ heading, description }: Props) {
  return (
    <div
      className="container mx-auto flex flex-col items-center justify-between my-28 space-y-10 text-center md:text-start md:px-4
    md:flex-row md:space-y-0
    "
    >
      <h1 className="text-2xl lg:text-3xl font-semibold md:w-[50%]">
        {heading}
      </h1>
      <p className="mx-4 md:mx-auto md:w-[50%]">{description}</p>
    </div>
  );
}
