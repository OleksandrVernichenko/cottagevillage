import { useParams } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Tooltip } from "@material-ui/core";
import CottageHeader from "../cottageHeader/CottageHeader";
import cottageData from "../../cottageData";
import Left from "../images/icons/Left";
import Phone from "../images/icons/Phone";
import Stack from "../images/icons/Stack";
import CottageCertificate from "../images/icons/CottageCertificate";
import CottageEnergy from "../images/icons/CottageEnergy";
import CottageGarage from "../images/icons/CottageGarage";
import int1 from "../images/pageImages/interior/1.jpg";
import int2 from "../images/pageImages/interior/2.jpg";
import int3 from "../images/pageImages/interior/1.jpg";
import int4 from "../images/pageImages/interior/4.jpeg";
import MiniNextActive from "../images/icons/MiniNextActive";
import MiniNextFade from "../images/icons/MiniNextFade";
import MiniPrevActive from "../images/icons/MiniPrevActive";
import MiniPrevFade from "../images/icons/MiniPrevFade";
import Button360 from "../images/icons/Button360";
import Benefits from "../benefits/Benefits";
import CottageFooter from "../cottageFooter/CottageFooter";
import Booking from "../booking/Booking";

import "./cottage.scss";

const Cottage = () => {
  const { cottageId } = useParams();
  const house = cottageData.filter((item) => item.id === +cottageId);
  const { name, images, floors, area, price, square } = house[0];
  return (
    <>
      <CottageHeader />
      <main>
        <section className="singleCottage">
          <div className="cottageItem">
            <HashLink to={"/cottagevillage#houseSelect"}>
              <Left />к выбору коттеджей
            </HashLink>

            <div className="cottageItem-wrapper">
              <h2 className="cottageItem-wrapper-name">Коттедж {name}</h2>
              <button className="cottageItem-wrapper-button">
                <Phone />
                Оставить заявку
              </button>
              <ul className="cottageItem-wrapper-list">
                <li>
                  Стоимость
                  <span>{price}</span>
                </li>

                <li>
                  площадь коттеджа
                  <span>{square}</span>
                </li>
                <li>
                  площадь участка, соток
                  <span>{area}</span>
                </li>
                <li>
                  коттедж
                  <span>{name}</span>
                </li>
              </ul>
              <div className="cottageItem-wrapper-adv">
                особенности
                <span>
                  <Stack />
                  WhiteBox
                </span>
              </div>
            </div>
          </div>
          <Slider images={images} />
          <VerticalSlide floors={floors} />

          <div className="interiorShowRoom">
            <div className="interiorShowRoom-sign">
              <h2>Прогулка по шоуруму</h2>
              <button>Смотреть</button>
            </div>
            <InteriorSlider name={name} square={square} />
          </div>
          <Benefits />
          <Booking />
        </section>
      </main>
      <CottageFooter />
    </>
  );
};

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="cottageSlide">
      <div className="cottageSlide-slideshow">
        <button
          className="cottageSlide-slideshow-prev"
          onClick={() => goPrev()}
        ></button>
        <button
          className="cottageSlide-slideshow-next"
          onClick={() => goNext()}
        ></button>
        <div
          className="cottageSlide-slider"
          style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VerticalSlide = ({ floors }) => {
  const [index, setIndex] = useState(0);

  const firstSlide = () => {
    setIndex(0);
  };

  const secondSlide = () => {
    setIndex(1);
  };

  return (
    <div className="verticalSlide">
      <div className="floor-buttons">
        <button
          className={
            index === 0 ? `active-button` : `verticalSlide-slideshow-prev`
          }
          onClick={() => firstSlide()}
        >
          <span className="button-number">1</span>
          <span>ЭТАЖ</span>
        </button>
        <button
          className={
            index === 1 ? `active-button` : `verticalSlide-slideshow-prev`
          }
          onClick={() => secondSlide()}
        >
          <span className="button-number">2</span>
          <span>ЭТАЖ</span>
        </button>
      </div>
      <div className="verticalSlide-slideshow">
        <div
          className="verticalSlide-slider"
          style={{ transform: `translate3d(0, ${-index * 50}%, 0)` }}
        >
          {floors.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="cottage-benefits">
        <ul className="cottage-benefits-list">
          <li>
            <CottageCertificate />
            <span>ВСЕ ДЕЙСТВУЮЩИЕ КОММУНИКАЦИИ</span>
          </li>
          <li>
            <CottageEnergy />
            <span>ОФОРМЛЕНА СОБСТВЕННОСТЬ НА ДОМ</span>
          </li>
          <li>
            <CottageGarage />
            <span>НАВЕС ДЛЯ МАШИНЫ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const InteriorSlider = ({ name, square }) => {
  const interior = [int1, int2, int3, int4];
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? 0 : index - 1;
    setIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = index === interior.length - 1;
    const newIndex = isLastSlide ? interior.length - 1 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="interiorSlide">
      <div className="interiorSlide-description">
        <div className="interiorSlide-description-info">
          <h3>
            ШОУРУМ коттеджа -&nbsp;
            <span className="interiorSlide-description-info-name">
              {" "}
              {`${name}`}
            </span>
            <span className="interiorSlide-description-info-square">{`${square} КВ.М`}</span>
          </h3>
        </div>

        <div className="interiorSlide-description-buttons">
          <button className="control-button-prev" onClick={() => goPrev()}>
            {index === 0 ? <MiniPrevFade /> : <MiniPrevActive />}
          </button>
          <div className="dots">
            {interior.map((_, i) => (
              <div
                className={index === i ? "dot-active" : "dot"}
                key={i}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>
          <button className="control-button-next" onClick={() => goNext()}>
            {index === interior.length - 1 ? (
              <MiniNextFade />
            ) : (
              <MiniNextActive />
            )}
          </button>
        </div>
      </div>

      <div className="interiorSlide-slideshow">
        <Tooltip title="Опция временно недоступна" arrow>
          <button>
            <Button360 />
          </button>
        </Tooltip>
        <div
          className="interiorSlide-slider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {interior.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cottage;
