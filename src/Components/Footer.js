import React from "react";
import "./Footer.css";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <div className="foot1" onClick={handleBackToTop}>
        Back to Top
      </div>

      <div className="foot2">
        <ul>
          <h5>Get to Know Us</h5>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </ul>
        <ul>
          <h5>Make Money with Us</h5>
          <p>Sell Products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self Publish with Us</p>
          <p>Host an Amazon Hub</p>
        </ul>
        <ul>
          <h5>Amazon Payment Products</h5>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </ul>
        <ul>
          <h5>Let Us Help You</h5>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </ul>
      </div>

      <div className="foot3">
        <div className="logo"></div>
      </div>

      <div className="foot4">
        <div className="pages">
          <p>Conditions of Use</p>
          <p>Privacy Notice</p>
          <p>Your Ads Privacy Choices</p>
        </div>
        <div className="copyright">
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
