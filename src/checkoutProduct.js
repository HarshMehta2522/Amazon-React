import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating }) {
  const[,dispatch]=useStateValue();
  const removeFromBasket=()=>{
    
    console.log("check");
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-img" src={image} alt="product" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct-rating">{Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}</p>
        <button onClick={removeFromBasket}>Remove the Product</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
