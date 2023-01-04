import "./soldData.scss";
import Button360 from "../images/icons/Button360";

const SoldData = ({ data }) => {
  const calcSold = () => {
    const sold = data.filter((item) => item.available === 'false').length;
    const percent = sold / (data.length / 100);
    return percent.toFixed(0);
  };

  return (
    <div className="sold">
      <div className="sold-view">
        <Button360 />
      </div>
      <p className="sold-info">
        <span className="sold-info-span">Продано</span>
        {calcSold() + "%"}
        <span className="sold-info-span">объектов</span>
      </p>
    </div>
  );
};

export default SoldData;
