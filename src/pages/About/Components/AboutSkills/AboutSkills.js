import "./AboutSkills.scss";
import Skill from "../Skill/Skill";
import skills from "../../../../config/db/skills";
const AboutSkills = () => {
  return (
    <div className="about__skills">
      <h2 className="about__title">Skills</h2>
      <div className="skills__container">
        {skills.map((e, index) => (
          <Skill img={e} key={index} />
        ))}
      </div>
    </div>
  );
};
export default AboutSkills;
