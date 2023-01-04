import img from "./error.gif";

const ErrorMessage = () => {
  const imgStyle = {
    display: "block",
    width: "250px",
    height: "250px",
    objectFit: "contain",
    margin: "0 auto",
  };
  return <img src={img} style={imgStyle} alt="error message" />;
};

export default ErrorMessage;
