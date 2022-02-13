import "./pictures.scss";
const ProductImages = ({ data }) => {
  // console.log(data);
  return (
    <div className="product-images">
      <img src={data.product_pictures[0].secure_url} alt="" />
    </div>
  );
};

export default ProductImages;
