import React from "react";
import "./checkout.css";
import Subtotal from "./subtotal";

function checkout() {
  return (
    <div className="checkout">
        <div className="checkout-left">
            <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="banner"
            />
            <div>
                <div className="checkout-title">
                    <h2>Your Shopping Cart</h2>
                </div>
            </div>
        </div>
        <div className="checkout-right"><Subtotal/></div>
    </div>
  );
}

export default checkout;
