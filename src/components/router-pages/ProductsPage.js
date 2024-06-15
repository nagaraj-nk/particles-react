import React, { useEffect, useState } from "react";
import './Products.css';

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const imageIcon = "https://www.pngitem.com/pimgs/m/568-5680053_prod-placeholder-vector-product-icon-png-transparent-png.png";

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        extractBrands(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const extractBrands = (products) => {
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    setBrands(uniqueBrands);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(product => product.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    if (minPrice !== "") {
      filteredProducts = filteredProducts.filter(product => product.price_usd >= parseFloat(minPrice));
    }

    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(product => product.price_usd <= parseFloat(maxPrice));
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Brand"
          value={selectedBrand}
          onChange={handleBrandChange}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>

      <div className="row">
        {filteredProducts.map((product, i) => (
          <div className="col-sm-3 p-4" key={i}>
            <div className="card">
              <img
                src={imageIcon}
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
    </div>
  );
}
