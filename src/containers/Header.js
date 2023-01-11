import React from "react";

import { Link } from "react-router-dom";
const Header = ({ cartLength }) => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>Oziva Shop</h2>
        </Link>
      </div>
      <div>
        Search : <input  />
      </div>
      <Link to={`/cart`}>
        <div>
          <i
            className="shop icon"
            style={{ margin: "2px 5.25rem 0 0" }}
          >
            <p>
              {cartLength}
            </p>
          </i>
        </div>
      </Link>
    </div>
  );
};

export default Header;
