import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    let value = quantity + 1;
    setQuantity(value);
  };

  const decrease = () => {
    if (quantity !== 1) {
      let value = quantity - 1;
      setQuantity(value);
    }
  };
  return (
    <div className="qt-picker">
      <button className="btn btn-sm btn-primary" onClick={increase}>
        +
      </button>
      <label>{quantity}</label>
      <button
        className="btn btn-sm btn-primary"
        disabled={quantity === 1}
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};

export default QuantityPicker;
