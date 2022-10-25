import "./Resume.scss";
import ResumeExperience from "./Components/ResumeExperience/ResumeExperience";
import education from "../../config/db/experience";
const Resume = () => {
  return (
    <section className="resume">
      <h2 className="resume__title">Education</h2>
      <div className="resume__container">
        {education.map((e, i) => (
          <ResumeExperience experience={e} key={i} />
        ))}
      </div>
    </section>
  );
};
export default Resume;
