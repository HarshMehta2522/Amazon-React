import React from "react";
import "./payment.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Payment() {
  const [{ basket }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length}items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">Delivery Address</div>
          <div className="payment-address">
            <p>Times Square</p>
            <p>New York</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <div className="payment-details">cvv</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
