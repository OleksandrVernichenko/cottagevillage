import { useState } from "react";

import "./slideSection.scss";
import NextActive from "../images/icons/NextActive";
import PrevFade from "../images/icons/PrevFade";
import NextFade from "../images/icons/NextFade";
import PrevActive from "../images/icons/PrevActive";
import slide1 from "../images/pageImages/slide1.jpg";
import slide2 from "../images/pageImages/slide2.jpg";

const SlideSection = () => {
  const description = [
    {
      h4: "Территория",
      span: "«КП «Cottage Village» является закрытой охраняемой территорией.Посёлок граничит с живописными чистыми прудами.»",
    },
    {
      h4: "Транспортная доступность",
      span: "Школы, детские сады, продуктовые магазины, рынки, рестораны находится в непосредственной близости.",
    },
  ];

  return (
    <section className="sliders">
      <Slider data={description[0]} />
      <SliderBottom data={description[1]} />
    </section>
  );
};

const Slider = ({ data }) => {
  const { h4, span } = data;
  const images = [slide1, slide2, slide1];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? images.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="topSlide">
      <div className="topSlide-description">
        <h4>{h4}</h4>
        <p>{span}</p>
        <button className="control-button-prev" onClick={() => goPrev()}>
          {currentIndex === 0 ? <PrevFade /> : <PrevActive />}
        </button>
        <button className="control-button-next" onClick={() => goNext()}>
          {currentIndex === images.length - 1 ? <NextFade /> : <NextActive />}
        </button>
      </div>
      <div className="topSlide-slideshow">
        <div
          className="topSlide-slider"
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

const SliderBottom = ({ data }) => {
  const { h4, span } = data;
  const images = [slide2, slide1, slide2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? images.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="topSlide topSlide-reverse">
      <div className="topSlide-slideshow">
        <div
          className="topSlide-slider"
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
      <div className="topSlide-description">
        <h4>{h4}</h4>
        <p>{span}</p>
        <button className="control-button-prev" onClick={() => goPrev()}>
          {currentIndex === 0 ? <PrevFade /> : <PrevActive />}
        </button>
        <button className="control-button-next" onClick={() => goNext()}>
          {currentIndex === images.length - 1 ? <NextFade /> : <NextActive />}
        </button>
      </div>
    </div>
  );
};

export default SlideSection;
