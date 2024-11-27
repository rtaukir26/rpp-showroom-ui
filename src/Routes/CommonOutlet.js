import React from "react";
import { Outlet } from "react-router-dom";

const CommonOutlet = () => {
  return (
    <div className="main-container">
      <div className="header">header</div>
      <div className="content">
        <div className="sidebar">sidebar</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonOutlet;
