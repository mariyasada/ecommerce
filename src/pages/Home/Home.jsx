import React from "react";
import {
  epicDealItem,
  topBrandItem,
} from "../../components/HomePageCard/HomePageData";
import "../Home/HomePage.css";
import { Link } from "react-router-dom";
import { Footer, HomePageCard } from "../../components/index";

export const Home = () => {
  return (
    <section className="main-images-container">
      <div className="image-with-badges">
        <img className="home-page-image" src="./assets/cover-image.jpg" />
        <div className="home-product-badge border-round">
          <p className="quote">
            <em>
              perfume is the art that makes memory speak, choose your art with
              Mehak
            </em>
          </p>
          <Link to="/productpage">
            <span className="product-with-arrow"> Buy Now </span>
          </Link>
        </div>
      </div>

      <h2 className="heading">EPIC DEALS ON BIG BRANDS</h2>
      <div className="feature-brand-container">
        <div className="discount-images-container">
          {epicDealItem.map((item, index) => {
            return <HomePageCard userItem={item} key={index} />;
          })}
        </div>
      </div>
      <h2 className="heading">TOP PRODUCTS FOR YOU</h2>
      <div className="feature-brand-container">
        <div className="discount-images-container">
          {topBrandItem.map((item) => {
            return <HomePageCard userItem={item} key={item} />;
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};
