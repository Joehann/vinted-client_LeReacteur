import "./detail.scss";
import { Link } from "react-router-dom";

const ProductDetails = ({ data }) => {
  return (
    <div className="offer-product-details">
      <p className="product-price">{data.product_price} €</p>
      <div className="product-list">
        {
          //Allows dynamic detail display with a value only
          data.product_details.map((item, index) => {
            const keys = Object.keys(item);
            return (
              <div key={index} className="list-item">
                <span className="left">{keys[0]}</span>
                <span className="right">{item[keys[0]]}</span>
              </div>
            );
          })
        }
      </div>
      <div className="divider"></div>
      <div className="offer-product-content">
        <p className="name">{data.product_name}</p>
        <p className="description">{data.product_description}</p>
        <div className="product-offer-avatar">
          {/* <img
            src="https://api.iconify.design/ph:user-fill.svg?color=%23888888"
            alt=""
          /> */}
          <span>{data.owner.account.username}</span>
        </div>
      </div>
      <Link
        to="/payment"
        state={{
          product_name: data.product_name,
          product_price: data.product_price,
        }}
      >
        <button>ACHETER</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
