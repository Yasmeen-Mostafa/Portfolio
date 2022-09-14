import React from "react";
import "./AboutInfo.scss";
import CardInfo from "../CardInfo/CardInfo";
import {
  faUser,
  faCalendarDays,
  faLocationDot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
const AboutInfo = () => {
  return (
    <div className="about__info">
      <h2 className="about__title">Personal Info</h2>
      <CardInfo icon={faUser} header="Name" text="Yasmeen Mostafa Mohamed" />
      <CardInfo
        icon={faCalendarDays}
        header="Date Of Birth"
        text="29-03-1998"
      />
      <CardInfo icon={faLocationDot} header="City" text="Alexandria, Egypt" />
      <CardInfo icon={faGlobe} header="Languages" text="English, Arabic" />
    </div>
  );
};
export default AboutInfo;
