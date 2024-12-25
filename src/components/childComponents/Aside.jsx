import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/action";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Aside = () => {
  const dispatch = useDispatch();
  const { categories, categoryLoader } = useSelector(
    (store) => store.productReducer
  );
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      {!categoryLoader && (
        <aside>
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => {
              return (
                <NavLink
                  to={category}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  key={index}
                >
                  {category}
                </NavLink>
              );
            })}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Aside;
