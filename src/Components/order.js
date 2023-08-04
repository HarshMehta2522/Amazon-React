import React from "react";
import "./order.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
const formatCurrency = (value) => {
  const formattedValue = parseFloat(value).toFixed(2);
  const parts = formattedValue.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${parts.join(".")}`;
};
function Order({ order }) {
  const [{ basket }] = useStateValue();
  const totalValue = getBasketTotal(basket);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
            hideButton
        />
      ))}
      <div className="order-total">
        <p>Total: {formatCurrency(order.data.amount/100)}</p>
      </div>
    </div>
  );
}

export default Order;
