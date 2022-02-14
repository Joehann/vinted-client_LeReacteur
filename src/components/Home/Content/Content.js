import "./content.scss";
import OfferCard from "../OfferCard/OfferCard";
import Paginate from "../paginate/Paginate";

const HomeContent = ({ data, setPageNumber, limit, pageNumber }) => {
  // console.log(pageNumber);
  return (
    <div className="content">
      <div className="container">
        <h2>Toutes les offres</h2>
        <div className="offers">
          {data.offers.map((offer, index) => {
            return <OfferCard key={index} offer={offer} />;
          })}
        </div>
        <Paginate
          data={data}
          setPageNumber={setPageNumber}
          limit={limit}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
};

export default HomeContent;
