import "./areaPlan.scss";
import { useState } from "react";
import RedBanner from "./RedBanner";
import GreenBanner from "./GreenBanner";
import BlueBanner from "./BlueBanner";
import plan from "../images/pageImages/plan.jpg";
import cottageData from "../../cottageData";
import { Tooltip, withStyles, Zoom } from "@material-ui/core";
import SoldData from "../soldData/SoldData";

const AreaPlan = () => {
  const [index, setIndex] = useState(0);
  const onSetIndex = (e) => {
    if (e.target.dataset.item) {
      setIndex(e.target.dataset.item);
    }
  };

  const tooltipStyle = {
    position: "relative",
    height: "210px",
    width: "170px",
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "35px 30px 24px 24px",
    display: "flex",
    flexDirection: "column",
  };

  const spanStyle = {
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "14px",
    color: "rgba(40, 41, 46, 0.7)",
    display: "block",
    textAlign: "left",
    marginTop: "15px",
    marginBottom: "3px",
  };

  const bannerStyle = {
    position: "absolute",
    top: "-15px",
    transform: "translate(-50%, 0)",
    left: "50%",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    backgroundColor: "#06b436",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "9px",
    fontWeight: 700,
    color: "white",
  };

  const bannerRed = {
    position: "absolute",
    top: "-15px",
    transform: "translate(-50%, 0)",
    left: "50%",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    backgroundColor: "#B40606",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "9px",
    fontWeight: 700,
    color: "white",
  };

  const bannerBlue = {
    position: "absolute",
    top: "-15px",
    transform: "translate(-50%, 0)",
    left: "50%",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    backgroundColor: "#007AFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "9px",
    fontWeight: 700,
    color: "white",
  };

  const textStyle = {
    color: "black",
  };
  const cottageNameStyle = {
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#06b436",
  };

  const HtmlTooltip = withStyles(() => ({
    tooltip: {
      display: "flex",
      background: "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
  }))(Tooltip);

  return (
    <section>
      <div className="map">
        <SoldData data={cottageData} />
        <img src={plan} alt="plan" className="map-image" />
        {cottageData.map((item, i) => {
          return (
            <div className={`map-banner banner-${i + 1}`} key={i} data-item={i}>
              {item.available === "true" ? (
                <GreenBanner />
              ) : item.available === "false" ? (
                <RedBanner />
              ) : (
                <BlueBanner />
              )}
              <HtmlTooltip
                TransitionComponent={Zoom}
                placement="top"
                title={
                  <div style={tooltipStyle}>
                    <div
                      style={
                        cottageData[index].available === "true"
                          ? bannerStyle
                          : cottageData[index].available === "false"
                          ? bannerRed
                          : bannerBlue
                      }
                    >
                      {cottageData[index].name}
                    </div>
                    <div style={cottageNameStyle}>
                      Cottage {cottageData[index].name}
                    </div>
                    <div style={textStyle}>
                      <span style={spanStyle}>Стоимость</span>
                      {cottageData[index].price}
                    </div>
                    <div style={textStyle}>
                      <span style={spanStyle}>Площадь</span>
                      {cottageData[index].square} {"\u33A1"}
                    </div>
                    <div style={textStyle}>
                      <span style={spanStyle}>Площадь участка</span>
                      {cottageData[index].area} соток
                    </div>
                  </div>
                }
              >
                <span
                  to={`/cottage:${i}`}
                  className="map-banner-name"
                  onMouseMove={(e) => {
                    onSetIndex(e);
                  }}
                  onTouchEnd={(e) => onSetIndex(e)}
                  data-item={i}
                >
                  {item.name}
                </span>
              </HtmlTooltip>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AreaPlan;
