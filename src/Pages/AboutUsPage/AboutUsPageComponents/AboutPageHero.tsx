export default function AboutPageHero() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row md:space-y-0 md:justify-between space-y-6 px-4 mt-48 mb-24">
        <h1 className="w-[300px] sm:w-[350px] lg:w-auto text-2xl lg:text-3xl xl:text-4xl 2xl:w-[40%] font-semibold">
          About Revel
        </h1>
        <p className="md:w-[50%]">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
    </>
  );
}
