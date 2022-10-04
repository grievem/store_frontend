import { useEffect, useState } from "react";
import Product from "./../components/product";
import "./catalog.css";
import Dataservice from "../services/dataService";

function Catalog() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let service = new Dataservice();
    let result = service.getCatalog();
    setProducts(result);
  }, []);
  return (
    <div className="catalog">
      <h1>Check our newly released products</h1>
      <h5>We have {products.length} products waiting for you</h5>

      <div className="list-container">
        {products.map((prod) => (
          <Product title={prod.title} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
