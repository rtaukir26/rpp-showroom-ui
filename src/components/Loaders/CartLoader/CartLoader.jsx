import { useState } from "react";

const CartLoader = () => {
  const [card, setCard] = useState(2);
  return Array.from({ length: card }).map((_, index) => (
    <div className="cart-item-loader p-4 d-flex justify-content-start">
      <div className="loader-mover" style={{ "--timer": "2.5s" }}></div>
      <div
        className="cart-img-div d-flex align-items-center justify-content-center overflow-hidden"
        style={{ height: "160px", width: "160px" }}
      ></div>

      {/* content */}
      <div class="card-content d-flex flex-column ms-5  ">
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <div className="btn-grp mt-2 d-flex align-items-center">
          <button className="btn d-flex align-items-center">
            <span></span>
          </button>
          <button className="btn ms-4 d-flex align-items-center">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  ));
};

export default CartLoader;
