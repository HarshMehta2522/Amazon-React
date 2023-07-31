import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Checkout from "./Components/checkout";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./Firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Components/payment";
import Orders from "./Components/orders";
import { useStateValue } from "./StateProvider"; // Import useStateValue

const promise = loadStripe(
  "pk_test_51NZXGVSGyUMmynkIkVjt0huPAxWCXUfxiLS2JUIyvA47cQeaJPSV0XK34YmR70E6uOtb5XRuteULOfKjOARH480p00AVM6SdGk"
);

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

const App = () => {
  const [{}, dispatch] = useStateValue(); // Destructure dispatch from useStateValue

  useEffect(() => {
    // Add an empty dependency array to run the effect only once
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={<Login/>}
            ></Route>
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                  <Footer />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                  <Footer />
                </>
              }
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
