import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";
function Checkout() {
  const[{basket}]=useStateValue();
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
                    {basket.map(item=>(<CheckoutProduct
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      image={item.image}
                      rating={item.rating}

                    />))}
                </div>
            </div>
        </div>
        <div className="checkout-right"><Subtotal/></div>
    </div>
  );
}

export default Checkout;
