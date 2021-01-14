import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h2>VAPOR</h2>
      </div>
      <div className="dropdown">
        <button className="header-button-dropDown">STORE</button>
        <div className="dropdown-content">
          <h5>HOME</h5>
          <h5>DISCOVERY QUEUE</h5>
          <h5>WISHLIST</h5>
          <h5>POINTS SHOP</h5>
          <h5>NEWS</h5>
          <h5>STATS</h5>
        </div>
      </div>
      <div className="dropdown">
        <button className="header-button-dropDown">COMMUNITY</button>
        <div className="dropdown-content">
          <h5>HOME</h5>
          <h5>DISCUSSIONS</h5>
          <h5>WORKSHOP</h5>
          <h5>MARKET</h5>
          <h5>BROADCASTS</h5>
        </div>
      </div>
      <div className="dropdown">
        <button className="header-button">ABOUT</button>
      </div>
      <div className="dropdown">
        <button className="header-button">SUPPORT</button>
      </div>
    </div>
  );
}
