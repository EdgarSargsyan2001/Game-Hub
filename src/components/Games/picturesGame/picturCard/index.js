
import backpic from "../image/backpic.jpg";
import classnames from "classnames";
import "../picturesGame.css";

const PicturCard = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  return (
    <div
      className={classnames("card-item-picture", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={backpic} alt="backpic" className="img-card" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="frontpic" className="img-card" />
      </div>
    </div>
  );
};
export default PicturCard;
