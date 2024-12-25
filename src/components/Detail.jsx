import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBasket, getProduct } from "../redux/action";
import { toast } from "react-toastify";
const Detail = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const { basket, singleProduct, productLoading } = useSelector(
    (store) => store.basketReducer
  );

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const basketAdd = () => {
    const filtered = basket.find((item) => item.id == id.id);

    if (filtered) {
      toast.error("Bu ürün sepette zaten var");
      return;
    }

    dispatch(addBasket(singleProduct));
    toast.success("ürün sepete eklendi");
  };

  return (
    <div className="detail">
      <div className="container">
        {productLoading ? (
          <img src="/public/loading.gif" className="loading-gif" />
        ) : (
          <>
            <img src={singleProduct.image} alt="" />
            <div className="detail-info">
              <h2 className="detail-title">{singleProduct.title}</h2>
              <p className="detail-desc">{singleProduct.description}</p>

              <div className="detail-other-info">
                <button onClick={basketAdd}>Sepete Ekle</button>
                <p className="detail-price">{singleProduct.price} TL</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
