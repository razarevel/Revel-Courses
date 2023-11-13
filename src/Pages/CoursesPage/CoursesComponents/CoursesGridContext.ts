// first
import imgfirst1 from "../../../assets/CoursesPagePNG/first/Image.png";
import imgfirst2 from "../../../assets/CoursesPagePNG/first/Image (1).png";
import imgfirst3 from "../../../assets/CoursesPagePNG/first/Image (2).png";
// Second
import imgSec1 from "../../../assets/CoursesPagePNG/Second/Image.png";
import imgSec2 from "../../../assets/CoursesPagePNG/Second/Image 2.png";
import imgSec3 from "../../../assets/CoursesPagePNG/Second/Image 3.png";
// third
import imgThird1 from "../../../assets/CoursesPagePNG/third/Image.png";
import imgThird2 from "../../../assets/CoursesPagePNG/third/Image (1).png";
import imgThird3 from "../../../assets/CoursesPagePNG/third/Image (2).png";
// fourth
import imgfour1 from "../../../assets/CoursesPagePNG/four/Image.png";
import imgfour2 from "../../../assets/CoursesPagePNG/four/Image (1).png";
import imgfour3 from "../../../assets/CoursesPagePNG/four/Image (2).png";
// fiveth
import imgfive1 from "../../../assets/CoursesPagePNG/five/Image.png";
import imgfive2 from "../../../assets/CoursesPagePNG/five/Image (1).png";
import imgfive3 from "../../../assets/CoursesPagePNG/five/Image (2).png";
// Sixth
import imgSix1 from "../../../assets/CoursesPagePNG/six/Image.png";
import imgSix2 from "../../../assets/CoursesPagePNG/six/Image 2.png";
import imgSix3 from "../../../assets/CoursesPagePNG/six/Image 3.png";
const CoursesGridContext = [
  {
    id: 1,
    title: "Web Design Fundatements",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    img: [imgfirst1, imgfirst2, imgfirst3],
    weeks: 4,
    level: "Beginner",
    instructor: "Revel",
    Section: [
      { number: 1, title: "Instroduction to HTML" },
      { number: 2, title: "Styling with CSS" },
      { number: 3, title: "Introduction to Responsiver" },
      { number: 4, title: "Design Principle for Web" },
      { number: 5, title: "Building a Basic Website" },
    ],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    img: [imgSec1, imgSec2, imgSec3],
    weeks: 6,
    level: "Intermediate",
    instructor: "Revel",
    Section: [
      { number: 1, title: "Introduction to UI/UX Design" },
      { number: 2, title: "User Research and Person" },
      { number: 3, title: "Wireframming and Protyping" },
      { number: 4, title: "Visual Design and Branding" },
      { number: 5, title: "Usability Testing and Iteration" },
    ],
  },
  {
    id: 3,
    title: "Mobile Developement",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    img: [imgThird1, imgThird2, imgThird3],
    weeks: 8,
    level: "Intermediate",
    instructor: "Revel",
    Section: [
      { number: 1, title: "Instruction to Mobile App Developement" },
      { number: 2, title: "Fundament of Swift Programming (IOS)" },
      { number: 3, title: "Fundament of Kotlin Programming (Android)" },
      { number: 4, title: "Building User interface" },
      { number: 5, title: "App Deployment and Testing" },
    ],
  },
  {
    id: 4,
    title: "Graphics Design for Beginner",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    img: [imgfour1, imgfour2, imgfour3],
    weeks: 10,
    level: "Beginnger",
    instructor: "Revel",
    Section: [
      { number: 1, title: "Introduction to Graphics Design" },
      { number: 2, title: "Typography and Color Theory" },
      { number: 3, title: "Layout Design and Composition" },
      { number: 4, title: "Image Editing and" },
      { number: 5, title: "Designing for Print and Digital Media" },
    ],
  },
  {
    id: 5,
    title: "Front-End Web Developement",
    description:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    img: [imgfive1, imgfive2, imgfive3],
    weeks: 10,
    level: "Beginner",
    instructor: "Revel",
    Section: [
      { number: 1, title: "HTML Fundamentals" },
      { number: 2, title: "CSS Styling and Layouts" },
      { number: 3, title: "JavaScript Basics" },
      { number: 4, title: "Building Responsive Websites" },
      { number: 5, title: "Introduction to Bootstrap and React" },
    ],
  },
  {
    id: 6,
    title: "Advance JavaScript",
    description:
      "Become proficient in full stack developement. Learn the advance topic of JavaScript and popular frameworks node js and database mongodb. Build interactive, scalable and fast websites.",
    img: [imgSix1, imgSix2, imgSix3],
    weeks: 10,
    level: "Beginnger",
    instructor: "Revel",
    Section: [
      { number: 1, title: "Introduction to Oject Oriented Programming" },
      { number: 2, title: "Advance topics of OOP" },
      { number: 3, title: "Introduction to node js" },
      { number: 4, title: "Mongodb fundementals" },
      { number: 5, title: "Builing a real world project" },
    ],
  },
];
export default CoursesGridContext;
