import React from "react";
import { BrandLog, ImageIcons } from "../../utils/images";
import { Link } from "react-router-dom";
import { routPath } from "../../Routes/rootpath";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header-logo">
        <div>
          <img src={BrandLog.imgFile} alt={BrandLog.imgName} />
        </div>
        <span>RPP </span>
      </div>
      <ul className="header-list df-ac-je">
        <li className="cart">
          {/* <img src={ImageIcons.carts} alt="carts" /> */}
          {/* <span className="dot">2</span> */}
        </li>
        <li><Link to={routPath.createProduct}>Sign in</Link></li>
        <li>Sign out</li>
      </ul>
    </div>
  );
};

export default Header;
