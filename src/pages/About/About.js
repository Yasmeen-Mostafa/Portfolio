import "./About.scss";
import AboutSummary from "./Components/AboutSummary/AboutSummary";
import AboutInfo from "./Components/AboutInfo/AboutInfo";
import AboutSkills from "./Components/AboutSkills/AboutSkills";
const About = () => {
  return (
    <section className="about">
      <AboutSummary />
      <div className="about__container">
        <AboutInfo />
        <AboutSkills />
      </div>
    </section>
  );
};
export default About;
