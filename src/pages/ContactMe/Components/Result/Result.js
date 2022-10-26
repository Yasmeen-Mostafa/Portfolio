import "./Result.scss";
import success from "../../../../assets/Images/checked.png";
import failed from "../../../../assets/Images/remove.png";
const Result = ({ result }) => {
  return (
    <div className="result__container animate__animated animate__zoomIn">
      <figure className="result__img">
        <img src={result ? success : failed} />
      </figure>
      <p>
        {result
          ? "Thanks for contacting me, I will reply ASAP!"
          : "Failed to send your request, please resend it!"}
      </p>
    </div>
  );
};
export default Result;
