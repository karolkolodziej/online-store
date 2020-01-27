import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import basket from "../images/basket.png";

import "./_Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>

        <div className="header__mid">
          <Link to="/buy" className="header__mid--item">
            ONLINE STORE
          </Link>
          <Link to="/contact" className="header__mid--item">
            CONTACT
          </Link>
        </div>

        <Link to="/bag" className=" header__basket ">
          <img src={basket} alt={"basket"} />
        </Link>
      </div>
    </header>
  );
};
