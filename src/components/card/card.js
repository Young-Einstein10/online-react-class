import QRCodeImg from "../../qr-code-component-main/images/image-qr-code.png";
import "./card.css";

const Card = ({ title, description }) => {
  return (
    <div className="max-width-wrapper">
      <div className="img-wrapper">
        <img src={QRCodeImg} alt="QR Code" />
      </div>

      <div className="content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
