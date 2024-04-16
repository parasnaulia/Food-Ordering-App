import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="img1">
        <img
          src={
            "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"
          }
          style={{ height: "5rem", width: "8rem" }}
          alt="Swiggy Logo"
        />
      </div>
      <div className="inner">
        <div className="items">
          <Link to="/">Home</Link>
        </div>
        <div className="items">
          <Link to="/about">About</Link>
        </div>
        <div className="items">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="items">
          <Link to="/cart">Cart</Link>
          {/* You can add an image here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Header;
