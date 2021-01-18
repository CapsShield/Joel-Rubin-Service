import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="nav">
        <button className="cart">CART(1)</button>
      </div>
      <div className="search-content">
        <button className="navButton" id="b1">
          Your Store
          <i className="fas fa-caret-down"></i>
        </button>

        <button className="navButton" id="b2">
          Browse
          <i className="fas fa-caret-down"></i>
        </button>

        <button className="navButton" id="b3">
          Points Shop
        </button>

        <button className="navButton" id="b4">
          News
        </button>

        <button className="navButton" id="b5">
          Vapor Labs
        </button>
        <div></div>
        <img
          className="img-nav"
          src="https://steamstore-a.akamaihd.net/public/images/v6/store_header_search.png?v=1"
        />
      </div>
    </div>
  );
}
