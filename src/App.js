import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Checkout from "./Components/checkout";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path="/" element={<><Header/><Home/><Footer/></>} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;
