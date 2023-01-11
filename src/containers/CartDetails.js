import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productsActions";
const CartDetails = () => {
  let product = useSelector(state => state.product);
  const [cartProduct, setCartProduct] = useState(product);
  const dispatch = useDispatch();
  const fetchProductDetail = () => {
    const response = JSON.parse(localStorage.getItem("cart"));
    if (response) {
      dispatch(selectedProduct(response));
    } else {
      dispatch(selectedProduct([]));
    }
  };
  console.log("pro", product.length);
  useEffect(
    () => {
      var res = [];
      product.length !== undefined
        ? product.forEach(obj => {
            const key = `${obj.id - 1}`;
            if (!res[key]) {
              res[key] = { ...obj, count: 0 };
            }
            res[key].count += 1;
          })
        : console.log(res);
      setCartProduct(res)
    },
    [product]
  );
  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(cartProduct).length === 0
        ? <h1>Sorry - Cart Empty</h1>
        : cartProduct.map((value, index) =>
            <div className="ui placeholder segment" key={index}>
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src={value.image} />
                  </div>
                  <div className="column rp">
                    <h1>
                      {value.title}
                    </h1>
                    <h2>
                      <a className="ui teal tag label">
                        ${value.price}
                      </a>
                      <a className="ui teal tag label">
                        ITEMS {value.count}
                      </a>
                    </h2>
                    <h3 className="ui brown block header">
                      {value.category}
                    </h3>
                    <p>
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
    </div>
  );
};

export default CartDetails;
