import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Projects = lazy(() => import("../../pages/Projects/Projects"));
const Resume = lazy(() => import("../../pages/Resume/Resume"));
const ContactMe = lazy(() => import("../../pages/ContactMe/ContactMe"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contactme" element={<ContactMe />} />
    </Routes>
  );
};
export default AppRoutes;
