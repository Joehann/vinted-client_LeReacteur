import "./detail.scss";

const ProductDetails = ({ data }) => {
  // console.log(data.product_details);
  return (
    <div className="offer-product-details">
      <p className="product-price">{data.product_price} €</p>
      <div className="product-list">
        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);
          return (
            <div key={index} className="list-item">
              <span className="left">{keys[0]}</span>
              <span className="right">{item[keys[0]]}</span>
            </div>
          );
        })}
      </div>
      <div className="divider"></div>
      <div className="offer-product-content">
        <p className="name">{data.product_name}</p>
        <p className="description">{data.product_description}</p>
        <div className="product-offer-avatar">
          <img src={data.owner.account.avatar.secure_url} alt="" />
          <span>{data.owner.account.username}</span>
        </div>
      </div>
      <button>ACHETER</button>
    </div>
  );
};

export default ProductDetails;
