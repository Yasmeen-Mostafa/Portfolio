import "./Home.scss";
import profile from "../../assets/Images/Yasmeen.png";
import resume from "../../assets/Documents/Yasmeen Mostafa Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <figure>
          <img src={profile} />
        </figure>
        <div className="home__details">
          <div className="home__position">
            <h1>
              Hello <br />
              World!
            </h1>

            <div className="home__text">
              <p>
                I'm <span>Yasmeen Mostafa</span>, frontend web developer
              </p>
              <a href={resume} download="Yasmeen Mostafa Resume.pdf">
                <button>
                  <strong>
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="lightColor"
                    />
                    &nbsp; Download CV
                  </strong>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
