import React from "react";
import "./About.scss";
import AboutSummary from "../../components/AboutSummary/AboutSummary";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import AboutSkills from "../../components/AboutSkills/AboutSkills";
const About = () => {
  return (
    <section className="about">
      <AboutSummary></AboutSummary>
      <div className="about__container">
        <AboutInfo></AboutInfo>
        <AboutSkills></AboutSkills>
      </div>
    </section>
  );
};
export default About;
