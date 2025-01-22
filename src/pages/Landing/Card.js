import React from "react";
import { CartIcon } from "../../utils/images";

const Card = ({ product, handleBuy, handleAddToCart }) => {
  return (
    <div className="card-con" >
      <div className="img-con">
        <img src={product?.photos[0]?.url} alt="battery" />
      </div>
      <div className="card-content">
        <p className="description truncate">{product?.description}</p>
        <div className="price">
          <span>price:{product?.price}</span>
        </div>
        <div className="btn-con">
          <button title="Buy" onClick={() => handleBuy(product)}>
            Buy
          </button>
          <button
            title="Add to cart"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            <img src={CartIcon.imgFile} alt={CartIcon.imgName} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
