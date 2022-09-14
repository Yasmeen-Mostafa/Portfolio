import React from "react";
import "./AboutSkills.scss";
import Skill from "../Skill/Skill";
import html from "../../assets/Images/skills/html5.png";
import css from "../../assets/Images/skills/css3.png";
import javascript from "../../assets/Images/skills/javascript.png";
import reactjs from "../../assets/Images/skills/reactjs.png";
import bootstrap from "../../assets/Images/skills/bootstrap.png";
import git from "../../assets/Images/skills/git.png";
import sass from "../../assets/Images/skills/sass.png";
import typescript from "../../assets/Images/skills/typescript.png";

const skills = [
  reactjs,
  javascript,
  typescript,
  html,
  css,
  sass,
  bootstrap,
  git,
];
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
