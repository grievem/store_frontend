import Product from "./../components/product";
import "./catalog.css";

function Catalog() {
  return (
    <div className="catalog">
      <h1>Check our newly released products</h1>

      <div className="list-container">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Catalog;
