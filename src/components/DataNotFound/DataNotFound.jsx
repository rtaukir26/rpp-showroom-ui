import React from "react";
import { ImageIcons } from "../../utils/images";

const DataNotFound = () => {
  return (
    <div className="not-found">
      <span>Product not found</span>
      <img src={ImageIcons["notFound"]} alt="not-found" />
    </div>
  );
};

export default DataNotFound;
