import React,{useEffect} from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../Firebase";

function Header() {
  const[{basket,user}]=useStateValue();
  useEffect(() => {
    const onRouteChange = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
    };

    // Add an event listener to the "popstate" event, which is triggered when the route changes
    window.addEventListener('popstate', onRouteChange);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => {
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="image-removebg-preview (6).png"
          alt="Logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <Link  to={!user && "/login" }>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option1">Hello,{user?user.email.substring(0, 6):'Guest'}</span>
            <span className="header-option2">{user?'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <Link to="/orders">
        <div className="header-option">
          <span className="header-option1">Retruns</span>
          <span className="header-option2">& Orders</span>
        </div>
        </Link>
        <div className="header-option">
          <span className="header-option1">Your</span>
          <span className="header-option2">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header-basket">
          <ShoppingBasketIcon />
          <p className="header-basket iteam-count">{basket.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
