import React from 'react';
import './orders.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';

const formatCurrency = (value) => {
  const formattedValue = parseFloat(value).toFixed(2);
  const parts = formattedValue.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${parts.join('.')}`;
};
const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
  const totalValue = getBasketTotal(basket);
  const navigate = useNavigate();

    
    // Get the current date and time
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    const handleContinue = () => {
        // Clear the basket by dispatching a "CLEAR_BASKET" action
        dispatch({
          type: 'CLEAR_BASKET',
        });
        scrollToTop();
    
        // Redirect to the home page
        navigate('/');
      };
    
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="orders">
      <div className="order-details">
        <h2>Congratulation your order is successful</h2>
        <h2>Order Summary</h2>
        <p>{user?.email}</p>
        <p>Times Square, New York</p>
        <p>{dateTimeString}</p>
      </div>
      <div className="order-product">
        <h3>Order Items</h3>
        <div className="order-items">
          {basket.map((item) => (
            <div className="order-item" key={item.id}>
              <img className="order-item-img" src={item.image} alt="product" />
              <div className="order-item-info">
                <p className="order-item-title">{item.title}</p>
                <p className="order-item-price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>
                <div className="order-item-rating">
                  {Array(item.rating)
                    .fill()
                    .map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="order-total">
          <p>Total: {formatCurrency(totalValue)}</p>
          <button className="print" onClick={handlePrint}>
            Print
          </button>
            <div className="finish" >
                <button onClick={handleContinue} >Continue</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
