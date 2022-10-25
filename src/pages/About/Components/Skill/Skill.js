import React from "react";
import "./Skill.scss";
const Skill = (props) => {
  return (
    <div className="skill__block">
      <figure className="skill__name">
        <img src={props.img} alt="Skill" />
      </figure>
    </div>
  );
};
export default Skill;
