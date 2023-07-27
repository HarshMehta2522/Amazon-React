import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Logo"
      />
      <div className="header-search">
        <input className="header-search-input" type="text"/>
        <SearchIcon className="header-search-icon"/>
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
      <div className="header-basket">
        <ShoppingBasketIcon/>
        <span className="header-basket iteam-count">0</span>
      </div>
    </div>
  );
}

export default Header;
