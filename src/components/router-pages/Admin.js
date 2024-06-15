import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:3001/products";

export function AdminPage() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    brand: "",
    model: "",
    image: "",
    price_usd: "",
    price_inr: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(baseURL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const createProduct = async () => {
    try {
      const response = await axios.post(baseURL, product);
      setProducts([...products, response.data]);
      setProduct({
        id: "",
        name: "",
        brand: "",
        model: "",
        image: "",
        price_usd: "",
        price_inr: "",
      });
    } catch (error) {
      console.error("Error creating product", error);
    }
  };

  const updateProduct = async (id) => {
    try {
      const response = await axios.put(`${baseURL}/${id}`, product);
      setProducts(
        products.map((prod) => (prod.id === id ? response.data : prod))
      );
      setProduct({
        id: "",
        name: "",
        brand: "",
        model: "",
        image: "",
        price_usd: "",
        price_inr: "",
      });
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      console.log("deleting id=", id);
      await axios.delete(`${baseURL}/${id}`);
      setProducts(products.filter((prod) => prod.id !== id));
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      updateProduct(product.id);
    } else {
      createProduct();
    }
  };

  const handleEdit = (prod) => {
    setProduct(prod);
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <h1>Product Management</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <br />
          <input
            type="text"
            name="brand"
            className="form-control"
            value={product.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />
          <br />
          <input
            type="text"
            className="form-control"
            name="model"
            value={product.model}
            onChange={handleChange}
            placeholder="Model"
            required
          />
          <br />
          <input
            type="number"
            className="form-control"
            name="price_usd"
            value={product.price_usd}
            onChange={handleChange}
            placeholder="Price (USD)"
            required
          />
          <br />
          <input
            type="number"
            name="price_inr"
            className="form-control"
            value={product.price_inr}
            onChange={handleChange}
            placeholder="Price (INR)"
            required
          />
          <br />
          <button type="submit" className="btn btn-primary">
            {product.id ? "Update" : "Create"} Product
          </button>
        </form>
      </div>
      <div className="col-sm-8">
        <ul class="list-group">
          {products.map((prod) => (
            <li key={prod.id} class="list-group-item">
              {prod.name} - {prod.brand} - {prod.model} - {prod.price_usd} USD -{" "}
              {prod.price_inr} INR
              <br />
              <button
                className="m-2 btn btn-primary"
                onClick={() => handleEdit(prod)}
              >
                Edit
              </button>
              <button
                className="m-2 btn btn-danger"
                onClick={() => deleteProduct(prod.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
