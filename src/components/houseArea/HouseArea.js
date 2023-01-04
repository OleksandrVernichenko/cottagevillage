import "./houseArea.scss";
import Triangle from "./Triangle";
import groundData from "../images/houseGround";
import { house1Data, house2Data, house3Data, house4Data } from "./dataImages";

const HouseArea = () => {
  return (
    <section>
      <div className="house-area">
        <h2 className="house-area-sign">Дома с участками</h2>
        <ul className="house-area-list">
          {groundData.map((item, i) => {
            return (
              <li key={i} className="house-area-list-item">
                <div className="counter">{`0${i + 1}`}</div>
                <div>{item.img}</div>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>

        <div className="house-area-triangle">
          <Triangle />
        </div>

        <div className="house-area-grid">
          <GridTemplate
            data={house1Data}
            text={"Коттедж с отделкой 120 кв.м."}
            price={"1 000 999 грн"}
          />
          <GridTemplate
            data={house2Data}
            text={"Коттедж с отделкой 135 кв.м."}
            price={"1 999 999 грн"}
          />
          <GridTemplate
            data={house3Data}
            text={"Коттедж с отделкой 126 кв.м."}
            price={"1 400 999 грн"}
          />
          <GridTemplate
            data={house4Data}
            text={"Коттедж с отделкой 131 кв.м."}
            price={"1 700 999 грн"}
          />
        </div>
      </div>
    </section>
  );
};

const GridTemplate = ({ data, text, price }) => {
  return (
    <div className="house-area-grid-item">
      <div className="house-area-grid-item-text">{text}</div>
      <div className="house-area-grid-item-price">{price}</div>
      {data.map((item, i) => {
        return (
          <img
            key={i}
            src={item}
            alt="grid house"
            className={`house-area-grid-item-${i + 1}`}
          />
        );
      })}
    </div>
  );
};

export default HouseArea;
