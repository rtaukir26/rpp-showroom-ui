import React, { useState } from "react";

const ProductLoader = () => {
  const [card, setCard] = useState(5);

  return (
    <div className="product-loader-main">
      <div className="product-loader-body">
        {Array.from({ length: card }).map((_, index) => (
          <div className="loader-card" key={index}>
            <div className="loader-mover" style={{ "--timer": "1.5s" }}></div>
            <div className="left">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="right">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLoader;
