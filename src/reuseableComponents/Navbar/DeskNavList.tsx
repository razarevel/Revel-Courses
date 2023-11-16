import { Link } from "react-router-dom";

export default function DeskNavList() {
  const navLinks = [
    { text: "Home", links: "/" },
    { text: "Courses", links: "/courses" },
    { text: "About Us", links: "/about" },
    { text: "Pricing", links: "/pricing" },
    { text: "Contact", links: "/contact" },
  ];
  return (
    <>
      <div className="flex items-center justify-between space-x-8">
        {navLinks.map((el, index) => (
          <Link
            to={el.links}
            className="group cursor-pointer space-y-1"
            key={index}
          >
            <p className="text-[1.2rem]">{el.text}</p>
            <div className="w-full h-0.5 bg-black rounded-full scale-x-0 duration-300 group-hover:scale-x-[80%]"></div>
          </Link>
        ))}
      </div>
    </>
  );
}
