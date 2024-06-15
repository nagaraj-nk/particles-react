import './Products.css'
import { React, useEffect, useState } from "react";
import { json } from "react-router-dom";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error)=>console.log(error));
  }, []);

  return (
    <div className="row">
      {products.map((product, i) => (
        <div className="col-sm-3 p-4">
          <div className="card" key={i}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              width={100}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.brand} - {product.model}</p>
              <p className="card-text">
                <strong>${product.price_usd}</strong>
              </p>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
