import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 4 fitness and Activity Tracker with Built-In Gps, Heart Rate, Black, One Size"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
            price={989.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSNXZA 49' QLED 120Hz HDR1000 WQHD Curved Super Wide 32:9 Gaming Monitor"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
