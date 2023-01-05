import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  const errorStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={errorStyle}>
      <ErrorMessage />
      <h1 style={{ fontSize: "30px" }}>
        {" "}
        Вы перешли на несуществующую страницу{" "}
      </h1>
      <Link
        to="/cottagevillage"
        style={{ fontSize: "25px", color: "darkblue" }}
      >
        {" "}
        Вернуться на главную страницу{" "}
      </Link>
    </div>
  );
};

export default Page404;
