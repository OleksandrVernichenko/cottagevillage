import BrickWall from "./BrickWall";
import Capital from "./Capital";
import Construction from "./Constraction";
import FirstPay from "./FirstPay";
import Garage from "./Garage";
import Montage from "./Montage";
import Passport from "./Passport";
import Property from "./Property";
import Setting from "./Settings";
import UnderFloorHeating from "./UnderFloorHeating";
import Heater from "./Heater";
import Window from "./Window";
import WarmFloor from "./WarmFloor";

const imagesData = [
  {
    img: <Montage />,
    description: "Ипотека от 6%",
  },
  {
    img: <FirstPay />,
    description: "Первый взнос: 10%",
  },
  {
    img: <Garage />,
    description: "Навес для 2-х машин",
  },
  {
    img: <Passport />,
    description: "Одесская прописка",
  },
  {
    img: <Capital />,
    description: "Все коммуникации: Вода, Канализация, Электричество",
  },
  {
    img: <Construction />,
    description: "Стены отделаны облицовочным кирпичом",
  },
  {
    img: <Property />,
    description: "Дом стоит на УШП (утеплённой шведской плите)",
  },
  {
    img: <WarmFloor />,
    description: "Тёплые полы во всём доме",
  },
  {
    img: <Window />,
    description: "Энерго-эффективное панорамное остекление",
  },
  {
    img: <Heater />,
    description: "Встроенные напольные конвектора перед панорамным остеклением",
  },
  {
    img: <UnderFloorHeating />,
    description: "Отопление, электрика и сантехника сделана по всему дому",
  },
  {
    img: <BrickWall />,
    description: "Эксклюзивный лицевой кирпич ручной формовки в 3D-кладке",
  },
  {
    img: <Setting />,
    description:
      "Стены вашего дома сделаны из экологического керамического блока",
  },
];

export default imagesData;
