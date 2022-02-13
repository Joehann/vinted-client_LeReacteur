import "./content.scss";
import Pictures from "../Pictures/Pictures";
import Detail from "../Detail/Detail";

const OfferContent = ({ data }) => {
  return (
    <div className="offer-content container">
      <Pictures data={data} />
      <Detail data={data} />
    </div>
  );
};

export default OfferContent;
