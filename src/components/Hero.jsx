import React from "react";

export default function Hero() {
  return (
    
      <div className="hero">
        <div className="hero-left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className="shopping">
            <p>Also Available on</p>
            <div className="shopping-icon">
              <img src="/images/flipkart.png" alt="flipkart-logo" />
              <img src="/images/amazon.png" alt="amazon logo" />
            </div>
          </div>
        </div>
        <div className="hero-right">
            <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>

  );
}
