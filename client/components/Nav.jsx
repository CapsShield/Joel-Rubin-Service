import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="search-content">
        <div>
          <button className="navButton">Your Store</button>
        </div>
        <div>
          <button className="navButton">Browse</button>
        </div>
        <div>
          <button className="navButton">Points Shop</button>
        </div>
        <div>
          <button className="navButton">News</button>
        </div>
        <div>
          <button className="navButton">Vapor Labs</button>
        </div>
        <div></div>
        <div>
          <input className="navButton" placeholder="visit the store"></input>
        </div>
      </div>
    </div>
  );
}
