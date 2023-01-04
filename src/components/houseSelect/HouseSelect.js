import "./houseSelect.scss";
import { useState } from "react";
import { Tooltip, Zoom } from "@material-ui/core";
import { Link } from "react-router-dom";
import BlueBanner from "../areaPlan/BlueBanner";
import GreenBanner from "../areaPlan/GreenBanner";
import RedBanner from "../areaPlan/RedBanner";
import cottageData from "../../cottageData";

const HouseSelect = () => {
  const from120 = cottageData.filter(
    (item) => item.square >= 120 && item.square <= 140
  );
  const from140 = cottageData.filter(
    (item) => item.square >= 141 && item.square <= 170
  );
  const from170 = cottageData.filter(
    (item) => item.square >= 171 && item.square <= 200
  );
  const from200 = cottageData.filter((item) => item.square > 201);
  const dataArray = [from120, from140, from170, from200];
  const descr = [
    "Коттедж с отделкой от 120 кв.м.",
    "Коттедж с отделкой от 140 кв.м.",
    "Коттедж с отделкой от 170 кв.м.",
    "Коттедж с отделкой от 200 кв.м.",
  ];

  return (
    <section>
        <div className="houseSelect-description">
            <h2>Выбор дома</h2>
            <div className="houseSelect-description-info">
                <span className="green">Свободен</span>
                <span className="red">Продан</span>
                <span className="blue">Забронирован</span>

            </div>
        </div>
      <div className="houseSelect-wrapper">
        {dataArray.map((item, i) => (
          <div key={i} className={`houseSelect-gridItem-${i + 1}`}>
            <div className="houseSelect-gridItem-list" id="houseSelect">
              <div className="houseSelect-gridItem-list-square">{descr[i]}</div>
              {item.map((item, i) => (
                <div key={i} className="grid-banner-list">
                  {item.available === "true" ? (
                    <Tooltip
                      arrow
                      title="Перейти на страницу"
                      TransitionComponent={Zoom}
                    >
                      <Link to={`/cottage/${item.id}`}>
                        <span className="grid-banner">
                          <GreenBanner /> <span>{item.name}</span>
                        </span>
                      </Link>
                    </Tooltip>
                  ) : item.available === "false" ? (
                    <Tooltip
                      arrow
                      title="Перейти на страницу"
                      TransitionComponent={Zoom}
                    >
                      <Link to={`/cottage/${item.id}`}>
                        <span className="grid-banner">
                          <RedBanner /> <span>{item.name}</span>
                        </span>
                      </Link>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      arrow
                      title="Перейти на страницу"
                      TransitionComponent={Zoom}
                    >
                      <Link to={`/cottage/${item.id}`}>
                        <span className="grid-banner">
                          <BlueBanner /> <span>{item.name}</span>
                        </span>
                      </Link>
                    </Tooltip>
                  )}
                </div>
              ))}
            </div>
            <Slider data={item[0]} />
          </div>
        ))}
      </div>
    </section>
  );
};


const Slider = ({ data }) => {
  const { images } = data;
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
    <div className="houseSelect">
      <button
        className="control-button-prev button"
        onClick={() => goPrev()}
      ></button>
      <button
        className="control-button-next button"
        onClick={() => goNext()}
      ></button>

      <div className="houseSelect-slideshow">
        <div
          className="houseSelect-slider"
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

export default HouseSelect;
