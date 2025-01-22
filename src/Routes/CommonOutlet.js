import React from "react";
import { Outlet } from "react-router-dom";
import { BrandLog, ImageIcons } from "../utils/images";
import Header from "../components/Header/Header";

const CommonOutlet = () => {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {/* <div className="sidebar">sidebar</div> */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonOutlet;
