import TestimonialContext from "./TestimonialContext";
import TestimonialgridCard from "./TestimonialgridCard";

export default function TestimonialSectionMain() {
  return (
    <section id="testimonial" className="p-4 space-y-14 mb-14">
      {/* heading */}
      <div className="flex flex-col space-y-3 container mx-auto">
        <h1 className="text-xl md:text-3xl font-semibold">Our Testimonials</h1>
        <p className="md:w-[80%] lg:w-[60%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus officiis sint saepe velit ut exercitationem culpa
          distinctio aut facere. Unde.
        </p>
      </div>
      {/* testimonial container */}
      <div className="grid gird-cols-1 md:grid-cols-2 container mx-auto gap-6 ">
        {TestimonialContext.map((el) => (
          <TestimonialgridCard
            name={el.name}
            heading={el.heading}
            img={el.img}
            key={el.id}
          />
        ))}
      </div>
    </section>
  );
}
