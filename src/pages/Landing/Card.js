import React from "react";

const Card = ({ img, desc,price }) => {
  return (
    <div className="card-con">
      <div className="img-con">
        <img src={img} alt="battery" />
      </div>
      <div className="card-content">
        <p className="description truncate">
         {desc}
        </p>
        <div className="price">
          <span>price:{price}</span>
        </div>
        <div className="btn-con">
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
