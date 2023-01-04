import "./cottageHeader.scss";
import Facebook from "../images/icons/Facebook";
import Instagram from "../images/icons/Instagram";
import Whatsapp from "../images/icons/Whatsapp";


const CottageHeader = () => {
  const links = [<Facebook />, <Instagram />, <Whatsapp />];

  return (
    <header className="cottageHeader">
      <div className="cottageHeader-wrapper">
        <h2>Cottage Village</h2>
        <ul>
          {links.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="cottageHeader-wrapper-contacts">
          <p className="cottageHeader-wrapper-contacts-questions">
            Есть вопросы? <span>Звоните! </span>
          </p>
          <p className="cottageHeader-wrapper-contacts-number">+38 (000) 123-124</p>
          <p className="cottageHeader-wrapper-contacts-time">
            Время работы в 8 до 20
          </p>
        </div>
      </div>
    </header>
  );
};

export default CottageHeader;
