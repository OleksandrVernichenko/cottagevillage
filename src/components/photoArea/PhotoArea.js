import "./photoArea.scss";
import { photoData } from ".";

const PhotoArea = () => {
  return (
    <section className="photo-area">
      <div className="photo">
        <h2>Фото посёлка</h2>

        <GridTemplate />
      </div>
    </section>
  );
};

const GridTemplate = () => {
  return (
    <div className="photo-grid">
      {photoData.map((item, i) => {
        return (
          <img
            src={item}
            key={i}
            alt="area"
            className={`photo-grid-${i + 1}`}
          />
        );
      })}
    </div>
  );
};

export default PhotoArea;
