import "./banner.scss";
import CallMe from "../images/icons/CallMe";
import { useState, useRef } from "react";
import { Transition } from "react-transition-group";

const Banner = () => {
  const [banner, setBanner] = useState(false);
  const nodeRef = useRef(null);
  setTimeout(() => {
    setBanner(true);
  }, 3000);

  const duration = 500;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    transform: "translate(-50%, -50%)",
  };

  const transitionStyles = {
    entering: { opacity: 1, transform: "translate(0, -50%)" },
    entered: { opacity: 1, transform: "translate(0, -50%)" },
    exiting: { opacity: 0, transform: "translate(-50%, -50%)" },
    exited: { opacity: 0, transform: "translate(-50%, -50%)" },
  };

  const content = banner ? <View /> : null;
  return (
    <Transition nodeRef={nodeRef} in={banner} timeout={duration}>
      {(state) => (
        <div
          className="side"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {content}
        </div>
      )}
    </Transition>
  );
};

const View = () => {
  return (
    <div className="side-banner-inner">
      <div className="side-banner-inner-left">
        <p className="side-banner-inner-left-bold">
          Персональное предложение именно для Вас!
        </p>
        <p className="side-banner-inner-left-light">
          Введите свой номер телефона, и мы перезвоним Вам в течение 15 минут
          для консультации: Уточним у Вас все параметры Ваших предпочтений и
          предложим Вам лучший вариант!
        </p>
      </div>
      <div className="side-banner-inner-right">
        <form name="call">
          <input type="number" placeholder="Bведите номер телефона" />
          <button type="submit">
            <CallMe />
            получить предложение
          </button>
          <div>
            Нажимая на кнопку, вы соглашаетесь с правилами <br />
            <span>обработки персональных данных</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
