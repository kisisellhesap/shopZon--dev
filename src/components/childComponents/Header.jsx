import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { basket } = useSelector((store) => store.basketReducer);
  let quantity = 0;

  basket.forEach((element) => {
    return (quantity += element.amount);
  });
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ShopZon</h1>
        </Link>
        <nav>
          <button className="like-btn icon-btn">
            <FiHeart />
          </button>
          <Link to="basket" className="basket-btn icon-btn">
            <LuShoppingCart />
            <span className="product-count">{quantity}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
