import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();

  // Helper function to format price as currency
  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleProceedToCheckout = () => {
    if (user) {
      // User is logged in, proceed to the payment page
      navigate("/payment");
    } else {
      // User is not logged in, redirect to the login page
      navigate("/login");
    }
  };

  return (
    <div className="subtotal">
      <p>
        subtotal ({basket.length} items):{" "}
        <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal-gift">This order contains a Gift</small>
      <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
