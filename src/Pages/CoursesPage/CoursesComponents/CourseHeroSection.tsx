import CoursesPageGrid from "./CoursesPageGrid";

export default function CourseHeroSection() {
  return (
    <>
      <div className="pt-36 pb-28">
        <div className="container mx-auto flex flex-col md:flex-row md:space-y-0 md:justify-between space-y-6 px-4">
          <h1 className="w-[300px] sm:w-[350px] lg:w-auto text-2xl lg:text-3xl xl:text-4xl 2xl:w-[40%] font-semibold">
            Online Courses on Design and Developement
          </h1>
          <p className="md:w-[50%]">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
        {/* courses */}
        <CoursesPageGrid />
      </div>
    </>
  );
}
