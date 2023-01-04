import "./booking.scss";
import Calendar from "../images/icons/Calendar";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section className="booking">
      <div className="filter"></div>

      <div className="booking-wrapper">
        <h3>Запланируйте просмотр участка</h3>
        <span>и зафиксируйте цену!</span>

        <form>
          <input type="number" placeholder="Введите номер телефона" />
          <Link to={'/completed'}>
            <button type="submit">
              <Calendar />
              Запланировать
            </button>
          </Link>
          <span>
            Нажимая на кнопку, вы соглашаетесь с правилами <br />
            <span className="underline">обработки персональных данных</span>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Booking;
