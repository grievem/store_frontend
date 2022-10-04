import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
  return (
    <div className="product">
      <img src="https://picsum.photos/180/200" alt="" />

      <h5>Travel Package 1</h5>

      <div className="prices">
        <label className="total">Total</label>
        <label className="price">Price</label>
      </div>

      <QuantityPicker />
    </div>
  );
};

export default Product;
