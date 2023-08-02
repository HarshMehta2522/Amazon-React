import React, { useState, useEffect } from "react";
import "./payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../reducer";
import axios from "../axios";
import CheckoutProduct from "./CheckoutProduct";

const formatCurrency = (value) => {
  const formattedValue = parseFloat(value).toFixed(2);
  const parts = formattedValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${parts.join(".")}`;
};

function Payment() {
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [{ basket, user }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create`,
        data: {
          amount: (getBasketTotal(basket)*100 ), // Convert amount to cents as an integer
        },
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);


  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setProcessing(true);

      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error("CardElement not found.");
      }

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          },
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setSucceeded(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        navigate("/orders", { replace: true });
      }
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
      navigate("/orders", { replace: true });
        setProcessing(false);
      setSucceeded(false);
    }
  };


  const totalValue = getBasketTotal(basket);

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
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
                key={item.id}
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
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {/* Wrap the Payment component with Elements */}
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <h3>Order Total: {formatCurrency(totalValue)}</h3>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
