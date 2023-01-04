import "./completedForm.scss";
import CottageHeader from "../cottageHeader/CottageHeader";
import { Link } from "react-router-dom";
import CheckMark from "../images/icons/CheckMark";

const CompletedForm = () => {
  return (
    <>
      <CottageHeader />
      <main>
        <div className="completedForm">
          <CheckMark />
          <h3>Спасибо!</h3>
          <span className="completedForm-feedback">
            Ваша заявка будет обработана в максимально короткие сроки.
          </span>
          <div className="completedForm-number">
            <span className="completedForm-number-info">
              Есть вопросы?{" "}
              <span className="completedForm-number-color">Звоните:</span>
            </span>
            <span className="phone-number">+38 (000) 123-124</span>
          </div>

          <Link to={"/"}>Главная</Link>
        </div>
      </main>
    </>
  );
};

export default CompletedForm;
