import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  // Helper function to format price as currency
  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="subtotal">
      <p>
        subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal-gift">This order contains a Gift</small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
