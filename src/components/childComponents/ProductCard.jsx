import React from "react";
import { useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} className="product-img" />
      <h4 className="product-title">{product.title}</h4>
      <span className="product-price">{product.price} TL</span>
    </div>
  );
};

export default ProductCard;
