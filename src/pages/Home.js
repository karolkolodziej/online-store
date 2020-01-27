import React from "react";
import { Link } from "react-router-dom";

import "./_Home.scss";
import SlideShow from "../components/SlideShow";

export const Home = () => {
  return (
    <section>
      <div className="slide-show">
        <SlideShow text="Check our colection" to="/buy" />
      </div>
      <div className="home-content">
        <h1>ABOUT US</h1>
        <p>
          A woman’s wardrobe is her opportunity to stand out and make a lasting
          first impression. Launched in 2012, Impressions Online Boutique offers
          a wide range of apparel to fit any woman’s unique sense of style. Our
          clothing and accessories are carefully curated to provide our
          customers the latest fashions. To keep our customers in style we post
          new arrivals daily, as well as offer stylist picks to help any
          indecisive shoppers. Impressions Online Boutique is a fashionista’s
          best place to create the perfect wardrobe. Beyond helping you look
          your best, Impressions Online Boutique strives to make every purchase
          a positive experience. Our top priorities are excellent customer
          service, exceptionally quick order processing, ultra fast shipping
          times, and a hassle-free return policy. We value your feedback,
          whether positive or constructive and we are continuously working to
          improve your experience. If you are a first-time visitor or
          long-standing customer, we hope you will be thrilled with every aspect
          of your Impressions Online Boutique shopping experience.
        </p>
      </div>
    </section>
  );
};
