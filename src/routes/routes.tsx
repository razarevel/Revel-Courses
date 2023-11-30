import { createBrowserRouter } from "react-router-dom";
import HomePageMain from "../Pages/HomePage/HomPageMain";
import CoursesPageMain from "../Pages/CoursesPage/CoursesPageMain";
import CoursesOpenPageMain from "../Pages/CoursesOpenPage/CoursesOpenPageMain";
import AboutUsPageMain from "../Pages/AboutUsPage/AboutUsPageMain";
import LoginPageMain from "../Pages/LoginPage/LoginPageMain";
import PricingPageMain from "../Pages/PricingPage/PricingPageMain";
import ContactPageMain from "../Pages/ContactPage/ContactPageMain";

const routers = createBrowserRouter([
  { path: "/", element: <HomePageMain /> },
  { path: "/courses", element: <CoursesPageMain /> },
  { path: "/courses/:slug", element: <CoursesOpenPageMain /> },
  { path: "/about", element: <AboutUsPageMain /> },
  { path: "/pricing", element: <PricingPageMain /> },
  { path: "/contact", element: <ContactPageMain /> },
  { path: "/login", element: <LoginPageMain /> },
]);
export default routers;
