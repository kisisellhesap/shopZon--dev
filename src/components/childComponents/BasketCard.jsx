import { toast } from "react-toastify";
import { deleteBasket, minus, plus } from "../../redux/basketSlice";
import { useDispatch } from "react-redux";
const BasketCard = ({ item }) => {
  const dispatch = useDispatch();

  const plusAmount = () => {
    dispatch(plus(item.id));
  };

  const minusAmount = () => {
    dispatch(minus(item.id));
  };

  const deleteItem = () => {
    dispatch(deleteBasket(item.id));
    toast.success("Ürün Sepetten Silindi");
  };
  return (
    <div className="basket-card">
      <img src={item.image} alt="" />
      <div className="basket-card-info">
        <h3 className="basket-card-title">{item.title}</h3>
        <p className="basket-card-desc">{item.description}</p>

        <div className="basket-card-controller">
          <div className="controller">
            <button className="btn-icon btn-minus" onClick={minusAmount}>
              -
            </button>
            <span className="basket-card-amonut">{item.amount}</span>
            <button className="btn-icon btn-plus" onClick={plusAmount}>
              +
            </button>
          </div>
          <p className="basket-card-price">{item.price} TL</p>
        </div>

        <button className="delete-btn" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
