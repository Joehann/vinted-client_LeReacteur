import "./offer-card.scss";
import { Link } from "react-router-dom";

/**
 *
 * @param {offer: Object}
 * @returns {React.ElementType}
 */
const OffersCard = ({ offer }) => {
  // console.log(offer);
  return (
    <Link to={`/offer/${offer._id}`}>
      <div className="offer-card">
        <div className="card-avatar">
          <img src={offer.owner.account.avatar.secure_url} alt="" />
          <span>{offer.owner.account.username}</span>
        </div>
        <div className="product-image">
          <img src={offer.product_image.secure_url} alt={offer.product_name} />
        </div>
        <div className="product-details">
          <span className="product-name">
            <p>{offer.product_name}</p>
          </span>
          <p className="product-price">{offer.product_price.toFixed(2)}€</p>
          <p className="product-size">{offer.product_details[0].MARQUE}</p>
          <p className="product-brand">{offer.product_details[1].TAILLE}</p>
        </div>
      </div>
    </Link>
  );
};

export default OffersCard;
