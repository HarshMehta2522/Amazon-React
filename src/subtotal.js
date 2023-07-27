import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function subtotal() {
  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                subtotal(0 items):<strong>0</strong>
                </p>
                <small className="subtotal-gift">This order contains Gift</small>
            </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Procees to Checkout</button>
    </div>
  );
}

export default subtotal;
