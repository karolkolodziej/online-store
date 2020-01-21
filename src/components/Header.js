import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className=" ui secondary pointing menu">
      <div className="left menu">
        <Link to="/" className="item">
          HOME
        </Link>
        <Link to="/t-shirts" className="item">
          T-SHIRT
        </Link>
        <Link to="/sweatshirts" className="item">
          SWEATSHIRTS
        </Link>
        <Link to="/skirts" className="item">
          SKIRTS
        </Link>
      </div>
      <div className="right menu">
        <Link to="/bag" className="item">
          Bag
        </Link>
      </div>
    </div>
  );
};
