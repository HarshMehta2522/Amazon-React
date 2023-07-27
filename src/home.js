import React from "react";
import "./Home.css"
import Product from "./Product";
function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <img
            className="home-image"
            src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
            alt="home page"
            />
            <div className="home-row">
                <Product id="4903850" title=
                "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://m.media-amazon.com/images/I/61-foZT3rkL._AC_UY327_FMwebp_QL65_.jpg" rating={4}/>
                <Product title=
                "The Lean StartUp" price={199.99} image="https://m.media-amazon.com/images/I/51k62mBthIL._AC_SY200_.jpg" rating={4}/>
            </div>
            <div className="home-row"> 
                <Product id="23445930" title= "Amazon Egho (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} image="https://m.media-amazon.com/images/I/61rNSKloy2L._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
                <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} image="https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
                <Product  id="123456789" title=
                "Stone Lain Brighton 16-Piece Dinnerware Set Porcelain, Pink" price={74.96} image="https://m.media-amazon.com/images/I/71uyu7KfVvL._AC_UL600_FMwebp_QL65_.jpg" rating={3}/>
               
            </div>
            <div className="home-row">
            <Product id="987654321" title=
                "SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 256GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Lavender" price={999.99} image="https://m.media-amazon.com/images/I/718LuUVEOZL._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
            </div>
        </div>
    </div>
  );
}

export default Home;
