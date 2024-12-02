import React from "react";
import { MenuImg, Products } from "../../utils/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="footer-card">
          <div className="footer-img">
          <img src={Products["allp"]} alt="product" />
          </div>
          <div className="f-content">
            <span>Products</span>
            <span className="p_value">+50K</span>
          </div>
        </div>
        <div className="footer-card">
          <div className="footer-img">
          <img src={Products["allp"]} alt="product" />
          </div>
          <div className="f-content">
            <span>Products</span>
            <span>+50K</span>
          </div>
        </div>
        <div className="footer-card">
          <div className="footer-img">
            <img src={Products["allp"]} alt="product" />
          </div>
          <div className="f-content">
            <span>Products</span>
            <span>+50K</span>
          </div>
        </div>
      </div>
      <div className="footer-content">content</div>
    </div>
  );
};

export default Footer;
