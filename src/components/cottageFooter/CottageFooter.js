import "./cottageFooter.scss";
import Facebook from "../images/icons/Facebook";
import Instagram from "../images/icons/Instagram";
import Whatsapp from "../images/icons/Whatsapp";

const CottageFooter = () => {
  const links = [<Facebook />, <Instagram />, <Whatsapp />];

  return (
    <footer className="cottageFooter">
      <div className="cottageFooter-wrapper">
        <h2>Cottage Village</h2>
        <ul>
          {links.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="cottageFooter-wrapper-contacts">
          <p className="cottageFooter-wrapper-contacts-questions">
            Есть вопросы? <span>Звоните! </span>
          </p>
          <p className="cottageFooter-wrapper-contacts-number">
            +38 (000) 123-124
          </p>
          <p className="cottageFooter-wrapper-contacts-time">
            Время работы в 8 до 20
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CottageFooter;
