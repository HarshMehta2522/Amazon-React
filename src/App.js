import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Checkout from "./Components/checkout";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/payment";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // Add an empty dependency array to run the effect only once
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>>", authUser);
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
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
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
              <Payment />
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
