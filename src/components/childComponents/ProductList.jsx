import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { getData } from "../../redux/action";
import { Link, useParams } from "react-router-dom";
const ProductList = () => {
  const { products, isLoading, sortValue } = useSelector(
    (store) => store.productReducer
  );

  // console.log(products);
  const dispatch = useDispatch();
  const category = useParams();

  useEffect(() => {
    dispatch(getData(category));
  }, [category, sortValue]);

  return (
    <>
      {isLoading ? (
        <img src="../../public/loading.gif" className="loading-gif" />
      ) : (
        <div className="product-list">
          {products.map((product, index) => {
            return (
              <Link key={index} to={`detail/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
