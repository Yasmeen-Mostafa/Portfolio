import "./Projects.scss";
import projectsData from "../../config/db/projects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 660 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 660, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects__title animate__animated animate__fadeInDown">
        Projects
      </h2>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-100-px"
      >
        {projectsData.map((e, i) => (
          <ProjectCard project={e} key={i} />
        ))}
      </Carousel>
    </div>
  );
};
export default Projects;
