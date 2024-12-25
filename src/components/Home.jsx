import { Outlet } from "react-router-dom";
import Aside from "./childComponents/Aside";
import Slider from "./childComponents/Slider";
import { useDispatch, useSelector } from "react-redux";
import { sortFilter } from "../redux/productSlice";
const Home = () => {
  const { products, sortValue, isLoading, categoryLoader } = useSelector(
    (store) => store.productReducer
  );
  const dispatch = useDispatch();
  const handleSort = (e) => {
    dispatch(sortFilter(e.target.value));
  };

  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="container">{!categoryLoader && <Slider />}</div>

        <div className="container">
          <Aside />
          <div className="products">
            {!isLoading && (
              <div className="product-header">
                <h3> Popüler ürünler için {products.length} sonuç bulundu</h3>

                <select onChange={handleSort} defaultValue={sortValue}>
                  <option value="asc">Artan</option>
                  <option value="desc">Azalan</option>
                </select>
              </div>
            )}

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
