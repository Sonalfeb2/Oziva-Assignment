import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = (props) => {
  
  const products = useSelector((state) => state.allProducts.products);
  const handleCart = product => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    if (cartData) {
      
      const data = [...cartData, product];
      localStorage.setItem("cart", JSON.stringify(data));
     
      
    } else {
      const data = [
        product
      ];
      localStorage.setItem("cart", JSON.stringify(data));
    }
    props.handleCartValue()
  };
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        
          <div className="ui link cards">
            <div className="card">
              <div className="image">
              <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
                
                <button onClick={() => handleCart(product)}>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon" />
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                  </button>
              </div>
            </div>
          </div>
        
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
