import React from "react";
import "./Components/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const[{basket}]=useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-option1">Hello</span>
          <span className="header-option2">Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-option1">Retruns</span>
          <span className="header-option2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option1">Your</span>
          <span className="header-option2">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header-basket">
          <ShoppingBasketIcon />
          <span className="header-basket iteam-count">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
