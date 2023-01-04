import "./wall.scss";
import wallData from "../images/comfort/index";
import brick from "../images/pageImages/brick.png";
import brickGraph from "../images/pageImages/brickGraph.jpg";
import safety from "../images/pageImages/safety.jpg";
import wall from "../images/pageImages/wall.jpg";
import whiteBox from "../images/pageImages/white-box.jpg";

const Wall = () => {
  return (
    <section className="wall">
      <h2>
        Стены сделаны <br /> <span>из Porotherm</span>
      </h2>
      <div className="brick">
        <div className="brickR">
          <div className="brickR-image">
            <figure>
              <img src={brickGraph} alt="brickGraph" />
              <img src={brick} alt="brick" />
            </figure>
          </div>
          <div className="brickR-description">
            <h6>Тепло</h6>
            <p>
              Самыми эффективным и экологически чистым материалом на сегодняшний
              день являются керамический блок «Pororherm»
            </p>
          </div>
        </div>
        <div className="quality">
          <div className="quality-description">
            <h6>Качество жизни</h6>
            <p>
              Вы будите жить в доме построенного из самого дорогого,
              экологически чистого материала - керамических блоков компании
              «Parotherm». Ваш дом облицован эксклюзивным лицевым кирпичём
              ручной фармовки, сделанный по старинной датской технологии. Каждый
              кирпич не повторим и имеет свою фактуру.
            </p>
          </div>
          <div className="quality-factors">
            <h6>
              Факторы, оказывающие влияние на комфортное нахождение в помещении
            </h6>
            <ul>{<Factors />}</ul>
          </div>
        </div>
        <div className="safety">
          <div className="safety-image">
            <figure>
              <img src={safety} alt="safety" />
            </figure>
          </div>
          <div className="safety-description">
            <h6>Безопасность</h6>
            <p>
              Керамические стены наиболее безопасны для жизни и здоровья
              человека. Так, обожженная глина рН-нейтральна, что предотвращает
              воздействие на нее химических веществ из окружающей среды.
              Керамика обладает повышенной огнестойкостью, поскольку в процессе
              производства проходит обжиг при температуре около 900 °C.
            </p>
          </div>
        </div>
        <div className="protection">
          <div className="protection-description">
            <h6>Прочность</h6>
            <p>
              Ваш будущий дом являются очень тёплым и энергосберегающим. Верой и
              правдой прослужит не одному поколению.
            </p>
          </div>
          <div className="protection-image">
            <figure>
              <img src={wall} alt="wall description" />
            </figure>
          </div>
        </div>
        <div className="whiteBox">
          <div className="whiteBox-image">
            <figure>
              <img src={whiteBox} alt="whiteBox" />
            </figure>
          </div>
          <div className="whiteBox-description">
            <h6>Коттедж с отделкой в стиле White Box</h6>
            <p>
              White box переводится с английского как «белая коробка». Это
              вариант отделки, в котором проведены инженерные сети:
            </p>
            <ul className="whiteBox-description-list">
              <li>выравнивание стен, потолка и пола под финишное покрытие;</li>
              <li>установку окон и подоконников;</li>
              <li>
                монтаж электропроводки, водопровода, системы отопления и
                канализации;
              </li>
              <li>сантехнические работы;</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Factors = () => {
  return wallData.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
};

export default Wall;
