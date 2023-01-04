import "./benefits.scss";
import plan from "../images/pageImages/plan.jpg";
import figure2 from "../images/pageImages/figure2.jpg";
import figure3 from "../images/pageImages/figure3.jpg";
import imagesData from "../images/benefits";

const Benefits = () => {
  return (
    <section className="first">
      <div className="benefits">
        <div className="benefits-text">
          <h2 className="benefits-text-view">
            Преимущества <span>вашего нового дома в Одессе</span>
          </h2>
          <p className="benefits-text-description">
            КП «Cottage Village» спроектирован в ультрамодном европейском
            архитектурном стиле.
          </p>
          <p className="benefits-text-description">
            И это, подчёркивает его индивидуальность. Каждый дом, гармонично
            вливается, в единое целое коттеджного посёлка.
          </p>
        </div>
        <div className="benefits-images">
          <figure>
            <div className="benefits-images-item-1">
              <img src={plan} alt="plan" />
            </div>
            <div className="benefits-images-item-2">
              <img src={figure2} alt="house" />
            </div>
            <div className="benefits-images-item-3">
              <img src={figure3} alt="car" />
            </div>
          </figure>
        </div>
      </div>
      <div className="benefits-list">
        <ul>
          <BenefitsTable />
        </ul>
      </div>
    </section>
  );
};

const BenefitsTable = () => {
  return imagesData.map((elem, i) => {
    return (
      <li key={i}>
        <div className="counter">{i < 9 ? `0${i + 1}` : i + 1}</div>
        <div className="image">{elem.img}</div>
        <h3 className="description">{elem.description}</h3>
      </li>
    );
  });
};

export default Benefits;
