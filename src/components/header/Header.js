import "./header.scss";
import { HashLink } from "react-router-hash-link";
import Facebook from "../images/icons/Facebook";
import Instagram from "../images/icons/Instagram";
import Whatsapp from "../images/icons/Whatsapp";
import EnglishCottage from "../images/icons/EnglishCottage";
import Button360 from "../images/icons/Button360";

const Header = () => {
  const social = [<Facebook />, <Instagram />, <Whatsapp />];

  return (
    <header>
      <div className="header-wrapper">
        <div className="header">
          <div className="header-contacts">
            <span className="header-contacts-name">Cottage Village</span>
            <ul className="header-contacts-social">
              {social.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="header-contacts-call-back">
              <p className="header-contacts-call-back-questions">
                Есть вопросы? <span>Звоните! </span>{" "}
              </p>
              <p className="header-contacts-call-back-number">
                +38 (000) 123-124
              </p>
              <p className="header-contacts-call-back-time">
                Время работы в 8 до 20
              </p>
            </div>
          </div>
          <div className="header-sign">
            <h1>
              <span className="header-sign-gradient">Свой дом в Одессе! </span>
            </h1>
            <h2>
              В cottage village <span>от 1 000 000 грн</span>
            </h2>
          </div>
          <div className="header-service">
            <HashLink to={'/cottagevillage#houseSelect'} className="header-service-select">
              <EnglishCottage /> выберете свой коттедж
            </HashLink>
            <div className="header-service-look">
              <div className="header-service-look-svg">
                <Button360 />
              </div>
              <p>Посмотрите свой участок в 3D - проекте</p>
              <button>Посмотреть</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
