import "./whiteBox.scss";
import white1 from "../images/pageImages/whiteBox1.jpg";
import white2 from "../images/pageImages/whiteBox2.jpg";
import white3 from "../images/pageImages/whiteBox3.jpg";
import white4 from "../images/pageImages/whiteBox4.jpg";
import white5 from "../images/pageImages/whiteBox5.jpg";

const WhiteBox = () => {
  const images = [white1, white2, white3, white4, white5];
  return (
    <section className="section-whiteBox">
      <div className="whiteBoxSecond">
        <div className="whiteBoxSecond-description">
          <h2>WHITE BOX</h2>
          <ul>
            <li>Сделана стяжка пола. Полы - идеально ровные.</li>
            <li>Гидроизоляция.</li>
            <li>Уже готовые теплые полы на первом этаже и во всех санузлах.</li>
            <li>Установлены конвекторы (батареи отопления).</li>
            <li>Установлены конвекторы (батареи отопления).</li>
            <li>Внутренние перегородки уже готовы.</li>
          </ul>

          <ul>
            <li>
              Электричество, канализация, газ и водопровод, уже подключены и
              разведены по Вашему дому.
            </li>
            <li>Полностью готовая котельная.</li>
            <li>
              Парковочные места капитальные, а не просто навес. Есть места для
              2-х машин.
            </li>
            <li>Вес участок покрыт газоном, марки .... .</li>
            <li>
              Калитка и ворота, готовы к установке автоматического привода.
            </li>
          </ul>
        </div>
      </div>
      <div className="whiteBoxSecond-grid">
        {images.map((item, i) => (
          <img src={item} key={i} alt="white box" className={`whiteBox-grid-${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default WhiteBox;
