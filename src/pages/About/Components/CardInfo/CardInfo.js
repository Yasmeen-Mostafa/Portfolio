import "./CardInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CardInfo = (props) => {
  return (
    <div className="card__info">
      <FontAwesomeIcon icon={props.icon} className="card__icon" />
      <p>
        <span>{props.header + ": "}</span>
        {props.text}
      </p>
    </div>
  );
};
export default CardInfo;
