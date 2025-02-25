import React from "react";
import { BrandLog, ImageIcons, MenuImg, Products } from "../../utils/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="comp">
        <img src={BrandLog.imgFile} alt={BrandLog.imgName} />
        <span>RPP Showroom</span>
      </div>
      <div className="footer-header">
        <div className="footer-card">
          <div className="footer-img">
            <img src={ImageIcons.clientsIcon} alt="product" />
          </div>
          <div className="f-content">
            <span>Happy Clients</span>
            <span className="p_value">+20K</span>
          </div>
        </div>
        <div className="footer-card">
          <div className="footer-img">
            <img src={ImageIcons.productAlIcon} alt="product" />
          </div>
          <div className="f-content">
            <span>Products</span>
            <span className="p_value">+50K</span>
          </div>
        </div>
        <div className="footer-card">
          <div className="footer-img">
            <img src={ImageIcons.trendingItemsIcon}  alt="product" />
          </div>
          <div className="f-content">
            <span>Trending Items</span>
            <span className="p_value">+30K</span>
          </div>
        </div>
      </div>


      <div className="footer-content">
        <div className="wrapper">
          <div className="general">
            <strong>GENERAL</strong>
            <span>About us</span>
            <span>Clients</span>
            <span>+50 products</span>
          </div>
          <div className="general">
            <strong>PARTNERS</strong>
            <span>KK Electronics</span>
            <span>Mathun</span>
            <span>Joylic</span>
            <span>More</span>
          </div>
          <div className="general">
            <strong>FOLLOW US</strong>
            <span>Instagram</span>
            <span>Youtube</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
