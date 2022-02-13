import "./content.scss";
import OfferCard from "../OfferCard/OfferCard";

const HomeContent = ({ data }) => {
  // console.log(offers);
  return (
    <div className="content">
      <div className="container">
        <h2>Toutes les offres</h2>
        <div className="offers">
          {data.offers.map((offer, index) => {
            return <OfferCard key={index} offer={offer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
