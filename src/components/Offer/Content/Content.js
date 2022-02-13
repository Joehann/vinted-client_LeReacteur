import "./content.scss";
import Pictures from "../Pictures/Pictures";
import Detail from "../Detail/Detail";
/**
 *
 * @param {data: Object}
 * @returns {React.ElementType}
 */
const OfferContent = ({ data }) => {
  return (
    <div className="offer-content container">
      <Pictures data={data} />
      <Detail data={data} />
    </div>
  );
};

export default OfferContent;
