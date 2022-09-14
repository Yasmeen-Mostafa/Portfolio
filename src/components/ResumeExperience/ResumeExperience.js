import React from "react";
import "./ResumeExperience.scss";
const ResumeExperience = (props) => {
  return (
    <div className="resume__experience">
      <div className="resume__left">
        <h3 className="resume__location">{props.experience.location}</h3>
        <p>{props.experience.date}</p>
      </div>
      <div className="resume__shape">
        <div className="large__circle">
          <div className="small__circle"></div>
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="resume__right">
        <h3 className="resume__position">{props.experience.position}</h3>
        <p>{props.experience.details}</p>
      </div>
    </div>
  );
};
export default ResumeExperience;
