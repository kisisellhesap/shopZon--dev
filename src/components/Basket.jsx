import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./childComponents/BasketCard";
import { Link } from "react-router-dom";
const Basket = () => {
  const { basket, isLoading } = useSelector((store) => store.basketReducer);
  console.log(basket);
  let total = 0;
  let quantity = 0;
  basket.forEach((element) => {
    return (total += element.price * element.amount);
  });
  basket.forEach((element) => {
    return (quantity += element.amount);
  });

  return (
    <div className="basket">
      <div className="container">
        {basket.length === 0 ? (
          <div className="none-basket">
            <p>Sepette Ürün Bulunmuyor </p>
            <Link to="/"> ÜrünLere Git </Link>
          </div>
        ) : (
          <>
            <h2>Sepetinizdeki ürünler</h2>
            <div className="basket-list">
              {basket.map((item, index) => (
                <BasketCard item={item} key={index} />
              ))}
            </div>
            <div className="basket-total">
              <h3>TOTAL </h3>
              <p className="basket-quantity"> Quantity : {quantity}</p>
              <p className="basket-price"> Total : {total}TL</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
