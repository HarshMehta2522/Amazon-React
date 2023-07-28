import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/home";
import Checkout from "./Components/checkout";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
