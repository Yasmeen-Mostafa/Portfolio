import React from "react";
import "./ResumeExperience.scss";
const ResumeExperience = (props) => {
  return (
    <div className="resume__experience">
      <div className="resume__shape test">
        <div className="large__circle">
          <div className="small__circle"></div>
        </div>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="display__small__screen">
        <div className="resume__left">
          <p className="details">{props.experience.date}</p>
          <h3 className="resume__position">{props.experience.position}</h3>
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
          <h3 className="resume__location">{props.experience.location}</h3>
          {/* <p className="details">{props.experience.details}</p> */}
          {props.experience.details.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      </div>
      <div className="display__large__screen">
        <div className="resume__left">
          <h3 className="resume__location">{props.experience.location}</h3>
          <p className="details">{props.experience.date}</p>
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
          {/* <p className="details">{props.experience.details}</p> */}
          {props.experience.details.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ResumeExperience;
