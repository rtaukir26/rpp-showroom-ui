import React from "react";

const Product = ({img,cls}) => {
  return (
    <div className={`product-outer ${cls}`}>
      <div className="product-inner">
        <img src={img} alt="p1" />
      </div>
    </div>
  );
};

export default Product;
