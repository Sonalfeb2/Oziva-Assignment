import React from "react";

import { Link } from "react-router-dom";
const Header = ({ cartLength, handleInput }) => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2>Oziva Shop</h2>
        </Link>
      </div>
      <div>
        Search :{" "}
        <input
          type="text"
          placeholder="search product here.."
          onChange={e => handleInput(e.target.value)}
        />
      </div>
      <Link to={`/cart`}>
        <div>
          <i
            className="shop icon"
            style={{ margin: "0px 0.25rem 16px 30px", fontSize: "2rem" }}
          />

          <p style={{ float: "right", margin: "-15px 0 1em" }}>
            {cartLength}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Header;
