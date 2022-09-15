import React from "react";
import "./Resume.scss";
import ResumeExperience from "../../components/ResumeExperience/ResumeExperience";
let education = [
  {
    location: "Information Technology Institute",
    date: "Mar 2022 - Aug 2022",
    position: "Front-End & Cross-Platform Mobile Developer",
    details: [
      "Technologies: Reactjs, Angular, JavaScript, TypeScript, HTML5, CSS3, SASS, Bootstrap, C++, Git",
    ],
  },
  {
    location: "Alexandria University",
    date: "Sep 2016 - Jun 2021",
    position: "B.Sc. Degree In Computer and Communication Engineering",
    details: [
      " Graduated with overall 2.6 GPA.",
      " Graduation Project: COVID-19 Nurse Robot",
      " Project Grade: Excellant",
    ],
  },
];
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
