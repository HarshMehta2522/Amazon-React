import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  const isBasketEmpty = basket.length === 0;

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
            <h3>Hello {user ? user.email : ""}</h3>
            <h2>Your Shopping Cart</h2>
            {isBasketEmpty ? (
              <p>Add items to your cart</p>
            ) : (
              basket.map((item) => (
                <CheckoutProduct
                  // key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="checkout-right">{!isBasketEmpty && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
