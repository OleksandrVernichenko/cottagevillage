import Benefits from "../benefits/Benefits";
import Wall from "../wall/Wall";
import SlideSection from "../slide-section/SlideSection";
import HouseArea from "../houseArea/HouseArea";
import PhotoArea from "../photoArea/PhotoArea";
import AreaPlan from "../areaPlan/AreaPlan";
import InsideHouse from "../insideHouse/InsideHouse";
import WhiteBox from "../whiteBox/WhiteBox";
import HouseSelect from "../houseSelect/HouseSelect";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import CottageFooter from "../cottageFooter/CottageFooter";
import Booking from "../booking/Booking";

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Benefits />
        <Wall />
        <SlideSection />
        <HouseArea />
        <PhotoArea />
        <AreaPlan />
        <InsideHouse />
        <WhiteBox />
        <HouseSelect />
        <Booking /> 
      </main>
      <CottageFooter />
    </>
  );
};

export default MainPage;
