import "./insideHouse.scss";
import { useState } from "react";
import NextActive from "../images/icons/NextActive";
import PrevFade from "../images/icons/PrevFade";
import NextFade from "../images/icons/NextFade";
import PrevActive from "../images/icons/PrevActive";
import interior1 from "../images/pageImages/interior1.jpg";
import interior2 from "../images/pageImages/interior2.jpg";
import interior3 from "../images/pageImages/interior3.jpg";

const InsideHouse = () => {
  const imagesSlide1 = {
    images: [
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
      interior1,
    ],
    name: "Дизайнерская отделка «Под Ключ»",
    description:
      "Заказывая типовой вариант отделки, вы сможете сэкономить как средства, так и время. Мы предлагаем три стиля отделки. Тщательно пропработанные нашими дизайнерами. Они сочетают в себе красоту, продуманность, удобство и оптимальное использование пространства.",
    aboveButtons: "ТОКИО",
    id: 1,
  };

  const imagesSlide2 = {
    images: [
      interior2,
      interior2,
      interior2,
      interior2,
      interior2,
      interior2,
      interior2,
      interior2,
    ],
    name: "Дизайнерская отделка «Под Ключ»",
    description:
      "Заказывая типовой вариант отделки, вы сможете сэкономить как средства, так и время. Мы предлагаем три стиля отделки. Тщательно пропработанные нашими дизайнерами. Они сочетают в себе красоту, продуманность, удобство и оптимальное использование пространства.",
    aboveButtons: "БЕРГЕН",
    id: 2,
  };

  const imagesSlide3 = {
    images: [
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
      interior3,
    ],
    name: "Дизайнерская отделка «Под Ключ»",
    description:
      "Заказывая типовой вариант отделки, вы сможете сэкономить как средства, так и время. Мы предлагаем три стиля отделки. Тщательно пропработанные нашими дизайнерами. Они сочетают в себе красоту, продуманность, удобство и оптимальное использование пространства.",
    aboveButtons: "НЬЮ-ЙОРК",
    id: 3,
  };

  return (
    <section>
      <div className="section-description">
        <h2>
          Варианты отделки
          <span className="outer">
            <span className="inner">
              Отделка white box, для тех, кто мечтает об уникальном пространстве
            </span>
          </span>
        </h2>
      </div>
      <Slider data={imagesSlide1} />
      <Slider data={imagesSlide2} />
      <Slider data={imagesSlide3} />
    </section>
  );
};

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === data.images.length - 1;
    const newIndex = isLastSlide ? data.images.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="topSlide design">
      <div className="topSlide-description">
        <h4>{data.name}</h4>
        <p>{data.description}</p>

        <div className="aboveButtons">
          <p className="aboveButtons-data">
            {data.id}.{data.aboveButtons}
            <span className="aboveButtons-data-slash"> /</span>
            <span className="aboveButtons-data-span">
              {data.images.length}
              <span className="aboveButtons-data-span-photo">Фото</span>
            </span>
          </p>
        </div>

        <button className="control-button-prev" onClick={() => goPrev()}>
          {currentIndex === 0 ? <PrevFade /> : <PrevActive />}
        </button>
        <button className="control-button-next" onClick={() => goNext()}>
          {currentIndex === data.images.length - 1 ? (
            <NextFade />
          ) : (
            <NextActive />
          )}
        </button>
      </div>
      <div className="topSlide-slideshow">
        <div
          className="topSlide-slider"
          style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
        >
          {data.images.map((image, index) => (
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

export default InsideHouse;
