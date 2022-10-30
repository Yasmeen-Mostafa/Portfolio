import "./ProjectCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className="card__container">
      <div>
        <a target="_blank" href={project.link}>
          <figure>
            <img className="card__img" src={project.img} />
          </figure>
        </a>
        <a target="_blank" href={project.link}>
          <h2>
            {project.title} <FontAwesomeIcon icon={faLink} />
          </h2>
        </a>
      </div>
      <p className="card__description">{project.description}</p>
      <a target="_blank" href={project.repo}>
        <p>
          Repository <FontAwesomeIcon icon={faLink} />
        </p>
      </a>
      <div>
        <p>Technologies: </p>
        <div className="card__techns">
          {project.technologies.map((e, i) => (
            <figure key={i}>
              <img src={e} />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
