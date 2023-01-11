import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct
} from "../redux/actions/productsActions";
const CartDetails = () => {
  let product = useSelector(state => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = () => {
    const response = JSON.parse(localStorage.getItem("cart"));
    if(response){
    dispatch(selectedProduct(response));}
    else{
      dispatch(selectedProduct([]))
    }
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0
        ? <h1>Sorry - Cart Empty</h1>
        : product.map((value,index) =>
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
